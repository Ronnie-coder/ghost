"use client";

import Image from "next/image";
import { useCartStore, CartItem } from "@/lib/cartStore";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";

const formatPrice = (price: number) => `R${price.toFixed(2)}`;

export default function CartPage() {
  const { items, removeFromCart } = useCartStore();
  const totalPrice = items.reduce((total, item) => total + (item.salePrice || item.price) * item.quantity, 0);

  const whatsappNumber = "27677047095"; // Your WhatsApp number
  const generateWhatsAppMessage = () => {
    let message = "Hi BroomGhost SA, I'd like to place an order for the following items:\n\n";
    items.forEach(item => {
      message += `*${item.name}* (x${item.quantity}) - ${formatPrice((item.salePrice || item.price) * item.quantity)}\n`;
    });
    message += `\n*Total: ${formatPrice(totalPrice)}*`;
    return encodeURIComponent(message);
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <p className="text-muted-foreground mt-2">Looks like you haven't added anything yet.</p>
        <Link href="/shop" className="mt-6 inline-block">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <Image src="/images/placeholder.svg" alt={item.name} width={80} height={80} className="rounded-md bg-secondary"/>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold">{formatPrice((item.salePrice || item.price) * item.quantity)}</p>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-end">
        <div className="text-2xl font-bold">
          <span>Total: </span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <p className="text-muted-foreground text-sm">Shipping will be calculated on confirmation.</p>
        <a href={`https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`}
           target="_blank"
           rel="noopener noreferrer">
          <Button size="lg" className="mt-4">
            Checkout via WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}