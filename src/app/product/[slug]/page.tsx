"use client"; // This page needs to be a client component to use hooks/buttons

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/lib/cartStore'; // Import the store

const formatPrice = (price: number) => `R${price.toFixed(2)}`;
const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const { addToCart } = useCartStore(); // Get the addToCart function

  if (!product) notFound();

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div className="bg-secondary rounded-lg flex items-center justify-center">
        <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="w-full h-auto object-cover aspect-square"/>
      </div>
      <div className="flex flex-col">
        {product.salePrice && <Badge variant="destructive" className="w-fit mb-2">ON SALE</Badge>}
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{product.name}</h1>
        <div className="mt-4">
          <p className="text-3xl font-bold">
            {product.salePrice ? (
              <><span>{formatPrice(product.salePrice)}</span><del className="text-muted-foreground ml-3 text-xl">{formatPrice(product.price)}</del></>
            ) : ( <span>{formatPrice(product.price)}</span> )}
          </p>
        </div>
        <p className="mt-4 text-muted-foreground">{product.description}</p>
        <Button size="lg" className="mt-8" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}