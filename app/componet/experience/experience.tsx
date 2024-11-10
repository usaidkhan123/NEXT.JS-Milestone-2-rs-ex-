import Image from 'next/image';
import htmlimg from '@/public/images/bghtml3.png'
import cssimg from '@/public/images/bgcss.png'
import jsimg from '@/public/images/bgjs.png'
const Experience = () => {
    return (
        <section id='experience'>
       <div className="flex flex-col items-center -mt-8 ">
    <h1 className="text-4xl md:text-7xl mt-16 md:mt-32 text-center font-serif py-4 mb-8">Experiences</h1>
    <div className="flex flex-col items-center space-y-6 md:space-y-12 mb-28">
        <Image
            className="object-cover -mb-24 -mt-10"
            src={htmlimg}
            width={250}
            height={250}
            alt="HTML experience"
        />
        <Image
            className="object-cover "
            src={cssimg}
            width={155}
            height={155}
           alt="CSS experience"
        />
        <Image
            className="object-cover"
            src={jsimg}
            width={130}
            height={130}
            alt="JavaScript experience"
        />
    </div>
</div>

        </section>
        

    )
}
export default Experience;