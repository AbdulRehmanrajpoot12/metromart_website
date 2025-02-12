import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const NoProductsAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10", className)}>
      <motion.div initial={{opacity:0, y: -20}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
        <h2 className="text-2xl font-bold text-gray-800 font-raleway">Product Not Available!</h2>
      </motion.div>

      <motion.p className="font-satoshi text-gray-600" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2, duration: 0.5}}>
        Oops! We don't have{" "}
        <span className="text-base text-darkColor  font-semibold font-agrandir">
          {selectedTab}
        </span>{" "}
        right now, but new finds are on the way. Explore other categories—you
        might just discover something you love!
      </motion.p>

      <motion.div animate={{scale: [1, 1.1, 1]}} transition={{repeat: Infinity, duration: 1.5}} className="font-satoshi flex items-center space-x-2 text-blue-600">
        <Loader2 className="w-4 h-4 animate-spin"/> <span>Stay tuned for fresh arrivals soon!</span>
      </motion.div>

      <motion.p initial={{opacity:0}} animate={{opacity: 1}} transition={{delay: 0.4, duration: 0.5}} className="font-satoshi text-sm text-gray-600">
        Please check back later! We're working hard to bring you the best.
      </motion.p>
    </div>
  );
};

export default NoProductsAvailable;
