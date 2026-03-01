import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card, CardBody } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { events } from "@/lib/events";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "Events" };

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming").sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((e) => e.status === "past").sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Events & community"
        description="We host and partner on events that help beneficiaries access high-quality professional communities."
      />

      <Section>
        <Container className="space-y-10">
          <div>
            <h2 className="font-heading text-3xl text-midnight">Upcoming</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {upcoming.length === 0 ? (
                <p className="text-sm text-midnight/80">No upcoming events listed yet. Check back soon.</p>
              ) : (
                upcoming.map((e) => (
                  <Card key={e.slug}>
                    <CardBody>
                      <div className="flex items-center justify-between gap-4">
                        <Badge>{formatDate(e.date)}</Badge>
                        <span className="text-xs text-tealslate">{e.location}</span>
                      </div>
                      <h3 className="mt-3 font-heading text-2xl text-midnight">{e.title}</h3>
                      <p className="mt-3 text-sm text-midnight/80">{e.summary}</p>
                      <Link className="mt-4 inline-block text-sm font-medium text-midnight underline hover:text-tealslate" href={`/events/${e.slug}`}>
                        View details
                      </Link>
                    </CardBody>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-midnight">Past events</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {past.map((e) => (
                <Card key={e.slug}>
                  <CardBody>
                    <div className="flex items-center justify-between gap-4">
                      <Badge className="bg-lavendermist text-midnight">{formatDate(e.date)}</Badge>
                      <span className="text-xs text-tealslate">{e.location}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-2xl text-midnight">{e.title}</h3>
                    <p className="mt-3 text-sm text-midnight/80">{e.summary}</p>
                    <Link className="mt-4 inline-block text-sm font-medium text-midnight underline hover:text-tealslate" href={`/events/${e.slug}`}>
                      View recap
                    </Link>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
