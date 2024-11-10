import Image from "next/image";
import codeimage from "@/public/images/img.jpg";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex flex-wrap items-center justify-between bg-slate-100 text-black h-14 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
            <Image
                className="bg-blend-color-burn mt-2"
                src={codeimage}
                width={35}
                height={35}
                alt="logo"
            />
            <h1 className="pl-4 font-bold text-purple-700">PortFolio.X</h1>
        </div>
        
        <div className="flex md:hidden">
            <button className="text-purple-700 focus:outline-none" >
                ☰
            </button>
        </div>
    
        <nav className="hidden md:flex md:space-x-8">
            <Link href="#hero" className="hover:text-purple-700">Home</Link>
            <Link href="#projects" className="hover:text-purple-700">Projects</Link>
            <Link href="#aboutus" className="hover:text-purple-700">About Us</Link>
            <Link href="#experience" className="hover:text-purple-700">Experiences</Link>
        </nav>
    
        <button className="hidden md:block text-white bg-purple-700 w-24 h-9 rounded-xl font-semibold text-sm">
            CV
        </button>
    </div>
    
    );
};

export default Header;
