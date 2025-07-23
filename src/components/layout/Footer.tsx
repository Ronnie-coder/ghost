import Link from 'next/link';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { BackToTopButton } from './BackToTopButton'; // Import our new button

const Footer = () => {
  const contact = {
    phone: '071 272 6922',
    instagram: 'https://www.instagram.com/broom_ghost_sa',
    whatsapp: '27677047095', // International format for wa.me link
  };

  return (
    <>
      <footer className="border-t bg-muted/40 text-muted-foreground">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xl text-foreground">BroomGhost SA</h3>
            <p className="mt-2 text-sm text-center md:text-left">The Spirit of the Streets. High-quality, timeless streetwear from South Africa.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/cart" className="hover:text-primary transition-colors">My Cart</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground">Contact & Socials</h4>
            <div className="mt-4 space-y-2 text-sm">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
              <a href={`tel:${contact.phone}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>{contact.phone}</span>
              </a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Credit */}
        <div className="border-t">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4 text-xs">
                <p>© {new Date().getFullYear()} BroomGhost SA. All Rights Reserved.</p>
                <p className="mt-2 sm:mt-0">
                    Website by <a href="https://www.coderon.co.za" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary underline">Coderon</a>
                </p>
            </div>
        </div>
      </footer>
      <BackToTopButton /> {/* The button will position itself on the page */}
    </>
  );
};

export default Footer;