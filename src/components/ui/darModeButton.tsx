import { MoonStar, SunDim } from "lucide-react";
import { useState } from "react";
import { darkMode } from "../../utilities/darkMode";

interface iProps {
 
}

const DarModeButton = ({}:iProps) => {
    const [dark,setDark] =useState<boolean>(false)
return(
<div className="top-3 end-3 bg-slate-500 rounded-full p-1 fixed">
{
    dark ? 
        <SunDim className="cursor-pointer" 
        onClick={()=>{
            darkMode('dark');
            setDark(!dark);
            
        }}
        color="#49cd82" absoluteStrokeWidth />
    :
    <MoonStar className="cursor-pointer" 
    onClick={()=>{
        darkMode('light');
        setDark(!dark);
    }}
    color="#49cd82" absoluteStrokeWidth />}
</div>
)
}
export default DarModeButton;