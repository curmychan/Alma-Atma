import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card, CardBody } from "@/components/Card";
import { Button } from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <Container className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">Mentorship matching</h2>
              <p className="mt-3 text-sm text-midnight/80">
                We match mentees with mentors using shared goals, experience, and communication preferences—then adjust
                based on real feedback after the first meeting.
              </p>
              <div className="mt-5">
                <Button href="/programs#mentorship" variant="secondary">How it works</Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">Professional communities</h2>
              <p className="mt-3 text-sm text-midnight/80">
                We open doors to high-quality events and networks by partnering with professional communities and
                securing attendee quotas for our beneficiaries.
              </p>
              <div className="mt-5">
                <Button href="/programs#community" variant="secondary">See the model</Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">Partners & donors</h2>
              <p className="mt-3 text-sm text-midnight/80">
                Universities, foundations, and event organizers help scale opportunity. Partner with us or donate to
                support programming and access.
              </p>
              <div className="mt-5 flex gap-3">
                <Button href="/partners" variant="secondary">Partner</Button>
                <Button href="/donate" variant="ghost">Donate</Button>
              </div>
            </CardBody>
          </Card>
        </Container>
      </Section>

      <Section className="bg-aeroblue/40">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl text-midnight">Who we serve</h2>
            <p className="mt-4 text-midnight/80">
              First-generation undergraduates who arrived in the U.S. at or after age 20 from non-English-speaking
              countries often face unique barriers: language gaps, limited networks, unfamiliar professional norms,
              and financial pressure.
            </p>
            <p className="mt-4 text-midnight/80">
              Alma Atma Network exists to make the “hidden curriculum” visible—and to connect students to people and
              communities that accelerate growth.
            </p>
            <div className="mt-6 flex gap-3">
              <Button href="/apply">Apply as Mentee</Button>
              <Button href="/about" variant="secondary">Learn more</Button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
            <h3 className="font-heading text-2xl text-midnight">Early progress</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-midnight/80">
              <li>Hosted community events and conversations to connect students with professionals.</li>
              <li>Connected 600+ attendees through early gatherings and partner events.</li>
              <li>Raised early funding and in-kind support to keep programming accessible.</li>
              <li>Recruiting volunteer mentors and building a scalable matching process.</li>
            </ul>
            <p className="mt-4 text-xs text-midnight/60">
              Impact metrics will be updated as programs expand and evaluation systems mature.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="rounded-[2rem] bg-midnight px-6 py-12 text-brandwhite shadow-soft sm:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl">Join the network</h2>
              <p className="mt-3 text-brandwhite/85">
                Whether you’re seeking guidance, offering mentorship, or supporting access—there’s a place for you here.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button href="/apply" variant="secondary" className="bg-brandwhite text-midnight hover:bg-aeroblue">
                Apply as Mentee
              </Button>
              <Button href="/mentor" variant="secondary" className="bg-aeroblue text-midnight hover:bg-lavendermist">
                Become a Mentor
              </Button>
              <Button href="/contact" variant="ghost" className="text-brandwhite hover:bg-brandwhite/10">
                Contact
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
