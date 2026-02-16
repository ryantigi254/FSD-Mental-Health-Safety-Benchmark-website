# Repository Agent Notes

## Netlify/Git security guardrails

- Do not trigger Netlify flows that add or replace GitHub deploy keys without explicit user confirmation in the same turn.
- Prefer GitHub App/OAuth linkage over deploy-key based linkage when both are available.
- If a deploy key is created or replaced, treat it as a security event: verify no key material was committed, rotate immediately if unexpected, and confirm the old key is deleted.
- Never commit `.netlify/` state or any credential-like artefacts.
