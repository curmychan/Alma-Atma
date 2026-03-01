import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card, CardBody } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our mission, vision, and story"
        description="We believe background shapes the journey—but access to resources and communities can unlock new heights."
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-3">
          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">Mission</h2>
              <p className="mt-3 text-sm text-midnight/80">
                Alma Atma Network empowers first-generation undergraduate students who arrive in the U.S. at or after age 20
                from non-English-speaking countries—through mentorship and access to high-quality professional communities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">Vision</h2>
              <p className="mt-3 text-sm text-midnight/80">
                Your background shapes your journey, but it doesn’t define the heights you can reach when you have access
                to resources, networks, and opportunities.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h2 className="font-heading text-2xl text-midnight">What “Alma Atma” means</h2>
              <p className="mt-3 text-sm text-midnight/80">
                A reminder that growth is both internal (alma) and outward-reaching (atma): building confidence while
                connecting to communities that expand what’s possible.
              </p>
            </CardBody>
          </Card>
        </Container>
      </Section>

      <Section className="bg-aeroblue/40">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-[2rem] bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
            <h2 className="font-heading text-3xl text-midnight">Founder story (summary)</h2>
            <p className="mt-4 text-midnight/80">
              Alma Atma Network was founded by Chrissie Li. She immigrated to the U.S. at 21 and navigated language,
              cultural, and financial barriers while pursuing higher education and professional growth.
            </p>
            <p className="mt-4 text-midnight/80">
              Scholarships, mentors, and professional communities played a defining role in her path—helping her earn a
              BBA from UC Berkeley (Haas) and an MPA from the London School of Economics.
            </p>
            <p className="mt-4 text-midnight/80">
              After a career break in 2022, she started Alma Atma to make that kind of access more available to late-arrival,
              first-generation students.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-3xl text-midnight">What we value</h3>
            <ul className="mt-4 space-y-3 text-midnight/80">
              <li><span className="font-medium text-midnight">Access:</span> opening doors to networks and high-quality events.</li>
              <li><span className="font-medium text-midnight">Belonging:</span> creating spaces where students feel seen and supported.</li>
              <li><span className="font-medium text-midnight">Agency:</span> helping mentees set goals and build confidence.</li>
              <li><span className="font-medium text-midnight">Care:</span> clear expectations, respectful communication, privacy.</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/programs" variant="secondary">Explore programs</Button>
              <Button href="/mentor">Become a mentor</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
