
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaCloud, FaPlug } from "react-icons/fa";

function Services() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-black text-white py-20 text-center">

        <h1 className="text-5xl font-bold">
          Our <span className="text-blue-500">Services</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          We provide modern software solutions to help businesses grow.
        </p>

      </section>



      {/* SERVICES */}
      <section className="py-20 bg-white">

        <div className="grid md:grid-cols-3 gap-10 px-10">

          <div className="p-8 border rounded-xl shadow hover:shadow-xl transition text-center">
            <FaCode className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold">Web Development</h2>
            <p className="text-gray-600 mt-3">
              Build modern responsive web applications.
            </p>
          </div>

          <div className="p-8 border rounded-xl shadow hover:shadow-xl transition text-center">
            <FaMobileAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold">Mobile Apps</h2>
            <p className="text-gray-600 mt-3">
              High performance Android and iOS apps.
            </p>
          </div>

          <div className="p-8 border rounded-xl shadow hover:shadow-xl transition text-center">
            <FaPaintBrush className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold">UI/UX Design</h2>
            <p className="text-gray-600 mt-3">
              Modern user interface and experience design.
            </p>
          </div>

          <div className="p-8 border rounded-xl shadow hover:shadow-xl transition text-center">
            <FaServer className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold">Backend Development</h2>
            <p className="text-gray-600 mt-3">
              Secure backend systems and APIs.
            </p>
          </div>

          <div className="p-8 border rounded-xl shadow hover:shadow-xl transition text-center">
            <FaCloud className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold">Cloud Solutions</h2>
            <p className="text-gray-600 mt-3">
              Scalable cloud deployment solutions.
            </p>
          </div>

          <div className="p-8 border rounded-xl shadow hover:shadow-xl transition text-center">
            <FaPlug className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold">API Development</h2>
            <p className="text-gray-600 mt-3">
              Build powerful REST APIs.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Services;

