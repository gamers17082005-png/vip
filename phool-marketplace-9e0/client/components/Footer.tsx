import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-footer-blue text-white mt-16 lg:mt-24">
      <div className="container-responsive py-12 lg:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:underline transition">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:underline transition">
                  Shipping Queries
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:underline transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline transition">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p className="text-sm leading-relaxed">
              HSV Sugandhika
              <br />
              Hyderabad
              <br />
              India
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-bold mb-4">Email</h3>
            <div className="space-y-2">
              <a href="mailto:hello@hsvsugandhika.com" className="block text-sm hover:underline transition">
                hello@hsvsugandhika.com
              </a>
              <a href="mailto:hsvgrouphub@gmail.com" className="block text-sm hover:underline transition">
                hsvgrouphub@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1GiKf5GyKt/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918125117683"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/hsv_sugandhika_sticks?igsh=MWx6cmJ5cTNxNm01ZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/phool"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/phool"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@hsvsugandhika?si=9eCTRcq_GZoyDz3g"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white text-opacity-80">
            &copy; 2024 HSV Sugandhika. All rights reserved.
          </p>
          <Link to="/" className="text-lg font-bold">
            <span className="text-gold">HSV Sugandhika</span>
          </Link>
        </div>
      </div>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/918125117683"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/hsv_sugandhika_sticks?igsh=MWx6cmJ5cTNxNm01ZA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110"
          title="Follow on Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://youtube.com/@hsvsugandhika?si=9eCTRcq_GZoyDz3g"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110"
          title="Subscribe on YouTube"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};
