import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card, CardBody } from "@/components/Card";
import { Form } from "@/components/Form";

export const metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Partner with Alma Atma"
        description="Universities, foundations, and professional communities help us expand access. Let’s collaborate."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardBody>
                <h2 className="font-heading text-2xl text-midnight">Ways to partner</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-midnight/80">
                  <li>Event access: reserve tickets/quota for mentees and mentors.</li>
                  <li>Workshops: resume, interviewing, networking, grad school guidance.</li>
                  <li>Scholarships or sponsorship: cover event fees and program operations.</li>
                  <li>Referrals: connect eligible students to Alma Atma Network.</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h2 className="font-heading text-2xl text-midnight">What you get</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-midnight/80">
                  <li>Meaningful community impact with a clear access-focused model.</li>
                  <li>Thoughtful beneficiary matching and feedback loops.</li>
                  <li>Opportunities to engage mentors and employees as volunteers.</li>
                </ul>
              </CardBody>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
              <h2 className="font-heading text-2xl text-midnight">Partner inquiry</h2>
              <p className="mt-2 text-sm text-midnight/80">
                Tell us what kind of collaboration you have in mind.
              </p>
              <div className="mt-6">
                <Form
                  action="/api/forms/partner"
                  submitLabel="Send inquiry"
                  fields={[
                    { name: "orgName", label: "Organization", type: "text", required: true },
                    { name: "name", label: "Your name", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "message", label: "How would you like to collaborate?", type: "textarea", required: true, rows: 5 }
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
