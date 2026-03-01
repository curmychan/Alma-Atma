export const site = {
  name: "Alma Atma Network",
  description:
    "Alma Atma Network empowers first-generation undergraduate students who arrive in the U.S. at or after age 20 from non-English-speaking countries through mentorship and access to professional communities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  socials: {
    email: "hello@alma-atma.org"
  }
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" }
] as const;

export const ctas = [
  { label: "Apply as Mentee", href: "/apply" },
  { label: "Become a Mentor", href: "/mentor" },
  { label: "Donate", href: "/donate" }
] as const;

export type RequiredDocsMode = "agreement_only" | "all_docs";

/**
 * Admin toggle for which documents are required in the sign-up workflow.
 * Change via env var in Vercel: REQUIRED_DOCS_MODE=agreement_only|all_docs
 */
export const requiredDocsMode: RequiredDocsMode =
  (process.env.REQUIRED_DOCS_MODE as RequiredDocsMode) ?? "all_docs";
