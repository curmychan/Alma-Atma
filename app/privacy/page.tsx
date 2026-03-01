import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy (Draft)"
        description="This is a placeholder draft and should be reviewed by legal counsel."
      />

      <Section>
        <Container className="max-w-3xl">
          <div className="rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10 space-y-4 text-sm text-midnight/80">
            <p>
              We collect information you submit through our forms (such as name, email, and questionnaire responses) to
              operate mentorship matching and respond to inquiries.
            </p>
            <p>
              We aim to minimize collection and protect privacy. Do not submit sensitive personal information through
              website forms.
            </p>
            <p>
              If we use third-party tools (e.g., Airtable, email providers), your data may be processed by those services.
              We will select reputable providers and limit access to authorized volunteers.
            </p>
            <p>
              You can request deletion of your submitted information by contacting us.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
