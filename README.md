# Alma Atma Network Website (Next.js + Tailwind)

This repository contains a deploy-ready website for **Alma Atma Network** using:
- Next.js (App Router) + TypeScript
- TailwindCSS
- Optional Airtable storage for form submissions
- Optional Resend email confirmations
- Vercel deployment-ready

## Brand notes
- Uses brand palette in `tailwind.config.ts`
- Body font uses Roboto (loaded via `next/font/google`)
- Heading font expects **The Season**. This repo includes a fallback to `local("The Season")`.

### To use the exact “The Season” font
1. Add your font file(s) to `public/fonts/` (for example `public/fonts/TheSeason.woff2`).
2. Update `app/globals.css` `@font-face` to point to the file.

## Logo
The site uses your badge logo rendered from the provided PDF as:
- `public/brand/logo-page-6.png` (header/footer)
- `public/favicon.png` + `public/favicon.ico`

## Local development
```bash
npm install
npm run dev
```

## Forms (mentor / mentee / partner / contact)
Forms POST to:
- `/api/forms/mentor`
- `/api/forms/mentee`
- `/api/forms/partner`
- `/api/forms/contact`

### Storage
If you set Airtable env vars, submissions will be stored in Airtable.
If not set, the API still returns success (so your site works), but nothing is stored.  
For production you should configure Airtable (recommended) or replace with Supabase/Sheets.

### Email
If you set `RESEND_API_KEY`, the site sends confirmation emails to applicants (mentor/mentee) and optional internal notifications via `NOTIFY_EMAIL`.

## Document workflow toggle
Set `REQUIRED_DOCS_MODE`:
- `agreement_only` → only Mentorship Agreement required
- `all_docs` → Mentorship Agreement + Code of Conduct + Confidentiality required

This affects what shows as “Required” on the Apply/Mentor pages.

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel: **New Project → Import Git Repository**
3. Set environment variables from `.env.example`
4. Deploy

## Replace placeholders
- Replace sample events in `lib/events.ts`
- Replace team placeholders in `lib/team.ts`
- Replace draft document text in `lib/docs.ts` or swap to PDFs after legal review.

