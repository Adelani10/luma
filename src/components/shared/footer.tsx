import { footerLinks } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#006BEE] text-white pt-16 pb-8 px-10">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="LumaTribe Logo"
                width={140}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <div className="relative inline-block">
              <select className="bg-white/20 border-none rounded-full px-4 py-2 text-sm appearance-none pr-10 cursor-pointer hover:bg-white/30 transition-colors focus:ring-2 focus:ring-white/50 outline-none">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
                <FaAngleDown />
              </span>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-[#AAB0D8] text-sm font-bold text-[17.9px] font-inter ">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm font-medium hover:underline decoration-2 underline-offset-4"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 py-8 border-b border-white/20 mb-8">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <Image
              src="/app-store.png"
              alt="Download on App Store"
              width={135}
              height={40}
            />
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <Image
              src="/google-play.png"
              alt="Get it on Google Play"
              width={135}
              height={40}
            />
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/icons/accessibility-icon.png"
              alt="Accessibility"
              width={40}
              height={25}
            />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[13px] text-white/80 font-medium">
          <p>© LumaTribe, Inc</p>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white">
            Product Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Website Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
