"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../ui/customButton";
import NavDropdown from "../ui/navDropdown";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 top-0 z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="LumaTribe logo"
          width={150}
          height={40}
          priority
        />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="#" className="hover:text-primary transition-colors">
          About
        </Link>

        <NavDropdown
          label="Curriculum"
          items={[
            { label: "Ages 3-5", href: "#" },
            { label: "Ages 6-10", href: "#" },
          ]}
        />
        <NavDropdown
          label="Training"
          items={[
            { label: "Our Mission", href: "/about" },
            { label: "Our Team", href: "/team" },
          ]}
        />

        <Link href="#">Resources</Link>
        <Link href="/admin-dashboard/home">Store</Link>
      </div>

      <div className="flex items-center gap-4">
        <CustomButton variant="outline">Log in</CustomButton>
        <CustomButton variant="primary">Sign up</CustomButton>
      </div>
    </nav>
  );
};

export default Navbar;
