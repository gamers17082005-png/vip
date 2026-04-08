import { Layout } from '@/components/Layout';
import { Calendar, User } from 'lucide-react';

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-16 lg:py-24">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Stories, insights, and updates from the HSV Sugandhika community
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'The Journey of Temple Flowers',
                excerpt: 'Discover how sacred flowers are transformed into beautiful incense products.',
                author: 'HSV Sugandhika Team',
                date: 'March 15, 2024'
              },
              {
                title: 'Why Charcoal-Free Matters',
                excerpt: 'Learn about the benefits of charcoal-free incense for your health and the planet.',
                author: 'Sustainability Expert',
                date: 'March 10, 2024'
              },
              {
                title: 'Meet the Women Behind HSV Sugandhika',
                excerpt: 'Stories of empowerment from the women who hand-craft our incense.',
                author: 'HSV Sugandhika Team',
                date: 'March 5, 2024'
              },
            ].map((post, idx) => (
              <article key={idx} className="bg-cream-light rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-gold/20 to-cream flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400">[Blog Image]</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
