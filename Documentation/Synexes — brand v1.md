# Synexes — brand.md v1.0

## Purpose

[brand.md](http://brand.md) defines who Synexes **is** as a name, a voice, and a public identity. It governs marketing, communications, logo usage, and the personality that surrounds — but never overrides — the product itself.

[brand.md](http://brand.md) answers:

- What is Synexes?
- How does it think?
- How does it speak?
- What does it look like out in the world?

Design decisions (colors, tokens, components) live in `design.md`. Product beliefs (why we build what we build) live in `philosophy.md`. [brand.md](http://brand.md) sits between them.

---

## What Synexes Is

**Synexes is the operating system for chronic care.**

It is the place where a family's medical history stops being paper and starts being memory. It is where a caregiver stops being an archivist and becomes a decision-maker. It is where a doctor sees the whole patient, not the fragment in front of them.

### Synexes is not

- A hospital app.
- A fitness or wellness tracker.
- A general health portal.
- An insurance product.
- A lifestyle brand.

Synexes is a **calm, precise, intelligent infrastructure** for a specific population that has been underserved for decades.

---

## Brand Personality

Four adjectives govern all brand decisions:

1. **Trustworthy** — We speak in facts. We show sources. We never exaggerate.
2. **Precise** — Every word, number, and visual has a reason.
3. **Intelligent** — We are quietly capable. We do not need to prove intelligence through complexity.
4. **Modern** — We reject the visual language of legacy healthcare. We are of today, not of the 1990s hospital lobby.

### What these adjectives are not

- Trustworthy ≠ conservative or boring.
- Precise ≠ cold or clinical-sounding to patients.
- Intelligent ≠ flashy or "AI-forward."
- Modern ≠ trendy or fashion-driven.

---

## What Matters / What Doesn't

### Matters (never compromise)

- Accuracy of medical language.
- Consistency of voice across product, marketing, and support.
- Sensitivity when addressing chronic illness, aging, and death.
- Respect for caregivers as the primary audience.
- Absence of healthcare clichés.

### Doesn't matter (we will not chase these)

- Trend-driven design refreshes.
- Emoji-heavy or overly casual social voice.
- Being "fun" for the sake of it.
- Awards, hype cycles, buzzwords.
- Competing on visual maximalism.

---

## Voice & Tone

Synexes has **one voice, two registers**. The register is chosen by context, not by mood.

### One voice

Clear, precise, human, calm, informed. Never condescending. Never alarmist. Never salesy.

### Two registers

**Clinical & Formal** — used when:

- Describing medical data, dosages, results, dates.
- Communicating with clinicians.
- Legal, privacy, and consent surfaces.
- Error and safety-critical messages.

**Calm & Human** — used when:

- Onboarding a new caregiver.
- Empty states.
- Confirmation and success moments.
- Explaining features to non-technical users.
- Marketing and public communication.

Same voice. Different register. Never mixed within a single sentence.

### Voice Rules

- **Use plain language.** "Blood pressure reading" — not "sphygmomanometric measurement."
- **Never diagnose, prescribe, or advise.** We surface information; clinicians decide.
- **Never use fear.** No "Don't miss…", "Warning: your parent…" tone.
- **Never over-promise.** No "revolutionary," "AI-powered miracle."
- **Never use healthcare clichés.** No "your health journey," no "wellness."
- **Use the caregiver's language.** "Dad's cardiologist" is more useful than "primary care contact."
- **Numbers are absolute.** Round only when explicitly noted. Show units.
- **Dates are unambiguous.** Use `22 Jul 2026`, never `07/22/26`.

### Tone Examples

| Situation | Wrong | Right |
| --- | --- | --- |
| Empty timeline | "Nothing here yet! 🎉 Start your journey." | "No records yet. Add a report to begin the timeline." |
| Successful upload | "Yay! Your file is uploaded!" | "Report added to Dad's timeline · 22 Jul 2026." |
| AI extraction | "Our AI thinks this is a blood test!" | "Extracted from report · Blood test · Confidence: high · Source: uploaded PDF, page 1." |
| Deletion | "Are you sure? This can't be undone!!" | "Delete this record permanently? This cannot be undone." |
| Share link | "Share the love with your doctor 💚" | "Share Dad's cardiology history with Dr. Rao · Expires in 7 days." |

---

## Naming

### The Name

**Synexes** (pronounced *sy-NEK-sees*).

- Always capitalized: **Synexes**.
- Never all-caps in body text: not `SYNEXES`.
- Never lowercase-only: not `synexes` (permitted only in code identifiers like package names).
- No spaces, hyphens, or stylizations. Not `Syn-exes`, not `SynExes`.

### Product Language

- The product is called **Synexes** — not "the Synexes app" or "[Synexes.io](http://Synexes.io)".
- Features are named as **capitalized nouns**: Timeline, Family Profile, Shared Portal, AI Summary, Health Tree.
- Never marketize feature names inside the product. `"Smart AI Timeline Magic ✨"` → **Timeline Summary**.

---

## Logo System

Synexes currently has two lockups. Both are **provisional** until final versions are approved and versioned here.

### Primary Mark

The symbol — used alone as an app icon, favicon, or in tight spaces.

Rules:

- Minimum size: **24px** (digital), **12mm** (print).
- Clear space: at least **the height of the mark** on all sides.
- Never rotate.
- Never recolor outside approved brand tokens.
- Never place on low-contrast or busy backgrounds.

### Wordmark

"Synexes" as a wordmark — used in headers, footers, hero contexts, and long-form marketing.

Rules:

- Minimum height: **16px** (digital), **8mm** (print).
- Clear space: at least **the x-height of the wordmark**.
- Never stretch, condense, italicize, or letter-space.
- Never combine with taglines inside the wordmark.

### Combined Lockup

Symbol + wordmark, used on marketing sites, decks, and public materials.

Rules:

- Spacing between mark and wordmark is fixed and defined by the lockup file.
- Never recompose manually.

### Misuse (do not do)

- Do not add drop shadows, glows, or bevels.
- Do not put the mark inside another shape.
- Do not animate the mark unless using approved intro/outro assets.
- Do not use the mark as a bullet or decorative element in body text.
- Do not use the mark next to competing logos without approved co-branding rules.

### Logo Files

- Provisional logo files live in `/brand/logos/`.
- Versioning: `synexes-mark-v{n}.svg`, `synexes-wordmark-v{n}.svg`, `synexes-lockup-v{n}.svg`.
- Final approved versions replace provisional ones on merge and are recorded in the Decision Log.

---

## Brand Colors (Intent)

Exact hex values and semantic tokens are defined in `design.md`. [brand.md](http://brand.md) defines only the **intent** of the brand color.

- **Primary brand color:** a **matte, muted, dark green**. Never metallic. Never neon. Never emerald or lime.
- The green should feel like: trust, quiet capability, the color of a well-kept plant. Not a hospital scrub. Not a pharmacy sign. Not a wellness app.
- **AI accent color:** a distinct, non-green accent used **exclusively** to indicate AI-generated content, suggestions, or reasoning. Never used for general UI.
- **Marketing** may use expressive gradients and secondary tones. **Product** may not.

---

## Photography, Illustration & Imagery

### Never

- Stock photos of doctors in white coats.
- Stethoscopes, red crosses, heart-with-heartbeat graphics.
- Elderly hands being held (patronizing).
- Rainbow gradients on medical concepts.
- 3D "AI brain" imagery.
- Anything that resembles a hospital marketing brochure.

### Prefer

- Real, unposed photography of families managing everyday life.
- Product screenshots as hero imagery (product-first marketing).
- Abstract, restrained illustration for concepts (timeline, tree, graph).
- Data visualizations as art (chronology, connections, provenance).

### Illustration style

- Minimal line, soft fills.
- Neutral palette with brand green as accent.
- No mascots, no characters, no faces.

---

## Product vs Marketing Language

| Context | Register | Motion | Color | Imagery |
| --- | --- | --- | --- | --- |
| Product | Clinical + Calm (context-dependent) | Buttery, subtle | Restrained, tokenized | None or product screenshots |
| Marketing | Story-driven, human | Cinematic allowed | Expressive gradients allowed | Real families, product-first |

> **Marketing may be expressive. The product may not.** This boundary is inviolable.
> 

---

## Trust Cues

Because we operate in healthcare, brand trust is built through:

- **Named sources.** Every claim in marketing links to evidence.
- **No dark patterns.** No fake urgency, no manipulative CTAs, no forced sign-ups.
- **Plain privacy language.** Readable by a caregiver, not just a lawyer.
- **Visible provenance in product.** Users always see where their data came from.
- **Named humans.** Team, advisors, and clinical reviewers are visible on public surfaces.

---

## Marketing Guardrails

- Never use fear-based headlines.
- Never imply Synexes replaces a doctor.
- Never use before/after health imagery.
- Never claim outcomes we cannot substantiate.
- Never use patient testimonials without written, revocable consent.
- Never use children's medical stories in marketing.

---

## Compromises

### We will bend on

- Marketing visual expressiveness — within brand adjectives.
- Playful voice in onboarding and empty states — calm register only.
- Regional adaptations of pronunciation and secondary language.

### We will not bend on

- The name **Synexes** and its typography.
- The absence of healthcare clichés.
- Voice register mixing (never marketing tone inside the product).
- Logo integrity.
- Speaking about medical data with anything other than precision.

---

## Governance

[brand.md](http://brand.md) changes require:

- Rationale.
- Preview of affected surfaces (marketing site, product headers, social).
- Sign-off from the product owner.
- Version bump and Decision Log entry.

[brand.md](http://brand.md) is downstream of `philosophy.md` and upstream of `design.md`. Where they conflict, philosophy wins.