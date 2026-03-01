import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";

export function PageHeader({
  title,
  eyebrow,
  description
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <div className="bg-gradient-to-b from-aeroblue/60 to-brandwhite">
      <Container className="py-14 sm:py-16">
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h1 className="mt-4 font-heading text-4xl text-midnight sm:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-3xl text-lg text-midnight/80">{description}</p> : null}
      </Container>
    </div>
  );
}
