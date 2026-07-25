"use server";

import { contributorInquiries, db, waitlistEntries } from "@synexes/db";

export type SurveyPayload = {
  email: string;
  persona: string;
  surveyData: Record<string, unknown>;
};

export type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitSurvey(payload: SurveyPayload): Promise<ActionResult> {
  const { email, persona, surveyData } = payload;

  if (!email || !EMAIL_REGEX.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  try {
    await db.insert(waitlistEntries).values({
      email: email.toLowerCase().trim(),
      persona,
      surveyData,
    });

    return {
      success: true,
      message: "You're on the early access list. We'll email you when enrollment opens.",
    };
  } catch (err: unknown) {
    // PostgreSQL unique constraint violation code
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code === "23505"
    ) {
      return { success: false, error: "You are already on the list! 🎉" };
    }

    console.error("[submitSurvey] Unexpected error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}

export type ContributorInquiryPayload = {
  email: string;
  role: string;
  skills: string;
  availability: string;
  motivation?: string;
};

export async function submitContributorInquiry(
  payload: ContributorInquiryPayload,
): Promise<ActionResult> {
  const email = payload.email.toLowerCase().trim();
  const role = payload.role.trim();
  const skills = payload.skills.trim();
  const availability = payload.availability.trim();
  const motivation = payload.motivation?.trim();

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  if (!role || !skills || !availability) {
    return { success: false, error: "Role, skills, and availability are required." };
  }

  try {
    await db.insert(contributorInquiries).values({
      email,
      role,
      skills,
      availability,
      motivation,
    });

    return {
      success: true,
      message: "Thanks for your interest. We will review your profile and follow up.",
    };
  } catch (err: unknown) {
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code === "23505"
    ) {
      return { success: false, error: "This email is already registered for contributor updates." };
    }

    console.error("[submitContributorInquiry] Unexpected error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
