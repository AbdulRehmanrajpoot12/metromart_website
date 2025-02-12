import Link from "next/link";
import Container from "./Container";
import FooterHead from "./footerHead";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import { categoriesData, quickLinkData } from "@/constant";

const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <Container>
        <FooterHead/>
        
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>MetroMart.</Logo>
            <p className="text-gray-600 text-sm">Your online destination for stylish, affordable clothing! Explore our collection of trendy, comfortable, and high-quality outfits for every occasion. Shop now and upgrade your wardrobe!</p>
            <SocialMedia className="text-darkColor/60" iconClassName="border-darkColor/60 hover:border-darkColor hover:text-darkColor" tooltipClassName="bg-darkColor text-white"/>
          </div>

          <div>
            <h3 className="font-semibold text-darkColor mb-4 font-agrandir">Quick Links</h3>
            <div className="flex flex-col gap-3 font">
              {quickLinkData?.map((item) => (
                <Link key={item?.title} href={item?.href} className="text-gray-600 hover:text-darkColor text-sm font-medium font-satoshi hoverEffect">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
          <h3 className="font-semibold text-darkColor mb-4 font-agrandir">Categories</h3>
            <div className="flex flex-col gap-3 font">
              {categoriesData?.map((item) => (
                <Link key={item?.title} href={`/category${item?.href}`} className="text-gray-600 hover:text-darkColor text-sm font-medium font-satoshi hoverEffect">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-agrandir text-darkColor mb-4">NewsLetter</h3>
            <p className="text-gray-600 text-sm mb-4 font-satoshi">Subscribe to our NewsLetter to receive updates and exclusive offers!</p>
            <form className="space-y-3">
              <Input type="email" placeholder="Please Enter Your Email..." required className="w-full py-4 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"/>
              <button type="submit" className="w-full bg-darkColor text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;