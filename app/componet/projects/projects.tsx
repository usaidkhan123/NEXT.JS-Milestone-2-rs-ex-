import Image from "next/image";
import pimage2 from '@/public/images/projectimg.jpg';
import pimg3 from '@/public/images/pimg3.jpg';

const Projects = () => {
    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-7xl text-center font-serif py-4 mb-12 mt-4">PortFolio Projects</h1>

                
                <div className="flex flex-col md:flex-row md:items-center mb-16">
                    <div className="md:w-2/3 space-y-4 md:pr-8">
                        <h1 className="text-3xl md:text-6xl font-serif text-purple-700">Project1</h1>
                        <h2 className="text-2xl md:text-4xl font-semibold">Resume-Builder</h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            is simply dummy text of the printing and typesetting industry. Lorem
                            has been the industry s standard dummy text ever since the 1500s  when
                            specimen book. It has survived not only five centuries  is simply dummy
                            text of the printing and typesetting industry. Lorem has been the
                            industry s standard dummy text ever since the 1500s  when specimen book.
                            It has survived not only five centuries 
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://static-intereactive-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="text-white bg-purple-700 w-28 h-9 rounded-xl font-semibold">Vercel Link</button>
                            </a>
                            <a href="https://github.com/usaidkhan123/Hackathon-all-milestone.git" target="_blank" rel="noopener noreferrer">
                                <button className="text-white bg-purple-700 w-28 h-9 rounded-xl font-semibold">Repo Link</button>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                        <Image src={pimage2} alt="Project image 1" width={250} height={250} className="rounded-lg" />
                    </div>
                </div>

            
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-2/3 space-y-4 md:pr-8">
                        <h1 className="text-3xl md:text-6xl font-serif text-purple-700">Project2</h1>
                        <h2 className="text-2xl md:text-4xl font-semibold">SimpleWebsite By Using Next.Js</h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            is simply dummy text of the printing and typesetting industry. Lorem
                            has been the industry s standard dummy text ever since the 1500s when
                            specimen book. It has survived not only five centuries is simply dummy
                            text of the printing and typesetting industry. Lorem has been the
                            industry s standard dummy text ever since the 1500s when specimen book.
                            It has survived not only five centuries
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://static-intereactive-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className="text-white bg-purple-700 w-28 h-9 rounded-xl font-semibold">Vercel Link</button>
                            </a>
                            <a href="https://github.com/usaidkhan123/Next.Js-Assignment-3-Tailwind-css-.git" target="_blank" rel="noopener noreferrer">
                                <button className="text-white bg-purple-700 w-28 h-9 rounded-xl font-semibold">Repo Link</button>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                        <Image src={pimg3} alt="Project image 2" width={250} height={250} className="rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
