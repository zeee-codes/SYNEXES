# Synexes — philosophy.md v1.0

## Purpose

[philosophy.md](http://philosophy.md) defines the core beliefs behind Synexes. It is the *why* that governs every product, design, and engineering decision. Neither `brand.md` nor `design.md` can override anything in this document. When teams disagree, they resolve the disagreement here.

This document changes rarely, and never casually.

---

## Who Synexes Exists For

Synexes is built for **people whose lives are organized around chronic illness**.

Primary users, in priority order:

1. **Caregivers** — the family member (often an adult child) who coordinates care for someone with multiple chronic conditions.
2. **Patients with chronic disease** — people managing lifelong conditions such as heart disease, hypertension, diabetes, cancer follow-up, or autoimmune disease.
3. **Doctors and clinics** — access the same platform through shared portals and time-bound links, not a separate product.

Synexes is **not** built for:

- One-off users tracking a flu, a routine blood test, or a temporary illness.
- People looking for a general fitness or wellness tracker.
- Consumer health gimmicks.

> When a design decision improves the one-off use case but hurts the chronic-care caregiver, we choose the caregiver.
> 

---

## The Problem We Refuse to Accept

Chronic care today looks like this:

- Six specialists, six file cabinets, six sets of prescriptions.
- Paper reports scattered across hospitals, clinics, WhatsApp threads, and email attachments.
- The caregiver mentally reconstructing years of history in every new consultation.
- Doctors making decisions with only the fragment in front of them.

We refuse to accept that this is normal. Synexes exists to end this fragmentation.

---

## Core Ideology

1. **Chronology is the truth.** A medical life is a timeline, not a folder.
2. **The caregiver is the hero.** Every workflow must respect their time and cognitive load.
3. **The interface is a librarian, not a database.** It should retrieve, not require.
4. **Simple face, complex engine.** Underneath, we can be as sophisticated as needed. On the surface, the user must never feel it.
5. **Trust is not a feeling — it is precision.** Every number, date, medication, and dose must be correct, sourced, and traceable.
6. **Sharing is a first-class feature.** A caregiver visiting a doctor should share the entire relevant history in one link — revocable and time-bound.
7. **The product must be usable when the user is exhausted, scared, or standing in a hospital corridor.**

---

## Non-negotiable Design Principles

These are the seven laws. They cannot be overridden by taste, deadline, or feature request.

1. **Clarity over cleverness.** Every screen answers: *What am I looking at? What can I do? What just happened?*
2. **Time is the primary organizing principle.** Chronology wins over category unless there is a documented reason.
3. **One primary action per screen — with declared exceptions.** Dashboards, review queues, and admin surfaces may legitimately have multiple peer actions; these must be explicitly marked as multi-action surfaces.
4. **State must be communicated by at least two channels.** Never color alone. Combine with icon, motion, label, or position.
5. **Motion explains state. Motion never decorates.** If a motion doesn't answer *what changed?* it doesn't ship.
6. **Every interactive element acknowledges intent.** Hover, focus, press — always. Silence is a bug.
7. **Provenance is visible.** Every medical fact must be traceable to its source (uploaded report, doctor note, patient entry, AI extraction).

---

## UX Laws We Will Not Compromise On

- **Recovery over prevention.** Undo is available for every destructive action except final delete confirmations.
- **No dead ends.** Every empty state, error, and blocked flow offers a next step.
- **No hidden navigation for primary tasks.** Primary tasks are always one visible tap away.
- **Explicit over clever.** If a caregiver has to guess, we've failed.
- **Respect the exhausted user.** No modal traps, no forced tours, no dark patterns.
- **Data density is earned, not assumed.** Density modes exist for clinicians, not to save pixels for patients.
- **Nothing important lives on hover.** Hover is enhancement; touch and keyboard get parity.

---

## Complexity Philosophy — "Simple face, complex engine"

Synexes will have deeply complex features:

- Multi-condition timelines with cross-medication interactions.
- AI-assisted summarization across years of records.
- Role-based sharing with granular, time-bound access.
- Tree/graph visualizations of health history.

These features must be **discoverable without being loud**:

- The default view is calm and minimal.
- Complexity reveals itself progressively as the user needs it.
- Power features live behind clean surfaces, not hidden menus.
- If a feature requires explanation to a caregiver, the interface has failed — not the caregiver.

<aside>
🎯

**Rule of thumb:** A caregiver who has never used Synexes should be able to open the app, find their parent's latest report, and share it with a doctor in **under 60 seconds**.

</aside>

### Progressive disclosure model

1. **Surface layer** — what 90% of users need, always visible.
2. **Reveal layer** — filters, edits, and grouping controls, one action away.
3. **Deep layer** — power features (bulk actions, exports, advanced sharing) discoverable via a Command Palette or dedicated menus.

Never collapse the surface layer to expose the deep layer.

---

## Motion Philosophy & Laws

Motion is a communication system. It answers three questions:

1. *What just changed?*
2. *Where did it go — or come from?*
3. *Is the system alive and responding to me?*

### Motion Laws

1. **Motion explains, never decorates.**
2. **Standard interactions are buttery**, not snappy. Default duration is in the 300–350ms range with an Apple-like easing curve.
3. **Achievement moments (save, complete, confirm) are snappier**, 180–220ms, with a subtle spring.
4. **Errors are immediate and minimal.** No shake unless critical. No red flash.
5. **Positive feedback is felt through motion first, color second.** A saved state should feel like a soft settle, not a green checkmark alone.
6. **Loading uses skeletons, not spinners** — except when the skeleton shape cannot be predicted.
7. **Reduced motion is respected everywhere.** When `prefers-reduced-motion` is on, movement is replaced with opacity/scale minimums — never removed entirely, because users still need state feedback.
8. **No motion competes with content.** If a user is reading, nothing moves nearby.

### What We Will Never Animate

- Decorative gradients.
- Idle icons.
- Marketing-style hero effects inside the product.
- Success celebrations that block work.

---

## Trust & Safety Principles (Healthcare Layer)

Because Synexes handles medical data, philosophy extends into safety:

1. **Every destructive action is reversible or confirmed.**
2. **Every AI-generated statement shows its source.**
3. **Uncertainty is visible.** AI confidence is displayed, not hidden.
4. **Sharing has an expiry by default.** Permanent access is opt-in.
5. **Sensitive data is never surfaced in previews or notifications.**
6. **Nothing is auto-published to doctors or third parties without explicit consent.**
7. **The audit trail is always accessible to the account owner.**

---

## Feedback & Positive Reinforcement

Positive states in Synexes are conveyed **through motion, not color explosions**.

- A successful save should feel like a soft settle — a subtle scale-in and opacity resolve.
- An action that completes a longer task (e.g., "All reports linked to Dad's cardiology history") may use a snappier spring with a brief accent glow, then return to rest.
- Never use confetti, sparkles, or celebratory sounds inside the product.
- Marketing surfaces may be more expressive; product surfaces may not.

---

## What We Compromise / What We Don't

### We compromise on

- Visual novelty. We will never win a design award through decoration.
- Feature velocity when quality is at risk.
- Density on patient-facing screens (comfort wins).
- Marketing-style delight inside the product.

### We do not compromise on

- Accessibility (WCAG 2.2 AA minimum).
- Data correctness, provenance, and traceability.
- Response to user intent (every action acknowledged).
- Chronology as the organizing principle.
- Clarity of primary action.
- Reduced-motion, keyboard, and screen-reader parity.

---

## Decision Heuristics

When in doubt, apply these in order:

1. Does this help a caregiver on a bad day?
2. Does this preserve chronology and provenance?
3. Does this reduce cognitive load, or increase it?
4. Would this decision still be correct on a small screen?
5. Would a clinician trust the information shown here?
6. Would a screen-reader user complete this task?

If you cannot answer these, do not ship.

---

## Governance

[philosophy.md](http://philosophy.md) changes rarely. Any change requires:

- Written rationale.
- Impact assessment on `brand.md` and `design.md`.
- Sign-off from the product owner.
- Entry in the Decision Log.

This document is the constitution. `brand.md` and `design.md` are its statutes.