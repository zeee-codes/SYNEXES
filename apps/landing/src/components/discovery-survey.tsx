"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { submitSurvey } from "../app/actions";

type Persona = "patient" | "caregiver" | "doctor";

type SurveyAnswers = {
  persona?: Persona;
  [key: string]: string | Persona | undefined;
};

type Question = {
  id: string;
  question: string;
  options: string[];
};

const PATIENT_QUESTIONS: Question[] = [
  {
    id: "annoying",
    question: "Be honest... what’s the most annoying part?",
    options: ["Finding old reports", "Remembering medications", "Re-explaining my history", "Sharing records", "😅 All of it"],
  },
  {
    id: "storage",
    question: "Where do your reports usually live?",
    options: ["WhatsApp", "Phone Gallery", "Google Drive/Dropbox", "Paper folder", "Everywhere 😵"],
  },
  {
    id: "lost",
    question: "Have you ever needed a report and couldn’t find it?",
    options: ["😭 Too many times", "Yeah, once or twice", "Never, I’m organized"],
  },
  {
    id: "pmf",
    question: "If Synexes solved this, how disappointed if it disappeared tomorrow?",
    options: ["😢 Very disappointed", "🙂 Somewhat", "😐 Not at all disappointed"],
  }
];

const CAREGIVER_QUESTIONS: Question[] = [
  {
    id: "who",
    question: "Who do you usually manage?",
    options: ["My parents", "My spouse/partner", "My child", "Someone with chronic illness"],
  },
  {
    id: "hardest",
    question: "What’s the hardest part of managing their care?",
    options: ["Keeping everyone’s reports separate", "Remembering meds/appointments", "Sharing records", "Finding old documents", "😅 Everything"],
  },
  {
    id: "organize",
    question: "How do you organize their records now?",
    options: ["Physical folders", "WhatsApp", "Google Drive", "Phone gallery", "No real system"],
  },
  {
    id: "stressful",
    question: "During doctor visits, what’s most stressful?",
    options: ["Digging up the right reports", "Remembering their history", "Explaining treatments", "Nothing stressful"],
  },
  {
    id: "pmf",
    question: "If Synexes solved this problem, how much easier?",
    options: ["🤩 A whole lot easier", "🙂 A bit easier", "😐 Not much difference"],
  }
];

const DOCTOR_QUESTIONS: Question[] = [
  {
    id: "incomplete",
    question: "Quick one, doctor: How often are histories incomplete?",
    options: ["Every day", "A few times a week", "Occasionally", "Almost never"],
  },
  {
    id: "missing",
    question: "What’s usually missing?",
    options: ["Previous reports", "Medication list", "Lab results", "Past diagnoses", "Everything"],
  },
  {
    id: "time",
    question: "How much time do you spend piecing together history?",
    options: ["<2 minutes", "2–5 minutes", "5–10 minutes", ">10 minutes"],
  },
  {
    id: "value",
    question: "If every patient had one timeline, how useful would it be?",
    options: ["🚀 Extremely useful", "🙂 Somewhat", "😐 Not much"],
  }
];

const BRANCH_QUESTIONS: Record<Persona, Question[]> = {
  patient: PATIENT_QUESTIONS,
  caregiver: CAREGIVER_QUESTIONS,
  doctor: DOCTOR_QUESTIONS,
};

const PERSONAS = [
  { id: "patient" as Persona, label: "🧑 I’m managing my own health." },
  { id: "caregiver" as Persona, label: "👨‍👩‍👦 I manage someone else’s health." },
  { id: "doctor" as Persona, label: "👨‍⚕️ I’m a doctor." },
];

