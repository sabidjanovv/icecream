import logo_icecream from "@/app/images/logo_icecream.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black h-96 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <Image
            alt="Logo IceCream"
            src={logo_icecream}
            width={79}
            height={79}
            priority={true}
          />
          <p className="text-sm mb-4">
            Some food has looked so awful that it’s looked like something that
            the dog’s brought home.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Help & Support</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Search Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Order & Return
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 w-full text-black"
            />
            <button className="bg-pink-600 text-white px-4">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
