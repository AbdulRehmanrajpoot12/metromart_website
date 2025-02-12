"use client";

import { Loader2 } from "lucide-react";
import Logo from "./Logo";
import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="fixed min-h-screen w-full left-0 top-0 bg-white flex items-center justify-center z-0">
        <div className="flex flex-col justify-center items-center gap-1">
            <Logo>MetroMart.</Logo>
            <motion.div animate={{ scale: [1, 1.1, 1]}}  transition={{ repeat:Infinity, duration: 1.5}} className="flex items-center space-x-2 text-green-800">
                <Loader2 className="animate-spin"/>
                <span className="font-agrandir font-semibold tracking-wide">
                    MetroMart is Loading...
                </span>
            </motion.div>
        </div>
    </div>
  )
}

export default Loading