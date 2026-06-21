# Screenshots — FormFill AI

**Product:** FormFill AI — Chrome extension that uses AI to auto-fill web forms from a saved user profile.

**Type:** Chrome Extension (Manifest V3)

---

## Screenshot 1: Main Interface — Popup Profile Editor

**What to capture:** The extension popup showing the profile form with user data fields filled in. Show the clean form UI with personal info fields.

**ASCII Mockup:**

```
┌─────────────────────────────────────────────┐
│  🤖 FormFill AI                    [⚙]     │
├─────────────────────────────────────────────┤
│  ┌──────────────┬──────────────────────┐    │
│  │ 👤 Profile   │ 🔑 License           │    │
│  └──────────────┴──────────────────────┘    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │ Full Name                           │    │
│  │ ┌─────────────────────────────────┐ │    │
│  │ │ John Smith                      │ │    │
│  │ └─────────────────────────────────┘ │    │
│  │ Email                               │    │
│  │ ┌─────────────────────────────────┐ │    │
│  │ │ john.smith@email.com            │ │    │
│  │ └─────────────────────────────────┘ │    │
│  │ Phone                               │    │
│  │ ┌─────────────────────────────────┐ │    │
│  │ │ +1 (555) 123-4567              │ │    │
│  │ └─────────────────────────────────┘ │    │
│  │ Address                             │    │
│  │ ┌─────────────────────────────────┐ │    │
│  │ │ 123 Main St, San Francisco, CA  │ │    │
│  │ └─────────────────────────────────┘ │    │
│  │ LinkedIn                            │    │
│  │ ┌─────────────────────────────────┐ │    │
│  │ │ linkedin.com/in/johnsmith       │ │    │
│  │ └─────────────────────────────────┘ │    │
│  │                                     │    │
│  │ [+ Add Work Experience]             │    │
│  │                                     │    │
│  │ ┌─ Work Experience ──────────────┐  │    │
│  │ │ Company: Acme Corp             │  │    │
│  │ │ Title:   Senior Developer      │  │    │
│  │ │ Dates:   2020 - Present        │  │    │
│  │ └────────────────────────────────┘  │    │
│  │                                     │    │
│  │      [💾 Save Profile]              │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  Free tier · 12 fills remaining             │
└─────────────────────────────────────────────┘
```

---

## Screenshot 2: Key Feature — Auto-Fill in Action

**What to capture:** A job application form (e.g., a generic career page) being auto-filled by the extension. Show the form fields being highlighted/populated with a progress indicator.

**ASCII Mockup:**

┌──────────────────────────────────────────────────────────┐
│  🌐 careers.example.com/apply                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────┐      │
│  │  🤖 FormFill AI — Filling form...              │      │
│  │  ████████████████████░░░░░░  75%               │      │
│  │  Filled: name, email, phone, address...        │      │
│  └────────────────────────────────────────────────┘      │
│                                                          │
│  ┌────────────────────────────────────────────────┐      │
│  │  Personal Information                           │      │
│  │                                                 │      │
│  │  First Name:  [John              ]  ✅          │      │
│  │  Last Name:   [Smith             ]  ✅          │      │
│  │  Email:       [john.smith@email  ]  ✅          │      │
│  │  Phone:       [(555) 123-4567    ]  ✅          │      │
│  │  Address:     [123 Main St       ]  ✅          │      │
│  │  City:        [San Francisco     ]  ✅          │      │
│  │  State:       [California ▼      ]  ✅          │      │
│  │  Zip:         [94102             ]  ✅          │      │
│  │                                                 │      │
│  │  LinkedIn:    [linkedin.com/in/  ]  ⏳          │      │
│  │                                                 │      │
│  │  Resume:      [📎 Choose File   ]  ⏭ skipped   │      │
│  │                                                 │      │
│  │  Cover Letter:                                  │      │
│  │  ┌──────────────────────────────────────┐       │      │
│  │  │ (Skipped — AI will generate)         │       │      │
│  │  └──────────────────────────────────────┘       │      │
│  │                                                 │      │
│  │           [Submit Application]                  │      │
│  └────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘
```

---

## Screenshot 3: AI Settings & Options

**What to capture:** The options page showing AI provider settings, API key configuration, and fill preferences.

**ASCII Mockup:**

```
┌─────────────────────────────────────────────┐
│  ⚙️ FormFill AI — Settings                  │
├─────────────────────────────────────────────┤
│                                             │
│  🤖 AI Provider                             │
│  ┌─────────────────────────────────────┐    │
│  │ Provider:  ○ OpenAI  ● Anthropic   │    │
│  │ Model:     [claude-sonnet-4    ▼]  │    │
│  │ API Key:   [sk-ant-••••••••••••]   │    │
│  │            [Verify Key]             │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  🔒 Privacy                                 │
│  ┌─────────────────────────────────────┐    │
│  │ ☑ Use my own API key (BYOK)        │    │
│  │ ☑ Never store form data             │    │
│  │ ☐ Enable AI field matching          │    │
│  │ ☑ Auto-detect form fields           │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  📋 Fill Preferences                        │
│  ┌─────────────────────────────────────┐    │
│  │ Default action: [Fill & Review  ▼] │    │
│  │ Skip cover letters: ☑              │    │
│  │ Skip file uploads:  ☑              │    │
│  │ Confirm before submit: ☑           │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  💎 Upgrade to Pro for AI field matching    │
│     [⭐ Upgrade — $9.99/mo]                 │
│                                             │
│           [Save Settings]                   │
└─────────────────────────────────────────────┘
```

---

## Screenshot 4: Results — Fill Summary Toast

**What to capture:** A toast notification on the webpage showing the fill results summary after auto-fill completes.

**ASCII Mockup:**

```
┌──────────────────────────────────────────────────────────┐
│  🌐 careers.example.com/apply                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────┐      │
│  │  ✅ FormFill AI — Form filled successfully!    │      │
│  │                                                │      │
│  │  14 fields filled                              │      │
│  │  2 fields skipped (file upload, cover letter)  │      │
│  │  0 errors                                      │      │
│  │                                                │      │
│  │  ⚠️ Please review all fields before submitting │      │
│  │                                                │      │
│  │  [Review] [Dismiss]                            │      │
│  └────────────────────────────────────────────────┘      │
│                                                          │
│  ┌────────────────────────────────────────────────┐      │
│  │  Personal Information                           │      │
│  │  First Name:  [John              ]  ✅          │      │
│  │  Last Name:   [Smith             ]  ✅          │      │
│  │  Email:       [john.smith@email  ]  ✅          │      │
│  │  ...                                            │      │
│  └────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘
```

---

## Notes for Actual Screenshots

1. **Use a real job application form** (or a realistic mock) — Workday, Greenhouse, or Lever-style
2. **Show the popup** as a clean, compact form — it should feel like a native Chrome extension
3. **AI settings page** should show the BYOK (bring your own key) model prominently
4. **Fill progress** is a key visual — show the progress bar and field-by-field status
5. **Toast notification** should be non-intrusive but informative
6. **Privacy angle** is important — show "No data sent to our servers" messaging
7. **Use realistic profile data** (but obviously fake — John Smith, etc.)
8. **Extension icon** should be visible in the toolbar
