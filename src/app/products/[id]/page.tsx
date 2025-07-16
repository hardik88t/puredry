import { notFound } from 'next/navigation';
import { sampleProducts } from '@/data/products';
import ProductDetailClient from '@/components/products/ProductDetailClient';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

  // Find the product by ID
  const product = sampleProducts.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
