# DineCall AI — Web UI Design Specification

## 1. Product Overview

**DineCall AI** is a voice-based restaurant table booking agent.

The first version of the UI has one simple purpose:

> Enter a customer's name and phone number → trigger the restaurant booking voice agent → the agent calls the customer.

The UI should **not** be a complex dashboard at this stage.

The goal is to create a **minimal, premium, professional SaaS interface** that clearly demonstrates the voice-agent workflow.

---

## 2. V1 Scope

The UI should contain only:

- Customer Name
- Phone Number
- "Call with Booking Agent" button
- Agent online/offline status

That's it.

### User Flow

```text
Enter Customer Name
        ↓
Enter Phone Number
        ↓
Click "Call with Booking Agent"
        ↓
Trigger Backend Workflow
        ↓
Booking Voice Agent Starts
        ↓
Agent Calls Customer
        ↓
Show "Call Initiated / Calling" State
```

Do not add additional features yet.

---

# 3. Design Direction

The interface should feel:

- Premium
- Professional
- Minimal
- Modern
- Dark
- Elegant
- Product-focused
- Spacious
- Refined

The UI should **not look like a generic AI website**.

### Avoid

Do NOT use:

- Purple/violet as the primary color
- Yellow/gold as the primary color
- Generic blue SaaS styling
- Excessive gradients
- Giant glowing blobs
- Cyberpunk/neon aesthetics
- Excessive glassmorphism
- Too many cards
- Excessive borders
- Fake analytics
- Fake statistics
- Unnecessary UI elements
- Overly complicated dashboards

The design should communicate:

> **"This is a serious AI product."**

Not:

> **"This is a flashy AI demo."**

---

# 4. Color Palette

Use a **dark charcoal / near-black foundation**.

### Base Colors

```text
Background:
#09090B

Secondary Background:
#111113

Card:
#151518

Card Hover:
#1A1A1E

Border:
#27272A

Primary Text:
#F4F4F5

Secondary Text:
#A1A1AA

Muted Text:
#71717A
```

### Accent

Use a **muted teal / mint** accent instead of purple.

```text
Primary Accent:
#5EEAD4

Secondary Accent:
#2DD4BF

Success:
#4ADE80

Error:
#F87171
```

Use teal sparingly for:

- Call button
- Agent status
- Focus states
- Important icons
- Small highlights
- Active states

Do not make the entire UI teal.

### Color Ratio

```text
85% — Dark neutral colors
10% — White/gray typography
5%  — Teal accent
```

---

# 5. Typography

Use a modern professional sans-serif.

### Preferred

- Inter

### Alternatives

- Geist
- Plus Jakarta Sans
- Manrope

Typography should be clean and restrained.

### Hero Heading

```text
Book a restaurant table
with an AI voice agent.
```

Suggested styling:

```text
font-size: 48–56px
font-weight: 600
letter-spacing: -0.04em
```

Highlight:

```text
AI voice agent
```

using the teal accent.

### Body Text

```text
font-size: 16–18px
color: #A1A1AA
```

### Form Labels

```text
font-size: 14px
font-weight: 500
```

---

# 6. Page Layout

Do not create a traditional dashboard layout.

Do not use a sidebar.

Create a **single focused page**.

```text
┌──────────────────────────────────────────────────────┐
│                                                      │
│  DineCall AI                         ● Agent Online  │
│                                                      │
│                                                      │
│             Book a restaurant table                  │
│             with an AI voice agent.                  │
│                                                      │
│       Enter the customer's details and our AI        │
│       booking agent will call them directly.         │
│                                                      │
│        ┌───────────────────────────────────┐         │
│        │                                   │         │
│        │  Customer details                 │         │
│        │                                   │         │
│        │  Customer name                    │         │
│        │  [_____________________________]  │         │
│        │                                   │         │
│        │  Phone number                     │         │
│        │  [ +91 │ ______________________ ] │         │
│        │                                   │         │
│        │  [ ☎ Call with Booking Agent ]   │         │
│        │                                   │         │
│        └───────────────────────────────────┘         │
│                                                      │
│             Your information stays secure.           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

The page should feel:

- Centered
- Calm
- Spacious
- Intentional

---

# 7. Header

### Left

Display:

```text
DineCall AI
Voice Booking Agent
```

Use a simple logo mark.

Possible logo concept:

- Phone + waveform
- Microphone + phone
- Minimal voice/call icon

Keep the logo simple and geometric.

### Right

Display:

```text
● Agent Online
```

Use a small teal status indicator.

Do not create a large status card.

---

# 8. Hero Section

### Heading

```text
Book a restaurant table
with an AI voice agent.
```

Highlight:

```text
AI voice agent
```

with the teal accent.

### Supporting Text

```text
Enter the customer's details and our AI booking agent
will call them directly to handle the reservation.
```

Keep the copy short.

Do not add unnecessary marketing content.

---

# 9. Customer Form

This is the most important component on the page.

Create one premium dark card.

### Card Header

```text
Customer details

