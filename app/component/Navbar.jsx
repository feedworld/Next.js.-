import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/image1.jpg";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="logo">
          <Image src={logo} height={50} width={50} alt=""></Image>
          <span className="text-white ml-3 text-lg"> My Next.js App</span>
        </div>

        <div>
          <Link href="/" className="text-white mx-2">
            Home
          </Link>
          <Link href="/contact" className="text-white mx-2">
            Contact
          </Link>
          <Link href="/about" className="text-white mx-2">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
}
