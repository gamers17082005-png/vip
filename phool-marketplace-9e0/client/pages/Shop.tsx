import { Layout } from '@/components/Layout';

export default function Shop() {
  return (
    <Layout>
      <div className="min-h-screen bg-cream-light">
        <div className="container-responsive py-16 lg:py-24">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Shop All Products</h1>
          
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              The full shop experience is coming soon!
            </p>
            <p className="text-gray-500">
              We're building an amazing product browsing experience. In the meantime, check out our homepage for featured products.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
