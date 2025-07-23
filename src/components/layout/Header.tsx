"use client"; // Required for animation hooks

import { useRef } from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/cartStore';

// Import GSAP and its React hook
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const { items } = useCartStore();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  // Create a ref for the header container to scope our animations
  const container = useRef(null);

  // useGSAP is the modern hook for GSAP animations in React
  // It automatically handles cleanup to prevent memory leaks
  useGSAP(() => {
    // Animate the logo
    gsap.from(".logo-link", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out",
    });
    
    // Animate the navigation links with a stagger effect
    gsap.from(".nav-link", {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.2, // This is the magic: animates each one 0.2s after the previous
      delay: 0.2, // Start this animation slightly after the logo
    });

  }, { scope: container }); // We scope the animation to the container ref


  return (
    // Add the ref and a class for the container
    <header ref={container} className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Add a className for GSAP to target */}
        <Link href="/" className="font-bold text-xl tracking-tight logo-link">
          BroomGhost SA
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {/* Add a className for GSAP to target */}
          <Link href="/shop" className="nav-link hover:text-primary transition-colors">Shop</Link>
          <Link href="/about" className="nav-link hover:text-primary transition-colors">About</Link>
          <Link href="/cart" className="nav-link flex items-center gap-2 hover:text-primary transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span>({totalItems})</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;