import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Dashmenu = ({className, children}:{
    className?: string;
    children: ReactNode;
}) =>{
   return(
    <div className={cn("h-full mx-auto w-[80%] md:pl-20 md:pr-8",
        className
    )}>
        {children}
    </div>
   )
}
export default Dashmenu