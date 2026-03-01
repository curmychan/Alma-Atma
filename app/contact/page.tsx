import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Form } from "@/components/Form";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions, partnerships, volunteering, or support—send a message and we’ll respond as soon as we can."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
            <h2 className="font-heading text-2xl text-midnight">Message us</h2>
            <div className="mt-6">
              <Form
                action="/api/forms/contact"
                submitLabel="Send message"
                fields={[
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "message", label: "Message", type: "textarea", required: true, rows: 6 }
                ]}
              />
            </div>
          </div>

          <div className="rounded-2xl bg-aeroblue/30 p-8 ring-1 ring-midnight/10">
            <h3 className="font-heading text-2xl text-midnight">Email</h3>
            <p className="mt-2 text-sm text-midnight/80">
              Prefer email? Write us at <span className="font-medium">hello@alma-atma.org</span> (update in lib/site.ts).
            </p>

            <h3 className="mt-8 font-heading text-2xl text-midnight">Safety & privacy</h3>
            <p className="mt-2 text-sm text-midnight/80">
              Please avoid sharing sensitive personal information in this form. We’ll follow up if we need more details.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
