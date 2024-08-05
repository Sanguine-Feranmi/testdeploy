import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Sidebar = ({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("h-screen lg:w-[20%] md:w-[25%]  px-2.5 bg-[#000E4F] overflow-hidden", className)}>
      {children}
    </div>
  );
};

export default Sidebar;
