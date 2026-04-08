import { Layout } from '@/components/Layout';
import { Leaf, Users, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="container-responsive py-16 lg:py-24">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            HSV Sugandhika is on a mission to create beautiful, sustainable incense products while empowering marginalized women.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-cream-light">
          <div className="container-responsive py-16 lg:py-24">
            <h2 className="text-4xl font-bold text-foreground mb-12">Our Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Every year, millions of flowers are offered in temples across India. Most of these flowers end up in landfills, contributing to environmental degradation and waste.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  HSV Sugandhika creates premium, handcrafted incense products while providing dignified employment to women in our community.
                </p>
                <p className="text-lg text-gray-700">
                  We believe business can be a force for good. Our three pillar model ensures environmental sustainability, economic opportunity, and social impact.
                </p>
              </div>
              <div className="h-96 bg-gradient-to-br from-gold/20 to-cream rounded-lg flex items-center justify-center">
                <Leaf className="w-32 h-32 text-gold opacity-30" />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="container-responsive py-16 lg:py-24">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'Protecting the planet through circular economy practices'
              },
              {
                icon: Users,
                title: 'Empowerment',
                description: 'Providing dignified livelihoods to marginalized communities'
              },
              {
                icon: Heart,
                title: 'Quality',
                description: 'Delivering premium, pure, charcoal-free incense products'
              },
              {
                icon: Award,
                title: 'Transparency',
                description: 'Being honest about our impact and continuously improving'
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="bg-gold text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact */}
        <div className="bg-cream-light">
          <div className="container-responsive py-16 lg:py-24">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '22,060+', label: 'Tons of Temple Flowers Recycled' },
                { number: '300+', label: 'Marginalized Women Employed' },
                { number: '11+', label: 'Tons of Floral Pesticide Offset' },
                { number: '19+', label: 'Children Started School' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container-responsive py-16 lg:py-24 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Join the Movement</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of our mission. Choose HSV Sugandhika and support beautiful, sustainable incense that benefits you and the people who make it.
          </p>
          <a href="/shop" className="btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </Layout>
  );
}
