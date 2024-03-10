import { IoMdFastforward } from "react-icons/io";
import { gothic } from '@/app/ui/font';
import { lato } from '@/app/ui/font'; 


export default function LoginLogo() {
    return (
    <div className="flex items-center">
        <h2 className={`${gothic.className} text-green-500 text-xl font-extrabold mr-4`} >Erran<span className={`${lato.className}`}>go</span></h2>
        <IoMdFastforward className="text-green-500 w-10 h-10" />
    </div>
    )
};