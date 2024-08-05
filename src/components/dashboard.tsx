import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Dashboard = ({className, children}:{
    className?: string;
    children: ReactNode;
}) =>{
   return(
    <div className={cn("h-full mx-auto flex justify-between w-full",
        className
    )}>
        {children}
    </div>
   )
}
export default Dashboard