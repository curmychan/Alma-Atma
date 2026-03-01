import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use (Draft)"
        description="This is a placeholder draft and should be reviewed by legal counsel."
      />

      <Section>
        <Container className="max-w-3xl">
          <div className="rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10 space-y-4 text-sm text-midnight/80">
            <p>
              Alma Atma Network provides volunteer-based mentorship and community programming. Content on this site is
              for informational purposes and does not constitute professional, legal, or financial advice.
            </p>
            <p>
              Participation is voluntary. We may update programs, eligibility, and processes over time.
            </p>
            <p>
              Users agree to behave respectfully and comply with the Code of Conduct. We may suspend participation for
              behavior that threatens safety or community well-being.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
