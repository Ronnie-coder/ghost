import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const formatPrice = (price: number) => `R${price.toFixed(2)}`;

export default function ShopPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.slug}`} key={product.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 relative">
                <Image
                  src={product.imageUrl} // Use the real image URL from our data
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover aspect-square"
                />
                {product.salePrice && (
                  <Badge variant="destructive" className="absolute top-2 right-2">SALE</Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                <p className="text-md font-bold mt-2">
                  {product.salePrice ? (
                    <>
                      <span className="text-destructive">{formatPrice(product.salePrice)}</span>
                      <del className="text-muted-foreground ml-2 text-sm">{formatPrice(product.price)}</del>
                    </>
                  ) : (
                    <span>{formatPrice(product.price)}</span>
                  )}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}