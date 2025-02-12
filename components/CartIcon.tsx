"use client";

import useCartStore from "@/store";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const {items} = useCartStore();
  return (
    <Link href={"/cart"} className="group relative">
        <ShoppingBagIcon className="w-5 h-5 group-hover:text-darkColor hoverEffect"/>
        <span className="absolute -top-1 -right-1 bg-darkColor p-2 text-white h-3.5 w-3.5 rounded-full text-xs font-raleway font-semibold flex items-center justify-center">
          {items.length ? items.length : 0}
        </span>
    </Link>
  );
};

export default CartIcon;