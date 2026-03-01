import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Accordion } from "@/components/Accordion";

export const metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Quick answers for mentees, mentors, and partners."
      />

      <Section>
        <Container className="max-w-3xl">
          <Accordion
            items={[
              {
                q: "Who is eligible to apply as a mentee?",
                a: "We primarily serve first-generation undergraduate students who arrived in the U.S. at or after age 20 from non-English-speaking countries. If you’re not sure, apply and tell us your context—eligibility may expand as programs grow."
              },
              {
                q: "How does mentor matching work?",
                a: "We collect profiles via questionnaires, match based on goals and preferences (including time zone and communication), then run an introductory meeting. Afterward we collect feedback and adjust matches if needed."
              },
              {
                q: "How much time does mentoring require?",
                a: "Mentorship is volunteer-based and varies by match. Many pairs meet 1–2 times per month. Clear expectations and respectful communication matter more than a fixed cadence."
              },
              {
                q: "Do I have to sign documents?",
                a: "Our website supports a workflow where applicants review and/or sign a Mentorship Agreement, Code of Conduct, and Confidentiality Agreement. Which documents are required may change after legal review."
              },
              {
                q: "How can my organization partner with Alma Atma?",
                a: "Partners can provide event access, sponsor tickets, host workshops, refer students, or support operations. Use the Partners page to send an inquiry."
              }
            ]}
          />
        </Container>
      </Section>
    </>
  );
}
