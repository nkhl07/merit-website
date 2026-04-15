import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "TikTok", href: "#", icon: TikTokIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/merit-vt/" target="_blank" rel="noopener noreferrer", icon: Linkedin },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/placements", label: "Placements" },
  { href: "/projects", label: "Projects" },
  { href: " ", label: "Partnerships"},
  { href: "#", label: "GobblerConnect" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-maroon rounded-md flex items-center justify-center">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="font-black text-xl text-white tracking-tight">MERIT</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Management, Entrepreneurship, Research, Innovation, and Technology.
              A student organization at Virginia Tech.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-maroon flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Virginia Tech · Blacksburg, VA
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © 2026 MERIT at Virginia Tech. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Bridging the gap between the classroom and the workforce.
          </p>
        </div>
      </div>
    </footer>
  );
}
