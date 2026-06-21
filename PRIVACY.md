# Privacy Policy — FormFill AI

**Last updated:** June 20, 2026

## Overview

FormFill AI ("we", "our", "the extension") is a Chrome extension that uses AI to auto-fill web forms from a saved user profile. We are committed to protecting your privacy.

## Data Collection

**FormFill AI does NOT collect, store, or transmit any personal data to our servers.**

All form-filling and profile management happens locally in your browser. When you use FormFill AI:

- **No data is sent to external servers.** Your profile data and form inputs are processed entirely within your browser.
- **No tracking or analytics.** We do not use Google Analytics, Mixpanel, or any other tracking service.
- **No cookies.** FormFill AI does not set or read any cookies for tracking purposes.
- **No account required.** There is no signup, login, or user account system.

## Local Storage

The only data stored by FormFill AI is kept locally in your browser using Chrome's `chrome.storage.local` API:

- **User profile data** — The information you save for auto-filling forms (e.g., name, email, address). This data never leaves your device.
- **Extension preferences** — Your settings and preferences for the extension.

## AI Processing

FormFill AI may use AI services to intelligently match form fields to your profile data. When AI processing is required:

- API calls are made directly from your browser to the AI service.
- You may provide your own API key for AI services, giving you full control over which provider is used.
- No form data is sent to our servers at any point.

## Permissions

FormFill AI requests the following Chrome permissions:

- **activeTab** — To access the currently active tab when you trigger form filling.
- **scripting** — To inject content scripts that detect and fill form fields on web pages.
- **storage** — To store your profile data and preferences locally in your browser.

## Host Permissions

FormFill AI requests `<all_urls>` access because it needs to detect and fill forms on any website. This permission is used solely for local form-filling — no data is transmitted to our servers.

## Third-Party Services

If AI processing is used, the extension may communicate directly with third-party AI APIs (e.g., OpenAI, Anthropic). Your API key and form data are sent directly to the AI provider, not to our servers. The AI provider's privacy policy applies to that data.

## Changes to This Policy

We may update this privacy policy from time to time. Any changes will be reflected in the extension's listing on the Chrome Web Store and in the extension's source code.

## Contact

If you have questions about this privacy policy, contact us at: [YOUR EMAIL ADDRESS]
