
function Careers() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-black text-white py-20 text-center">

        <h1 className="text-5xl font-bold">
          Join Our <span className="text-blue-500">Team</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          We are always looking for passionate developers and designers
          to build amazing software products.
        </p>

      </section>



      {/* JOB LISTINGS */}
      <section className="py-20 bg-white">

        <h2 className="text-4xl font-bold text-center">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 px-10">

          {/* Job 1 */}
          <div className="border p-6 rounded-xl shadow hover:shadow-xl transition">

            <h3 className="text-xl font-bold text-blue-600">
              Frontend Developer
            </h3>

            <p className="text-gray-600 mt-3">
              Experience with React, Tailwind CSS, and modern UI frameworks.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>

          </div>


          {/* Job 2 */}
          <div className="border p-6 rounded-xl shadow hover:shadow-xl transition">

            <h3 className="text-xl font-bold text-blue-600">
              Backend Developer
            </h3>

            <p className="text-gray-600 mt-3">
              Experience with Node.js, APIs, and database systems.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>

          </div>


          {/* Job 3 */}
          <div className="border p-6 rounded-xl shadow hover:shadow-xl transition">

            <h3 className="text-xl font-bold text-blue-600">
              UI / UX Designer
            </h3>

            <p className="text-gray-600 mt-3">
              Skilled in Figma, user research, and modern design systems.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Careers;

