export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: 'Panel Cap', slug: 'panel-cap', price: 150, imageUrl: '/images/products/cap.jpg', description: 'A stylish and comfortable panel cap.' },
  { id: 2, name: 'Beanie', slug: 'beanie', price: 130, imageUrl: '/images/products/beanie.jpg', description: 'Keep warm with the BroomGhost beanie.' },
  { id: 3, name: 'Normal T-Shirt', slug: 'normal-t-shirt', price: 250, imageUrl: '/images/products/t-shirt.jpg', description: 'Your new everyday essential.' },
  { id: 4, name: 'Embroidery Oversized Tee', slug: 'embroidery-oversized-tee', price: 400, imageUrl: '/images/products/oversized-tee-embroidery.jpg', description: 'Make a statement with our embroidery oversized tee.' },
  { id: 5, name: 'Oversized Tee', slug: 'oversized-tee', price: 300, imageUrl: '/images/products/oversized-tee.jpg', description: 'The perfect oversized tee for a modern silhouette.' },
  { id: 6, name: 'Hoodie', slug: 'hoodie', price: 400, salePrice: 300, imageUrl: '/images/products/hoodie.jpg', description: 'The signature BroomGhost hoodie. Currently on sale!' },
  { id: 7, name: 'Sweater', slug: 'sweater', price: 300, imageUrl: '/images/products/sweater.jpg', description: 'A classic crewneck sweater.' },
  { id: 8, name: 'Trucker Cap', slug: 'trucker-cap', price: 120, imageUrl: '/images/products/trucker-cap.jpg', description: 'A classic trucker cap with a breathable mesh back.' },
  { id: 9, name: 'Bucket Hat', slug: 'bucket-hat', price: 150, imageUrl: '/images/products/bucket-hat.jpg', description: 'Stay cool and trendy with the BroomGhost bucket hat.' },
  { id: 10, name: 'Socks', slug: 'socks', price: 50, imageUrl: '/images/products/socks.jpg', description: 'Comfortable, high-quality socks.' },
  { id: 11, name: 'Golf Tee', slug: 'golf-tee', price: 250, imageUrl: '/images/products/golf-tee.jpg', description: 'A premium golf tee for on or off the course.' },
];