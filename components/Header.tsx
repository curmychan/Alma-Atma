"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-midnight/10 bg-brandwhite/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-page-6.png"
            alt="Alma Atma Network logo"
            width={40}
            height={40}
            priority
          />
          <div className="leading-tight">
            <div className="font-heading text-lg text-midnight">Alma Atma</div>
            <div className="-mt-1 text-xs tracking-wide text-tealslate">Network</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-midnight/80 hover:text-midnight",
                  active && "text-midnight underline"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/apply" variant="secondary" className="hidden sm:inline-flex">
            Apply as Mentee
          </Button>
          <Button href="/mentor">Become a Mentor</Button>
        </div>
      </Container>
    </header>
  );
}
