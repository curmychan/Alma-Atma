import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { DocSignForm } from "@/components/DocSignForm";
import { documents } from "@/lib/docs";

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = (documents as any)[params.slug];
  if (!doc) return notFound();

  return (
    <>
      <PageHeader
        eyebrow="Documents"
        title={doc.title}
        description={doc.purpose}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-brandwhite p-8 shadow-soft ring-1 ring-midnight/10">
              <h2 className="font-heading text-2xl text-midnight">Draft content</h2>
              <div className="mt-4 space-y-4 text-sm text-midnight/80">
                {doc.body.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-xs text-midnight/60">
                This is a placeholder draft for website workflow. Replace with your final PDFs/text after legal review.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <DocSignForm docTitle={doc.title} />
          </div>
        </Container>
      </Section>
    </>
  );
}
