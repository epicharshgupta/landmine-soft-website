
function Home() {
    return (
        <div>

            {/* HERO SECTION */}
            <section data-aos="fade-up"

                className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-28 text-center">

                <h1 className="text-6xl font-bold leading-tight">
                    Build Powerful <span className="text-blue-500">Digital Products</span>
                </h1>

                <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
                    Landmine Soft helps startups and enterprises build scalable
                    web applications, mobile apps, and cloud solutions using
                    modern technologies.
                </p>

                <div className="mt-10 space-x-4">

                    <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                        Start Project
                    </button>

                    <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                        Our Services
                    </button>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 max-w-4xl mx-auto">

                    <div>
                        <h2 className="text-3xl font-bold text-blue-500">50+</h2>
                        <p className="text-gray-400">Projects</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-500">30+</h2>
                        <p className="text-gray-400">Clients</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-500">10+</h2>
                        <p className="text-gray-400">Developers</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-blue-500">5+</h2>
                        <p className="text-gray-400">Years Experience</p>
                    </div>

                </div>

            </section>



            {/* SERVICES */}
            <section
                data-aos="zoom-in"
                className="py-20 bg-white">

                <h2 className="text-4xl font-bold text-center">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-4 gap-8 mt-14 px-10">

                    <div className="p-6 border rounded-xl hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-600">
                            Web Development
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Modern responsive websites and web applications.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-600">
                            Mobile Apps
                        </h3>
                        <p className="text-gray-600 mt-3">
                            High performance Android and iOS mobile apps.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-600">
                            UI / UX Design
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Clean and modern interface design.
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-600">
                            Backend & APIs
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Secure backend systems and scalable APIs.
                        </p>
                    </div>

                </div>

            </section>




            {/* TECH STACK */}
            <section className="py-20 bg-gray-100 text-center">

                <h2 className="text-4xl font-bold">
                    Our Tech Stack
                </h2>

                <p className="text-gray-500 mt-4">
                    Technologies we use to build modern applications
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-12 px-10">

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-blue-600 font-bold">React</h3>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-blue-600 font-bold">Node.js</h3>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-blue-600 font-bold">MongoDB</h3>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-blue-600 font-bold">AWS</h3>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-blue-600 font-bold">Docker</h3>
                    </div>

                </div>

            </section>





            {/* WHY CHOOSE US */}
            <section data-aos="fade-up"
                className="bg-gray-900 text-white py-20">

                <h2 className="text-4xl font-bold text-center">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-10 mt-12 px-10 text-center">

                    <div>
                        <h3 className="text-xl font-semibold text-blue-400">
                            Experienced Team
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Skilled developers with industry experience.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-blue-400">
                            Scalable Solutions
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Software that grows with your business.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-blue-400">
                            Fast Delivery
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Agile process ensures faster project delivery.
                        </p>
                    </div>

                </div>

            </section>



            {/* TESTIMONIALS */}
            <section data-aos="fade-down"
                className="py-20 bg-white">

                <h2 className="text-4xl font-bold text-center">
                    What Our Clients Say
                </h2>

                <div className="grid md:grid-cols-3 gap-10 mt-12 px-10">

                    <div className="p-6 border rounded-lg">
                        <p className="text-gray-600">
                            Landmine Soft built our SaaS platform with incredible speed and quality.
                        </p>
                        <h4 className="mt-4 text-blue-600 font-semibold">
                            John Carter
                        </h4>
                    </div>

                    <div className="p-6 border rounded-lg">
                        <p className="text-gray-600">
                            Highly professional team. Our mobile app launch was successful.
                        </p>
                        <h4 className="mt-4 text-blue-600 font-semibold">
                            Sarah Lee
                        </h4>
                    </div>

                    <div className="p-6 border rounded-lg">
                        <p className="text-gray-600">
                            Excellent UI/UX design and backend architecture.
                        </p>
                        <h4 className="mt-4 text-blue-600 font-semibold">
                            David Wilson
                        </h4>
                    </div>

                </div>

            </section>



            {/* CTA */}
            <section data-aos="fade-right"
                className="bg-white text-black py-20 text-center">

                <h2 className="text-4xl font-bold">
                    Start Your Project Today
                </h2>

                <p className="mt-4 text-black-300">
                    Let’s build something amazing together.
                </p>

                <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
                    Contact Us
                </button>

            </section>


        </div>
    );
}

export default Home;

