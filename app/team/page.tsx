import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card, CardBody } from "@/components/Card";
import { team } from "@/lib/team";

export const metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="People behind Alma Atma"
        description="We’re a volunteer-powered network supported by mentors, advisors, partners, and donors."
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <Card key={m.name}>
                <CardBody>
                  <div className="font-heading text-2xl text-midnight">{m.name}</div>
                  <div className="mt-1 text-sm font-medium text-tealslate">{m.role}</div>
                  <p className="mt-3 text-sm text-midnight/80">{m.bio}</p>
                  {m.linkedIn ? (
                    <a className="mt-4 inline-block text-sm font-medium text-midnight underline hover:text-tealslate" href={m.linkedIn}>
                      LinkedIn
                    </a>
                  ) : null}
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-aeroblue/30 p-8 ring-1 ring-midnight/10">
            <h2 className="font-heading text-3xl text-midnight">Want to help?</h2>
            <p className="mt-3 max-w-2xl text-midnight/80">
              If you’d like to volunteer, mentor, or support partnerships, we’d love to hear from you.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center rounded-2xl bg-midnight px-5 py-2.5 text-sm font-medium text-brandwhite hover:bg-tealslate" href="/mentor">
                Become a Mentor
              </a>
              <a className="inline-flex items-center justify-center rounded-2xl bg-brandwhite px-5 py-2.5 text-sm font-medium text-midnight ring-1 ring-midnight/10 hover:bg-aeroblue" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
