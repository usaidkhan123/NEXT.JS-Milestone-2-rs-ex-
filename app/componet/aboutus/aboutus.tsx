const About = () => {
    return (
        <section id="aboutus">
            <div className="bg-[url('/images/blbgimg.webp')] bg-cover bg-center h-[30rem] md:h-[40rem] flex items-center justify-center">
                <div className="text-center text-white px-4 md:px-20">
                    <h1 className="text-4xl md:text-7xl font-serif py-4 mb-4 text-purple-700">About Me</h1>
                    <p className="text-base md:text-lg leading-relaxed text-black">
                        is simply dummy text of the printing and typesetting industry. Lorem <br />
                        has been the industry s standard dummy text ever since the 1500s when <br />
                        specimen book. It has survived not only five centuries  is simply dummy <br />
                        text of the printing and typesetting industry. Lorem has been the industry s <br />
                        standard dummy text ever since the 1500s  when specimen book. It has survived not only five centuries.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

