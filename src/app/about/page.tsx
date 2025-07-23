// src/app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="w-full h-64 bg-secondary rounded-lg flex items-center justify-center mb-8">
        <Image
          src="/images/broom-ghost-logo.png" // We'll assume you add a logo here
          alt="BroomGhost SA Logo"
          width={150}
          height={150}
          className="opacity-50"
        />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-center">
        The Spirit of the Streets.
      </h1>
      <div className="mt-6 prose prose-invert mx-auto text-muted-foreground">
        <p>
          Born from the vibrant and ever-evolving culture of South Africa,{" "}
          <strong>BroomGhost SA</strong> is more than just a clothing brand—it&apos;s a
          movement. We capture the raw energy, resilience, and creativity of the
          streets and distill it into high-quality, timeless streetwear.
        </p>
        <p>
          Our name represents the hustle: sweeping through challenges and
          leaving our mark, sometimes seen, always felt. Each piece, from our
          signature hoodies to our classic tees, is designed with intention,
          crafted for comfort, and built to last. We&apos;re here for the
          creators, the innovators, and the game-changers.
        </p>
        <p>Welcome to the family. Welcome to BroomGhost.</p>
      </div>
    </div>
  );
}