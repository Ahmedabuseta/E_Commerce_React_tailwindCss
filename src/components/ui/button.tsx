import { ReactNode } from "react";

interface iProps extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
    width?:string;
    className?:string;
    children?:ReactNode;
}

const Button = ({width = 'w-full',className,...reset}:iProps) => {

return(
<button {...reset} className={`uppercase rounded-md text-white p-2 w-full ${className} `}>

</button>
)
}
export default Button;