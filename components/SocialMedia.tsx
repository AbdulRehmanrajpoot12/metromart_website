import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip";
import React from "react";
import { TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { title } from "process";

interface Props{
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const SocialLink = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/igx_rehman_",
        icon: <Instagram className="w-5 h-5"/>
    },
    {
        title: "GitHub",
        href: "https://github.com/AbdulRehmanrajpoot12",
        icon: <Github className="w-5 h-5"/>
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/abdul-rehman-rajpoot-a309082b4",
        icon: <Linkedin className="w-5 h-5"/>
    },
]

const SocialMedia = ({className, iconClassName, tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
        <div className={cn('flex items-center gap-3.5 border-t border-t-gray-500 py-5', className)}>
            {SocialLink?.map((item) => (
                <Tooltip key={item?.title}>
                <TooltipTrigger asChild>
                    <Link href={item?.href} target="_blank" rel="noopener noreferrer" className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect",iconClassName)}>
                        {item?.icon}
                    </Link>
                </TooltipTrigger>
                <TooltipContent className={cn('bg-white text-darkColor font-semibold font-satoshi', tooltipClassName)}>{item?.title}</TooltipContent>
            </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia