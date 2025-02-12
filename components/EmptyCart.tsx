"use client";

import emptycart from "@/images/emptycart.jpg";
import Image from "next/image";
import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full space-y-8"
      >
        <motion.div
          animate={{ x: [0, -10, 10, 0], y: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="w-48 h-48 mx-auto relative"
        >
          <Image
            src={emptycart}
            alt="Empty Cart"
            className="drop-shadow-lg object-contain"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-2"
          >
            <ShoppingCart size={24} className="text-white" />
          </motion.div>
        </motion.div>
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 font-montserrat">
            Your Cart is feeling lonely.
          </h2>
          <p className="text-gray-600 font-satoshi">
            Looks like your cart is empty! Start exploring our latest collection
            and add your favorite items. Don't miss out on the best styles, shop
            now and bring your cart to life!
          </p>
        </div>
        <Link
          href={"/"}
          className="block bg-darkColor/5 border-darkColor/20 text-center py-2.5 rounded-full text-sm font-agrandir font-semibold tracking-wide hover:border-darkColor hover:bg-darkColor hover:text-white hoverEffect"
        >
          Discover Products
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
