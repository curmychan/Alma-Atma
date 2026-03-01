import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SignupSteps } from "@/components/SignupSteps";
import { Form } from "@/components/Form";

export const metadata = { title: "Become a Mentor" };

export default function MentorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentor"
        title="Become a mentor"
        description="Share guidance, expand access, and help mentees navigate the hidden curriculum with care and clarity."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
              <h2 className="font-heading text-2xl text-midnight">What mentoring looks like</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-midnight/80">
                <li>Volunteer commitment (schedule and cadence aligned with availability)</li>
                <li>Support goal setting, communication confidence, and career navigation</li>
                <li>Offer feedback with kindness; respect privacy and boundaries</li>
                <li>Help mentees access networks and resources (when appropriate)</li>
              </ul>

              <h3 className="mt-8 font-heading text-2xl text-midnight">Questionnaire</h3>
              <p className="mt-2 text-sm text-midnight/80">
                Your answers help us match thoughtfully across goals, industry, time zone, and communication preferences.
              </p>

              <div className="mt-6">
                <Form
                  action="/api/forms/mentor"
                  submitLabel="Submit mentor application"
                  fields={[
                    { name: "firstName", label: "First name", type: "text", required: true },
                    { name: "lastName", label: "Last name", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "role", label: "Current role / title", type: "text", required: true },
                    { name: "industry", label: "Industry / domain", type: "text", required: true },
                    { name: "location", label: "Location (optional)", type: "text" },
                    { name: "timeZone", label: "Time zone (optional)", type: "text" },
                    { name: "languages", label: "Languages you can mentor in (optional)", type: "text" },
                    { name: "goals", label: "What kinds of mentee goals do you feel best equipped to support?", type: "textarea", required: true, rows: 5 },
                    { name: "availability", label: "General availability (optional)", type: "textarea", rows: 3 },
                    { name: "mentoringExperience", label: "Mentoring experience (optional)", type: "textarea", rows: 3 },
                    { name: "linkedIn", label: "LinkedIn (optional)", type: "url" },
                    { name: "notes", label: "Anything else you want us to know? (optional)", type: "textarea", rows: 3 },
                    { name: "canCommit", label: "I understand mentoring is a volunteer commitment and I will communicate respectfully and reliably.", type: "checkbox", required: true }
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <SignupSteps />
            <div className="mt-6 rounded-2xl bg-lavendermist/30 p-6 ring-1 ring-midnight/10">
              <h3 className="font-heading text-xl text-midnight">Matching principles</h3>
              <ul className="mt-3 space-y-2 text-sm text-midnight/80">
                <li>Clear goals + compatible schedules</li>
                <li>Communication style and boundaries</li>
                <li>Experience and domain relevance</li>
                <li>Feedback-driven adjustments after the first meeting</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