export function DiscoverySurvey() {
  const [step, setStep] = useState<"intro" | "persona" | "questions" | "email" | "complete">("intro");
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [questionIdx, setQuestionIdx] = useState(0);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selectedPersona = answers.persona as Persona | undefined;
  const activeQuestions = selectedPersona ? BRANCH_QUESTIONS[selectedPersona] : [];
  const currentQ = activeQuestions[questionIdx];

  const totalSteps = activeQuestions.length;
  const progressPercent = selectedPersona ? Math.max(10, ((questionIdx) / totalSteps) * 100) : 0;

  function handleSelectPersona(p: Persona) {
    setAnswers({ persona: p });
    setQuestionIdx(0);
    setStep("questions");
    console.log("analytics: persona_selected", { persona: p });
  }

  function handleAnswer(qId: string, val: string) {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
    console.log("analytics: question_answered", { question: qId, answer: val });
    
    if (questionIdx + 1 < activeQuestions.length) {
      setQuestionIdx((prev) => prev + 1);
    } else {
      setStep("email");
    }
  }

  async function handleSubmitEmail() {
    if (!email || !email.includes("@")) return;
    setSubmitting(true);
    console.log("analytics: email_submitted", { email });
    console.log("analytics: survey_completed");

    const { persona, ...surveyData } = answers;
    const res = await submitSurvey({
      email,
      persona: persona ?? "patient",
      surveyData: surveyData as Record<string, unknown>,
    });
    setSubmitting(false);
    if (res.success || (res as any).error?.includes("already on the list")) {
      setStep("complete");
    }
  }

  return (
    <section id="survey" className="w-full py-32 px-6 bg-surface-canvas">
      <div className="w-full max-w-2xl mx-auto bg-surface-primary border border-border-default shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-[20px] p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
        
        {step !== "intro" && step !== "complete" && (
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-border-subtle">
            <div 
              className="h-full bg-brand-500 transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">Help build Synexes (30s)</h2>
              <p className="text-text-secondary mb-8">Your answers directly shape the product. This only takes ~30 seconds and will directly influence what we build next!</p>
              <button
                onClick={() => {
                  setStep("persona");
                  console.log("analytics: survey_started");
                }}
                className="px-8 py-3 rounded-[10px] bg-brand-500 text-white font-semibold hover:bg-brand-400 transition-colors shadow-sm"
              >
                Start Survey
              </button>
            </motion.div>
          )}

          {step === "persona" && (
            <motion.div
              key="persona"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <h2 className="text-2xl font-semibold text-text-primary mb-8 text-center">Which best describes you?</h2>
              <div className="flex flex-col gap-3">
                {PERSONAS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectPersona(p.id)}
                    className="w-full text-left p-4 rounded-[12px] bg-surface-raised border border-border-default hover:border-brand-500 hover:bg-surface-secondary text-text-primary font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "questions" && currentQ && (
            <motion.div
              key={`q-${questionIdx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <p className="text-sm font-medium text-brand-500 mb-2 text-center uppercase tracking-wider">
                Question {questionIdx + 1} of {activeQuestions.length}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-8 text-center leading-tight">
                {currentQ.question}
              </h2>
              <div className="flex flex-col gap-3">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(currentQ.id, opt)}
                    className="w-full text-left p-4 rounded-[12px] bg-surface-raised border border-border-default hover:border-brand-500 hover:bg-surface-secondary text-text-primary font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-center"
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">Want early access? Drop your email.</h2>
              <p className="text-text-secondary mb-8">No spam, we promise. Just a single email when we launch.</p>
              <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-[10px] bg-surface-raised border border-border-strong text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                />
                <button
                  onClick={handleSubmitEmail}
                  disabled={submitting}
                  className="w-full px-6 py-3 rounded-[10px] bg-brand-500 text-white font-semibold hover:bg-brand-400 disabled:opacity-50 transition-colors shadow-sm"
                >
                  {submitting ? "Joining..." : "Join Early Access"}
                </button>
              </div>
            </motion.div>
          )}

          {step === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-500/10 text-brand-500 mx-auto flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">You're on the list.</h2>
              <p className="text-text-secondary">We'll notify you when your timeline is ready.</p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
