import { Link } from 'react-router-dom';
import { Star, Heart, Leaf, Users, Droplet, ShoppingCart } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cream-light overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Premium Incense from HSV Sugandhika
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Good For You, Good For The Planet & Good For The People Who Make It
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="btn-primary"
              >
                Shop Now
              </Link>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="h-96 lg:h-full bg-gradient-to-br from-gold/20 to-cream flex items-center justify-center">
            <div className="text-center">
              <Leaf className="w-32 h-32 text-gold mx-auto mb-4 opacity-80" />
              <p className="text-gray-500">Hero Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-responsive">
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <Link to="/shop?cat=bestsellers" className="group">
              <div className="bg-cream rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition">
                <Star className="w-12 h-12 text-gold mx-auto mb-2" />
                <p className="font-semibold text-foreground group-hover:text-gold transition">Bestsellers</p>
              </div>
            </Link>
            <Link to="/shop?cat=repellents" className="group">
              <div className="bg-cream rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition">
                <Droplet className="w-12 h-12 text-gold mx-auto mb-2" />
                <p className="font-semibold text-foreground group-hover:text-gold transition">Repellents</p>
              </div>
            </Link>
            <Link to="/shop?cat=gifting" className="group">
              <div className="bg-cream rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition">
                <Heart className="w-12 h-12 text-gold mx-auto mb-2" />
                <p className="font-semibold text-foreground group-hover:text-gold transition">Gifting</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16 lg:py-24 bg-cream-light">
        <div className="container-responsive">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Best Selling</h2>
            <Link to="/shop" className="text-gold font-semibold hover:text-gold-dark transition">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="product-card group">
              <div className="bg-cream h-64 flex items-center justify-center overflow-hidden">
                <Star className="w-20 h-20 text-gold/30" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition">
                  Charcoal-Free Incense Sticks
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(128)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">₹299</span>
                  <span className="ml-2 text-gray-400 line-through text-sm">₹599</span>
                  <span className="ml-2 bg-discount text-white text-xs px-2 py-1 rounded">50% OFF</span>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="product-card group">
              <div className="bg-cream h-64 flex items-center justify-center overflow-hidden">
                <Leaf className="w-20 h-20 text-gold/30" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition">
                  Incense Cones Set
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(95)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">₹199</span>
                  <span className="ml-2 text-gray-400 line-through text-sm">₹399</span>
                  <span className="ml-2 bg-discount text-white text-xs px-2 py-1 rounded">50% OFF</span>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="product-card group">
              <div className="bg-cream h-64 flex items-center justify-center overflow-hidden">
                <Droplet className="w-20 h-20 text-gold/30" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition">
                  Essential Oil Collection
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(156)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">₹499</span>
                  <span className="ml-2 text-gray-400 line-through text-sm">₹999</span>
                  <span className="ml-2 bg-discount text-white text-xs px-2 py-1 rounded">50% OFF</span>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="product-card group">
              <div className="bg-cream h-64 flex items-center justify-center overflow-hidden">
                <Heart className="w-20 h-20 text-gold/30" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-gold transition">
                  Premium Gift Box
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">(87)</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">₹699</span>
                  <span className="ml-2 text-gray-400 line-through text-sm">₹1,399</span>
                  <span className="ml-2 bg-discount text-white text-xs px-2 py-1 rounded">50% OFF</span>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Our Collections</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Incense Sticks', href: '/shop?col=sticks' },
              { name: 'Incense Cones', href: '/shop?col=cones' },
              { name: 'Essential Oils', href: '/shop?col=oils' },
              { name: 'Candles', href: '/shop?col=candles' },
              { name: 'Gift Boxes', href: '/shop?col=gifts' },
              { name: 'Mosquito Repellents', href: '/shop?col=repellents' },
            ].map((collection) => (
              <Link key={collection.name} to={collection.href}>
                <div className="product-card group overflow-hidden h-48 flex items-center justify-center hover:shadow-lg transition">
                  <div className="bg-cream w-full h-full flex flex-col items-center justify-center group-hover:bg-cream-light transition relative">
                    <Leaf className="w-16 h-16 text-gold/50 mb-4" />
                    <h3 className="text-xl font-bold text-foreground text-center absolute bottom-0 left-0 right-0 bg-black/30 text-white py-4 group-hover:bg-black/40 transition">
                      {collection.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HSV Sugandhika */}
      <section className="py-16 lg:py-24 bg-cream-light">
        <div className="container-responsive">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">Why Choose Phool?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">22,060+ Tons</h3>
              <p className="text-gray-600">Temple Flowers Recycled</p>
            </div>

            <div className="text-center">
              <div className="bg-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">300+ Women</h3>
              <p className="text-gray-600">Marginalized Women Employed</p>
            </div>

            <div className="text-center">
              <div className="bg-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">11+ Tons</h3>
              <p className="text-gray-600">Floral Pesticide Offset</p>
            </div>

            <div className="text-center">
              <div className="bg-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">19+ Children</h3>
              <p className="text-gray-600">Started School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-gold/20 to-cream rounded-lg flex items-center justify-center order-2 lg:order-1">
              <Leaf className="w-32 h-32 text-gold opacity-50" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Purpose</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We collect millions of sacred flowers offered in the temples of India and employ 300+ women from marginalized communities to upcycle these flowers into the world's first certified, handcrafted incense products.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our mission is to create a circular economy that benefits the environment, empowers communities, and provides you with the purest, charcoal-free incense products.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flowercycling Process */}
      <section className="py-16 lg:py-24 bg-cream-light">
        <div className="container-responsive">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">Phool Flowercycling® Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Collect', desc: 'Sacred flowers from temples' },
              { step: '2', title: 'Dry', desc: 'Natural sun drying process' },
              { step: '3', title: 'Process', desc: 'Grind and prepare flowers' },
              { step: '4', title: 'Craft', desc: 'Hand-roll incense carefully' },
              { step: '5', title: 'Package', desc: 'Premium eco-friendly packaging' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gold text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">Customer Experiences</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: 'Amazing quality and amazing purpose! Love supporting this brand.', author: 'Sarah M.', rating: 5 },
              { text: 'The incense burns beautifully and I love knowing it\'s helping the environment.', author: 'James R.', rating: 5 },
              { text: 'Best incense I\'ve tried. Charcoal-free and truly natural smelling.', author: 'Priya K.', rating: 5 },
            ].map((review, idx) => (
              <div key={idx} className="product-card p-6">
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gold to-gold-dark">
        <div className="container-responsive text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sign up for exclusive deals
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get access to new launches, exclusive events, and special promotions delivered to your inbox
          </p>

          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-gold-dark font-bold rounded-full hover:bg-gray-100 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* As Seen In */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-responsive">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">As Seen In</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {['Forbes', 'TechCrunch', 'Vogue', 'Green Earth', 'Impact Hub'].map((brand, idx) => (
              <div key={idx} className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
                <p className="text-gray-600 font-semibold">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
