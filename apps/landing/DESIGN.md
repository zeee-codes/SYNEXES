# DESIGN.md

## Color Tokens

| Token Name | Hex | Usage |
|---|---|---|
| Primary Blue | `#067BC2` | Buttons, links, primary actions |
| Dark Blue | `#041C52` | Main headings, footer background |
| Green Accent | `#44D7B6` | Success messages, accent icons |
| Gray (Medium) | `#A0AEC0` | Borders, outlines, icons |
| Gray (Light) | `#EDF2F7` | Card backgrounds, section backgrounds |
| White | `#FFFFFF` | Page/card background (light mode) |
| Text Primary | `#111827` | Main text color |
| Text Secondary | `#6B7280` | Secondary text (captions, placeholders) |
| Error Red | `#EF4444` | Error text/buttons (destructive) |
| Bg Light | `#F8FAFC` | Body background (light mode) |
| Bg Dark | `#1F2937` | Body background (dark mode) |
| Surface Dark | `#374151` | Card background (dark mode) |
| Text Light | `#F9FAFB` | Text on dark backgrounds |

## Typography Scale

Font Family: **Inter (Sans)**

| Role | Size (px) / Line-Height (px) | Weight | Usage |
|---|---|---|---|
| Hero Title (H1) | 80 / 96 | Bold (700) | Main landing page headline |
| Section Title (H2) | 48 / 56 | Semi-Bold (600) | Major section headings |
| Subsection (H3) | 32 / 40 | Semi-Bold (600) | Feature titles, subheads |
| Subhead (H4) | 24 / 32 | Medium (500) | Smaller headings, e.g. "How It Works" |
| Body Text | 16 / 24 | Regular (400) | Paragraphs, button text |
| Caption/Text Sm. | 14 / 20 | Regular (400) | Form labels, captions |

## Component Specs

- **Primary Button**: Padding: 16px (V) × 24px (H); Min-height: 40px; Radius: 8px. Background: Primary Blue; Text: white (16px, bold); Hover: lighten blue.
- **Secondary Button**: Padding: 14px (V) × 20px (H); Min-height: 38px; Radius: 8px. Border: 2px Primary Blue; Text: Primary Blue; Hover: fill Primary Blue, text white.
- **Card**: Padding: 16px; Flexible width; Radius: 8px. Background: white (light mode) or Surface Dark (dark mode); Border: 1px solid Gray (Light) (#E2E8F0); Box-shadow: (0 1px 2px rgba(0,0,0,0.1)).
- **Input Field**: Height: 40px; Padding: 0 12px; Radius: 6px. Border: 1px solid #D1D5DB; BG: white; Font: 16px; Focus: border 2px Primary Blue.
- **Modal/Overlay**: Content width: max 500px; Padding: 24px; Radius: 12px. Overlay: rgba(0,0,0,0.5) full-screen.
- **Progress Bar**: Height: 6px; Width: 100%; Radius: 3px. BG: Gray (Medium) (#CBD5E1) bar; Fill: Primary Blue; Animate fill (transition ~300ms).

## Accessibility

- WCAG 2.1 AA compliant.
- Minimum 4.5:1 contrast for all text.
- Keyboard-accessible with visible focus indicators.
