import { Link } from "react-router-dom";
import { Mail, Phone, Youtube, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dh-charcoal border-t border-dh-silver/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-dh-gold to-dh-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-dh-black font-bold">⚔️</span>
              </div>
              <span className="font-display text-lg font-bold text-dh-gold">Dark Hunters</span>
            </div>
            <p className="text-dh-silver text-sm leading-relaxed">
              An organized cricket club built on discipline, brotherhood, and competitive spirit. Born to hunt. Built to win.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-dh-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Squad", href: "/squad" },
                { label: "Matches", href: "/matches" },
                { label: "Merchandise", href: "/merchandise" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-dh-silver hover:text-dh-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display text-lg font-bold text-dh-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+919958389057"
                className="flex items-center gap-2 text-dh-silver hover:text-dh-gold transition-colors text-sm group"
              >
                <Phone size={16} className="group-hover:translate-x-1 transition-transform" />
                +91 9958 389 057
              </a>
              <a
                href="mailto:info@darkhunters.com"
                className="flex items-center gap-2 text-dh-silver hover:text-dh-gold transition-colors text-sm group"
              >
                <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
                info@darkhunters.com
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dh-silver hover:text-dh-gold transition-colors text-sm group"
                aria-label="YouTube"
              >
                <Youtube size={16} className="group-hover:translate-x-1 transition-transform" />
                Live Streaming
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-bold text-dh-white mb-4">Newsletter</h3>
            <p className="text-dh-silver text-sm mb-4">
              Subscribe to get updates on matches and tournaments.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-dh-black border border-dh-silver/20 rounded-lg text-dh-white placeholder:text-dh-silver/50 focus:outline-none focus:border-dh-gold focus:ring-1 focus:ring-dh-gold/20 transition-all text-sm"
              />
              <button className="w-full px-3 py-2 bg-dh-gold text-dh-black font-bold rounded-lg hover:bg-dh-gold-dark transition-colors uppercase text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 py-8 border-t border-dh-silver/10">
          {[
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dh-black border border-dh-silver/20 rounded-lg hover:bg-dh-charcoal hover:border-dh-gold hover:text-dh-gold transition-all group"
              aria-label={label}
            >
              <Icon size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-dh-silver/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dh-silver/60 text-xs md:text-sm">
            © 2024 Dark Hunters Cricket Club. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-dh-silver/60">
            <Link to="#" className="hover:text-dh-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-dh-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-dh-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