Enter the information needed to start the call.
```

The form should contain **exactly two fields**.

---

## Customer Name

Label:

```text
Customer name
```

Placeholder:

```text
Enter customer name
```

Use a Lucide user icon.

---

## Phone Number

Label:

```text
Phone number
```

Use:

```text
[ +91 ▼ ] [ Enter phone number ]
```

The country code should be a proper select/dropdown.

The phone number field should support international formatting if practical.

Do not make the form unnecessarily complicated.

---

# 10. Primary CTA

The most important element on the entire page is the call button.

### Button Text

```text
Call with Booking Agent
```

### Icon

Use:

```text
Phone
```

or:

```text
PhoneCall
```

from **Lucide React**.

Example:

```text
┌─────────────────────────────────────────────┐
│        ☎  Call with Booking Agent           │
└─────────────────────────────────────────────┘
```

### Button Behavior

Normal:

```text
Call with Booking Agent
```

Hover:

- Slight brightness increase
- Slight upward movement
- Subtle shadow
- Smooth transition

Pressed:

- Slight scale-down effect

Loading:

```text
Calling...
```

with a subtle animated indicator.

Do not use a huge glowing neon effect.

---

# 11. Form Validation

### Customer Name

Required.

Error:

```text
Please enter the customer's name.
```

### Phone Number

Required.

Validate the phone number.

Error:

```text
Please enter a valid phone number.
```

The call button should remain disabled until the required fields are valid.

---

# 12. Agent Status

Display a small status indicator in the header.

### Online

```text
● Agent Online
```

Teal/green indicator.

### Offline

```text
● Agent Offline
```

Red/muted indicator.

The status should be visually subtle.

---

# 13. Call Trigger State

When the user clicks the button:

### Step 1

Change button:

```text
Calling...
```

### Step 2

Display:

```text
● Connecting to booking agent
```

### Step 3

Display:

```text
● Calling customer
```

The UI should communicate that the workflow has actually started.

Do not build a complicated call interface yet.

---

# 14. Success State

After the backend successfully triggers the call:

```text
Call initiated

The booking agent is calling
Rahul Sharma now.

+91 XXXXX XXXXX

● Call in progress
```

Provide:

```text
Back to new call
```

The user can then start another call.

---

# 15. Background

Use a near-black background.

Possible subtle radial lighting:

```css
background:
  radial-gradient(
    circle at 50% 20%,
    rgba(45, 212, 191, 0.06),
    transparent 40%
  ),
  #09090B;
```

Optional:

- Very subtle noise/grain
- Fine grid
- Extremely subtle waveform lines
- Soft radial lighting

These should be almost invisible.

### Important

Do not use:

- Giant animated gradient blobs
- Bright neon backgrounds
- Excessive particles
- Distracting animated elements

The product should be the focus.

---

# 16. Cards

Use only **one primary card** for the customer form.

Suggested styling:

```text
Background:
#151518

Border:
1px solid #27272A

Border Radius:
16–20px

Shadow:
0 20px 60px rgba(0, 0, 0, 0.35)
```

The card should have generous internal spacing.

Avoid making every element a separate card.

---

# 17. Inputs

Input styling:

```text
Background:
#111113

Border:
#27272A

Text:
#F4F4F5

Placeholder:
#71717A

Focus Border:
#5EEAD4
```

Suggested:

```text
border-radius: 10–12px
height: 48–52px
```

Focus animation should be subtle.

---

# 18. Motion

Use **Motion** for polished interactions.

Use Motion for:

- Page entrance
- Hero entrance
- Form entrance
- Button hover
- Button press
- Call state transition
- Success state
- Agent status transitions

Recommended duration:

```text
200–400ms
```

Use spring animations selectively.

Do not animate everything.

Animation should feel:

> Fast + smooth + intentional

---

# 19. shadcn/ui

Use **shadcn/ui** as the component foundation.

Use it for:

- Button
- Input
- Label
- Select
- Form
- Toast
- Tooltip
- Dialog if required

However:

> **Do not use default shadcn styling without customization.**

Customize the components to match the DineCall AI design system.

The final UI should not look like a default shadcn template.

---

# 20. Magic UI

Use **Magic UI** selectively.

Potential uses:

- Subtle background effects
- Small animated elements
- Elegant loading effects
- Micro-interactions

Do not use Magic UI simply because it looks impressive.

Avoid:

- Giant animated hero effects
- Excessive particles
- Flashy text animations

---

# 21. Aceternity UI

**Aceternity UI** can be used selectively for:

- Subtle spotlight effects
- Premium backgrounds
- Hero visual effects
- Small interactive elements

Keep the effects extremely subtle.

The interface should remain professional.

---

# 22. React Bits

**React Bits** can be used for:

- Small text animations
- Micro-interactions
- Loading animations
- Subtle visual effects

Only use components that genuinely improve the experience.

---

# 23. Lucide React

Use **Lucide React** for icons.

Use a consistent icon style.

Recommended icons:

```text
User
Phone
PhoneCall
Mic
Check
Shield
ChevronDown
Loader
```

Do not mix multiple icon libraries.

---

# 24. Recommended Frontend Stack

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
Motion
Lucide React
Magic UI
Aceternity UI
React Bits
```

