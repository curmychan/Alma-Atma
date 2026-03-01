import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-midnight/10 bg-aeroblue/40">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo-page-6.png"
                alt="Alma Atma Network logo"
                width={44}
                height={44}
              />
              <div>
                <div className="font-heading text-lg text-midnight">Alma Atma Network</div>
                <div className="text-sm text-tealslate">Mentorship + access to professional communities</div>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm text-midnight/80">
              {site.description}
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-midnight">Explore</div>
            <ul className="mt-3 space-y-2">
              <li><Link className="hover:underline" href="/about">About</Link></li>
              <li><Link className="hover:underline" href="/programs">Programs</Link></li>
              <li><Link className="hover:underline" href="/events">Events</Link></li>
              <li><Link className="hover:underline" href="/team">Team</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-midnight">Get involved</div>
            <ul className="mt-3 space-y-2">
              <li><Link className="hover:underline" href="/apply">Apply as Mentee</Link></li>
              <li><Link className="hover:underline" href="/mentor">Become a Mentor</Link></li>
              <li><Link className="hover:underline" href="/partners">Partners</Link></li>
              <li><Link className="hover:underline" href="/donate">Donate</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-midnight/10 pt-6 text-xs text-midnight/70 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Alma Atma Network. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:underline" href="/privacy">Privacy</Link>
            <Link className="hover:underline" href="/terms">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
