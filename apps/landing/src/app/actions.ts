"use server";

import { db, waitlistEntries } from "@synexes/db";

export type SurveyPayload = {
  email: string;
  persona: string;
  surveyData: Record<string, unknown>;
};

export type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function submitSurvey(payload: SurveyPayload): Promise<ActionResult> {
  const { email, persona, surveyData } = payload;

  if (!email || !email.includes("@")) {
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
      message: "You're on the list! We'll be in touch soon.",
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
