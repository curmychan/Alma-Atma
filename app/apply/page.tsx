import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SignupSteps } from "@/components/SignupSteps";
import { Form } from "@/components/Form";

export const metadata = { title: "Apply as Mentee" };

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentee"
        title="Apply as a mentee"
        description="If you’re a late-arrival, first-generation undergraduate navigating a new system, we’re here to support you."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
              <h2 className="font-heading text-2xl text-midnight">Eligibility</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-midnight/80">
                <li>First-generation undergraduate student</li>
                <li>Arrived in the U.S. at or after age 20</li>
                <li>From a non-English-speaking country (or primarily non-English background)</li>
                <li>Looking for mentorship and community access</li>
              </ul>

              <h3 className="mt-8 font-heading text-2xl text-midnight">Questionnaire</h3>
              <p className="mt-2 text-sm text-midnight/80">
                We ask only what we need to match thoughtfully. If a question feels too personal, you can answer briefly.
              </p>

              <div className="mt-6">
                <Form
                  action="/api/forms/mentee"
                  submitLabel="Submit mentee application"
                  fields={[
                    { name: "firstName", label: "First name", type: "text", required: true },
                    { name: "lastName", label: "Last name", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "pronouns", label: "Pronouns (optional)", type: "text" },
                    { name: "arrivalAge", label: "Age when you arrived in the U.S.", type: "text", required: true, placeholder: "e.g., 20" },
                    { name: "school", label: "School / University", type: "text", required: true },
                    { name: "major", label: "Major (optional)", type: "text" },
                    { name: "gradYear", label: "Expected graduation year (optional)", type: "text" },
                    { name: "timeZone", label: "Time zone (optional)", type: "text", placeholder: "e.g., PST / EST" },
                    { name: "languages", label: "Languages you’re comfortable using (optional)", type: "text" },
                    { name: "goals", label: "What are your goals for mentorship?", type: "textarea", required: true, rows: 5 },
                    { name: "availability", label: "General availability (optional)", type: "textarea", rows: 3, placeholder: "Days/times that usually work" },
                    { name: "linkedIn", label: "LinkedIn (optional)", type: "url" },
                    { name: "notes", label: "Anything else you want us to know? (optional)", type: "textarea", rows: 3 },
                    { name: "eligibilityConfirm", label: "I confirm I meet the eligibility guidelines above.", type: "checkbox", required: true }
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <SignupSteps />
            <div className="mt-6 rounded-2xl bg-lavendermist/30 p-6 ring-1 ring-midnight/10">
              <h3 className="font-heading text-xl text-midnight">What happens next</h3>
              <ul className="mt-3 space-y-2 text-sm text-midnight/80">
                <li>We review your questionnaire and match you with a mentor when available.</li>
                <li>We’ll email you to schedule an introductory meeting.</li>
                <li>After the first meeting, we collect feedback and adjust if needed.</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
