import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-aeroblue/60 to-brandwhite">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge>Mentorship • Community • Opportunity</Badge>
            <h1 className="mt-4 font-heading text-4xl leading-tight text-midnight sm:text-5xl">
              Unlock professional potential for late-arrival, first-generation students.
            </h1>
            <p className="mt-5 text-lg text-midnight/80">
              Alma Atma Network supports first-generation undergraduates who arrive in the U.S. at or after age 20
              from non-English-speaking countries—through mentorship and access to high-quality professional communities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/apply" variant="primary">Apply as Mentee</Button>
              <Button href="/mentor" variant="secondary">Become a Mentor</Button>
              <Button href="/donate" variant="ghost">Donate</Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-brandwhite p-4 shadow-soft ring-1 ring-midnight/10">
                <div className="font-heading text-2xl text-midnight">600+</div>
                <div className="text-sm text-tealslate">community attendees connected</div>
              </div>
              <div className="rounded-2xl bg-brandwhite p-4 shadow-soft ring-1 ring-midnight/10">
                <div className="font-heading text-2xl text-midnight">8+</div>
                <div className="text-sm text-tealslate">events hosted (early progress)</div>
              </div>
              <div className="rounded-2xl bg-brandwhite p-4 shadow-soft ring-1 ring-midnight/10">
                <div className="font-heading text-2xl text-midnight">1:1</div>
                <div className="text-sm text-tealslate">mentor matching & feedback loops</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] bg-lavendermist/35 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] bg-brandwhite shadow-soft ring-1 ring-midnight/10">
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/brand/logo-page-6.png"
                    alt="Alma Atma Network badge logo"
                    width={72}
                    height={72}
                  />
                  <div>
                    <div className="font-heading text-2xl text-midnight">Our guiding belief</div>
                    <div className="text-sm text-tealslate">
                      Background shapes the journey—but doesn’t define the heights you can reach with access.
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-sm text-midnight/80">
                  <p>
                    We help students navigate language, culture, and professional norms—without asking them
                    to leave their identities behind.
                  </p>
                  <p>
                    Our community is built by mentors, volunteers, and partners who believe opportunity should be shared.
                  </p>
                </div>
                <div className="mt-6">
                  <Button href="/programs" variant="secondary">Explore our programs</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
