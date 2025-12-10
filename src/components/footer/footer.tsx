import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  X,
} from "lucide-react";

interface FooterColumnProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="w-1/2 sm:w-1/4 lg:w-auto mb-8 lg:mb-0">
    <h4 className="text-white font-semibold mb-4 text-base">{title}</h4>
    <nav className="space-y-2">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-stone-400 text-sm hover:text-white transition-colors block"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  </div>
);

const socialLinksData = [
  { name: "Facebook", href: "#facebook", Icon: Facebook },
  { name: "Instagram", href: "#instagram", Icon: Instagram },
  { name: "Youtube", href: "#youtube", Icon: Youtube },
  { name: "Twitter", href: "#twitter", Icon: X },
  { name: "LinkedIn", href: "#linkedin", Icon: Linkedin },
];

const SocialColumn: React.FC = () => (
  <div className="w-1/2 sm:w-1/4 lg:w-auto mb-8 lg:mb-0">
    <h4 className="text-white font-semibold mb-4 text-base">Social</h4>
    <nav className="space-y-2">
      {socialLinksData.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-stone-400 text-sm hover:text-white transition-colors flex items-center"
        >
          <link.Icon className="w-4 h-4 mr-2" />
          {link.name}
        </Link>
      ))}
    </nav>
  </div>
);

export default function Footer() {
  const exploreLinks = [
    { name: "Category Name I", href: "#category1" },
    { name: "Category Name II", href: "#category2" },
    { name: "Category Name III", href: "#category3" },
    { name: "Category Name IV", href: "#category4" },
  ];

  const aboutLinks = [
    { name: "About Us", href: "#about" },
    { name: "What we offer", href: "#offer" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Plans & Prices", href: "#pricing" },
    { name: "Teach with Us", href: "#teach" },
    { name: "Support", href: "#support" },
  ];

  const legalLinks = [
    { name: "Accessibility Statement", href: "#accessibility" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms & Conditions", href: "terms" },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-16 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between lg:gap-8">
          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="About" links={aboutLinks} />
          <FooterColumn title="Legal & Accessibility" links={legalLinks} />
          <SocialColumn />
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center pb-6 space-y-4 sm:space-y-0">
          <Link href="/" className="block">
            <div className="w-6 h-6 p-4 bg-gray-500 rounded-sm flex items-center justify-center text-xs font-bold text-gray-800">
              LMS
            </div>
          </Link>

          <p className="text-sm text-stone-400 text-center sm:text-right">
            Copyright &copy; {new Date().getFullYear()} Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
