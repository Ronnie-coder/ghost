import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center flex flex-col items-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mt-8">
        Modern Streetwear, Timeless Design.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        From the streets of SA, discover curated collections that bring an edge to your style.
      </p>
      <Link href="/shop" className="mt-6">
        <Button size="lg">Shop The Collection</Button>
      </Link>
      
      {/* THIS IS THE UPDATED HERO IMAGE SECTION */}
      <div className="mt-10 w-full max-w-5xl aspect-[16/7] relative">
         <Image 
            src="/images/hero-banner.jpg" // The path to your new hero image
            alt="BroomGhost SA collection banner"
            fill // The 'fill' prop makes the image fill the container
            className="rounded-lg object-cover" // object-cover prevents stretching
            priority // Tells Next.js to load this image first (important for performance)
         />
      </div>
    </section>
  );
}