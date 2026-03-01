import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card, CardBody } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Support access and opportunity"
        description="Donations help us expand mentorship operations, cover program tools, and secure event access for beneficiaries."
      />

      <Section>
        <Container className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">What donations support</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-midnight/80">
                <li>Tools for mentorship matching and evaluation</li>
                <li>Event tickets, quotas, and accessibility accommodations</li>
                <li>Program operations (communications, admin, volunteer support)</li>
              </ul>
            </CardBody>
          </Card>

          <Card className="lg:col-span-2">
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">Donate (integration placeholder)</h2>
              <p className="mt-3 text-sm text-midnight/80">
                Add your donation provider link here (e.g., PayPal, Stripe, Givebutter, Donorbox). 
                Once you share the provider, replace this section with the embedded widget or link.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Request donation info</Button>
                <Button href="/partners" variant="secondary">Sponsor an event</Button>
              </div>
              <p className="mt-6 text-xs text-midnight/60">
                Note: donation processing and tax statements depend on your legal/financial structure and should be reviewed.
              </p>
            </CardBody>
          </Card>
        </Container>
      </Section>
    </>
  );
}
