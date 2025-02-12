import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Logo = ({ children, className }: Props) => {
  return (
    <Link href={"/"} className="flex flex-row">
      <h2
        className={cn(
          "text-2xl text-darkColor font-black tracking-wider font-montserrat",
          className
        )}
      >
        {children}
      </h2>
    </Link>
  );
};

export default Logo;
