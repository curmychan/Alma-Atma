import Link from "next/link";
import { requiredDocsMode } from "@/lib/site";
import { cn } from "@/lib/utils";

type Doc = { name: string; href: string; requiredWhenAll: boolean; label: string };

const docs: Doc[] = [
  { name: "Mentorship Agreement", href: "/docs/mentorship-agreement", requiredWhenAll: true, label: "Sign" },
  { name: "Code of Conduct", href: "/docs/code-of-conduct", requiredWhenAll: true, label: "Review" },
  { name: "Confidentiality Agreement", href: "/docs/confidentiality", requiredWhenAll: true, label: "Sign" }
];

export function SignupSteps() {
  const requireAll = requiredDocsMode === "all_docs";

  return (
    <div className="rounded-2xl bg-aeroblue/30 p-6 ring-1 ring-midnight/10">
      <h3 className="font-heading text-xl text-midnight">Sign-up steps</h3>
      <ol className="mt-3 space-y-2 text-sm text-midnight/80">
        <li><span className="font-medium text-midnight">1)</span> Fill out the questionnaire.</li>
        <li><span className="font-medium text-midnight">2)</span> Complete required documents.</li>
        <li><span className="font-medium text-midnight">3)</span> Intro meeting + feedback-based matching.</li>
      </ol>

      <div className="mt-5 rounded-2xl bg-brandwhite p-4 ring-1 ring-midnight/10">
        <div className="text-sm font-medium text-midnight">Documents</div>
        <ul className="mt-3 space-y-2">
          {docs.map((d) => {
            const isRequired = requireAll ? d.requiredWhenAll : d.name === "Mentorship Agreement";
            return (
              <li key={d.href} className="flex items-center justify-between gap-3">
                <div className="text-sm text-midnight/80">
                  <span className="font-medium text-midnight">{d.name}</span>{" "}
                  <span className={cn("text-xs", isRequired ? "text-midnight" : "text-midnight/60")}>
                    {isRequired ? "• Required" : "• Optional"}
                  </span>
                </div>
                <Link
                  href={d.href}
                  className="rounded-full bg-aeroblue px-3 py-1 text-xs font-medium text-midnight hover:bg-lavendermist"
                >
                  {d.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-xs text-midnight/60">
          Document requirements can be adjusted by admins (REQUIRED_DOCS_MODE).
        </p>
      </div>
    </div>
  );
}
