# Project Guidelines

## Git & Deployment
- **IMPORTANT**: Only push to GitHub and deploy to Vercel when explicitly requested by the user
- Do NOT automatically push or deploy after making changes
- Wait for explicit instruction like "haz commit, push y publica" or similar before running git push/vercel commands
- Always create commits with meaningful messages that explain the "why"

## Code Style & Structure
- Prefer editing existing files over creating new ones
- Keep components reusable and focused
- Use TypeScript for type safety
- Follow the existing project structure and naming conventions

## Frontend Development
- Test UI changes in browser before reporting as complete
- Verify scroll-triggered animations work smoothly
- Ensure responsive design across mobile, tablet, and desktop
- Use Tailwind CSS for styling with custom animation keyframes

## Service Pages Template
- Structure: Hero → Challenge → Process → Sub-Services → Results → FAQ → Final CTA + Form
- Final section uses 2-column layout (text left, form right)
- Embed ProposalForm in-page for conversion (no redirect to /contact-us)
- Customize challenge, process steps, sub-services, and results for each service
- B2B-focused value propositions with quantified business impact