Do not install and use every library unnecessarily.

Use them only where they improve the design.

The final application should feel like it was built using **one coherent design system**.

---

# 25. Responsive Design

The primary target is desktop.

However, the page must work well on:

- Desktop
- Tablet
- Mobile

### Mobile

The layout should become:

```text
DineCall AI

● Agent Online


Book a restaurant table
with an AI voice agent.

Enter customer details and
start the call.


┌─────────────────────────┐
│ Customer details        │
│                         │
│ Customer name           │
│ [____________________]  │
│                         │
│ Phone number            │
│ [ +91 ][_____________]  │
│                         │
│ [ Call with Agent ]     │
└─────────────────────────┘
```

Everything should remain easy to use with one hand.

---

# 26. Accessibility

Ensure:

- All inputs have labels
- Keyboard navigation works
- Visible focus states exist
- Buttons have clear states
- Loading states are understandable
- Error messages are accessible
- Contrast is sufficient
- Color is not the only indication of status

---

# 27. Backend Integration

Keep backend logic separate from UI components.

The workflow should be:

```text
Customer Form
      ↓
Validate Input
      ↓
POST request to backend
      ↓
Backend triggers voice agent
      ↓
Voice agent calls customer
      ↓
Frontend receives response
      ↓
Show "Call Initiated"
```

Example conceptual API:

```http
POST /api/voice-agent/call
```

Request:

```json
{
  "customer_name": "Rahul Sharma",
  "phone_number": "+919876543210"
}
```

The frontend should not contain voice-agent business logic.

The backend remains responsible for triggering the voice agent.

---

# 28. V1 — Explicitly DO NOT Build

Do not build these features yet:

- Dashboard sidebar
- Analytics
- Call history
- Booking history
- Customer management
- Transcript viewer
- AI summary
- Sentiment analysis
- Agent configuration
- Restaurant configuration
- Multiple agents
- Settings page
- Authentication
- Notifications
- Calendar
- Charts
- Tables
- Statistics
- Fake metrics

These can be added later.

---

# 29. Future Expansion

The UI should be architected so additional features can be added later without redesigning the entire application.

Possible future features:

```text
V1
├── Customer Name
├── Phone Number
└── Start Call

V2
├── Call Status
├── Call Result
└── Booking Information

V3
├── Transcript
├── AI Summary
└── Extracted Information

V4
├── Call History
├── Booking History
└── Customer Management

V5
├── Analytics
├── Agent Configuration
└── Multiple Agents
```

But **only V1 should be implemented now**.

---

# 30. Final Design Principle

The entire interface should communicate one simple idea:

> **Enter a customer → click the button → AI calls them.**

The visual hierarchy should therefore be:

```text
1. What does DineCall AI do?
          ↓
2. Who are we calling?
          ↓
3. Start the call
          ↓
4. Confirm that the call started
```

Nothing else should compete with this workflow.

---

# 31. Final Visual Goal

The final UI should feel like a **premium modern SaaS product**.

Think:

```text
Minimal
    +
Dark
    +
Editorial typography
    +
Charcoal foundation
    +
Muted teal accent
    +
Excellent spacing
    +
Subtle Motion animations
    +
Premium form design
    +
Very little UI noise
```

Do **not** try to make the website visually "AI-looking."

The AI experience itself is the impressive part:

> The user clicks a button and an actual AI voice agent calls a real phone number.

The interface should simply make that experience feel **premium, trustworthy, and intentional**.

---

# 32. Implementation Instruction

Build the application using reusable components rather than putting everything inside one large component.

Suggested structure:

```text
components/
├── branding/
│   └── logo.tsx
│
├── booking/
│   ├── customer-form.tsx
│   ├── phone-input.tsx
│   └── call-button.tsx
│
├── agent/
│   ├── agent-status.tsx
│   └── call-status.tsx
│
└── ui/
    └── shadcn components

app/
└── page.tsx
```

Keep the backend integration isolated.

The UI should be easy to extend when V2 features are eventually added.

---

# 33. Most Important Instruction

**Do not make this look like a generic AI website.**

Avoid the typical:

```text
Purple + Gradient + Glow + AI
```

aesthetic.

Avoid yellow.

Avoid excessive glassmorphism.

Avoid excessive animations.

Avoid unnecessary dashboard elements.

Instead, create a:

> **Dark, premium, minimal voice-agent interface with a charcoal foundation, restrained teal accents, excellent typography, generous spacing, subtle Motion animations, customized shadcn/ui components, and carefully selected Magic UI / Aceternity UI / React Bits effects.**

The final V1 contains only:

**Customer Name + Phone Number + Call with Booking Agent.**

And it should look exceptionally polished.
