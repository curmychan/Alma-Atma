import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card, CardBody } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Mentorship + access to professional communities"
        description="Two connected programs designed to make the hidden curriculum visible—and connect students to people and spaces that accelerate growth."
      />

      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="scroll-mt-24" >
            <CardBody>
              <h2 id="mentorship" className="font-heading text-3xl text-midnight">1:1 Mentorship Matching</h2>
              <p className="mt-3 text-sm text-midnight/80">
                We match mentees with mentors using goals, experiences, and communication preferences. After an introductory
                meeting, we gather feedback and adjust matches if needed.
              </p>

              <h3 className="mt-6 font-heading text-xl text-midnight">How it works</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-midnight/80">
                <li>Collect mentor and mentee profiles through questionnaires.</li>
                <li>Match based on criteria: goals, industry, communication, time zone, language preferences.</li>
                <li>Host an introductory meeting and share meeting guidance.</li>
                <li>Collect feedback; rematch or adjust expectations as needed.</li>
              </ol>

              <div className="mt-6 flex gap-3">
                <Button href="/apply">Apply as Mentee</Button>
                <Button href="/mentor" variant="secondary">Become a Mentor</Button>
              </div>
            </CardBody>
          </Card>

          <Card className="scroll-mt-24">
            <CardBody>
              <h2 id="community" className="font-heading text-3xl text-midnight">Professional Community Access</h2>
              <p className="mt-3 text-sm text-midnight/80">
                We partner with professional communities and event organizers to secure attendee quotas. Then we match
                beneficiaries to events aligned with their interests—and collect feedback to improve future access.
              </p>

              <h3 className="mt-6 font-heading text-xl text-midnight">How it works</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-midnight/80">
                <li>Partner with communities and negotiate event quotas or tickets.</li>
                <li>Match beneficiaries to events based on goals and relevance.</li>
                <li>Provide event prep: what to expect, networking tips, accessibility notes.</li>
                <li>Collect feedback surveys to understand value and iterate.</li>
              </ol>

              <div className="mt-6 flex gap-3">
                <Button href="/events" variant="secondary">See events</Button>
                <Button href="/partners">Partner with us</Button>
              </div>
            </CardBody>
          </Card>
        </Container>
      </Section>

      <Section className="bg-aeroblue/40">
        <Container className="rounded-[2rem] bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
          <h2 className="font-heading text-3xl text-midnight">What mentees gain</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-medium text-midnight">Clarity</div>
              <p className="mt-2 text-sm text-midnight/80">Define goals and build a realistic plan for academics and career.</p>
            </div>
            <div>
              <div className="font-medium text-midnight">Confidence</div>
              <p className="mt-2 text-sm text-midnight/80">Practice professional communication and navigate the hidden curriculum.</p>
            </div>
            <div>
              <div className="font-medium text-midnight">Connection</div>
              <p className="mt-2 text-sm text-midnight/80">Access networks, events, and communities that expand opportunity.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/apply">Apply as Mentee</Button>
            <Button href="/donate" variant="secondary">Support access</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
