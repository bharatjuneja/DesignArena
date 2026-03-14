## DesignArena – System Design Practice Arena

DesignArena is a LeetCode-style platform for **system design interviews**. It follows your MVP PRD: users attempt real-world design problems, submit text-based architectures, and receive **structured, rubric-based AI feedback**.

### Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS with a dark, glassmorphism-inspired UI
- **API**: Next.js Route Handlers under `src/app/api`

> Note: Dependencies are declared in `package.json`, but not yet installed here. Run `npm install` locally with a recent Node LTS (18+) to get started.

### Core Flows in the MVP

- **Problem set**: 5 curated design questions
  - URL Shortener, Uber, WhatsApp, News Feed, Netflix
  - Defined in `src/lib/problems.ts`
- **Practice flow**
  - Browse all problems at `/problems`
  - Open a problem detail page with prompt and tags
  - Draft your architecture in a rich text area
  - Submit to `/api/evaluate` and see:
    - Overall score (0–100)
    - Category scores for:
      - Requirement Clarity (10%)
      - High-Level Architecture (20%)
      - Scalability (20%)
      - Data Modeling (15%)
      - Reliability (15%)
      - Tradeoffs (10%)
      - Security & Observability (10%)
    - Strengths, weaknesses, missing components, follow-up questions

### Running the app locally

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` in the project root to configure AI access:

```bash
NEXTAUTH_SECRET=replace-with-random-string
OPENAI_API_KEY=your-openai-key
OPENAI_MODEL=gpt-4.1-mini
```

3. Start the dev server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### AI evaluation integration (OpenAI)

The route handler at `src/app/api/evaluate/route.ts` calls OpenAI with a **structured rubric prompt** and expects a strict JSON response that matches the `Evaluation` type used by the UI.

To use it:

- Set `OPENAI_API_KEY` (and optionally `OPENAI_MODEL`) in `.env.local`.
- Restart `npm run dev` so the environment variables are picked up.

If the key is missing or the call fails, the API returns a 500 with an error message that the UI surfaces in the feedback panel.

### Next steps (beyond this skeleton)

- **Authentication**: Wire up email + Google sign-in (e.g., NextAuth.js) and gate submissions per user.
- **Persistence**: Add a database (PostgreSQL via Prisma) to store users, submissions, and evaluations.
- **Rubric tuning**: Iterate on the prompt + scoring rubric using real interview scenarios.

