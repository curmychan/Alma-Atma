import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <h1 className="font-heading text-3xl text-midnight">Page not found</h1>
        <p className="mt-3 text-midnight/80">The page you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <Button href="/">Go home</Button>
        </div>
      </Container>
    </Section>
  );
}
