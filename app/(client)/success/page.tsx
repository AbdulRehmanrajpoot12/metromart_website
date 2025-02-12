"use client";

import useCartStore from "@/store";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {

    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber");
    const sessionId = searchParams.get("session_id");
    const { resetCart } = useCartStore();
    const router = useRouter();

    useEffect(()=> {
        if(!orderNumber && !sessionId){
            router.push("/");        
        }else {
            resetCart();
        }
    }, [orderNumber, sessionId, resetCart]);

  return (
    <div className="py-10 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center">
            <motion.div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Check className="text-white w-12 h-12 "/>
            </motion.div>
            <h2 className="text-3xl font-bold font-raleway text-gray-900 mb-4">Order confirmed!</h2>
            <div className="space-y-4 mb-8 text-left">
                <p className="text-gray-700 font-montserrat">Thank you for shopping with us. You'll receive a confirmation email with your order details soon. Stay tuned for updates on your delivery!</p>
                <p className="text-gray-700 font-satoshi font-semibold">Order Number: <span className="underline text-black">{orderNumber}</span></p>
            </div>
            <div className="bg-gray-50 border-gray-200 rounded-lg p-4 mb-8">
                <h2 className="font-semibold font-raleway text-gray-900 mb-2">What's Next?</h2>
                <ul className="text-gray-700 text-sm space-y-1 font-montserrat">
                    <li>Check your email for order confirmation and details.</li>
                    <li>Track your shipment once you receive the tracking info.</li>
                    <li>Prepare for delivery and get excited for your order!</li>
                    <li>Need more? Explore our latest collections while you wait.</li>
                </ul>
            </div>
            {/* Order Tracker */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/" className="flex items-center justify-center px-4 py-3 font-semibold font-agrandir bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                    <Home className="w-5 h-5 mr-2"/>
                    Home
                </Link>
                <Link href="/orders" className="flex items-center justify-center px-4 py-3 font-semibold font-agrandir bg-white text-black border border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md">
                    <Package className="w-5 h-5 mr-2"/>
                    Orders
                </Link>
                <Link href="/" className="flex items-center justify-center px-4 py-3 font-semibold font-agrandir bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                    <ShoppingBag className="w-5 h-5 mr-2"/>
                    Shop
                </Link>
            </div>

        </motion.div>
    </div>
  )
}

export default SuccessPage;