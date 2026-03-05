
function About() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-black text-white py-20 text-center">

        <h1 className="text-5xl font-bold">
          About <span className="text-blue-500">Landmine Soft</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Landmine Soft is a modern software development company focused on
          building scalable digital solutions for startups and enterprises.
        </p>

      </section>



      {/* MISSION & VISION */}
      <section className="py-20 bg-white">

        <div className="grid md:grid-cols-2 gap-10 px-10">

          <div className="p-8 border rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-600">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              Our mission is to empower businesses with modern software
              solutions that improve efficiency, scalability, and user
              experience.
            </p>
          </div>

          <div className="p-8 border rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-600">
              Our Vision
            </h2>

            <p className="mt-4 text-gray-600">
              We aim to become a global technology partner helping companies
              innovate through cutting-edge software development.
            </p>
          </div>

        </div>

      </section>



      {/* TEAM */}
      <section className="bg-gray-100 py-20 text-center">

        <h2 className="text-4xl font-bold">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 px-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600">
              John Carter
            </h3>
            <p className="text-gray-500 mt-2">
              Founder & CEO
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600">
              Sarah Lee
            </h3>
            <p className="text-gray-500 mt-2">
              Lead Designer
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-600">
              David Wilson
            </h3>
            <p className="text-gray-500 mt-2">
              Senior Developer
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;

