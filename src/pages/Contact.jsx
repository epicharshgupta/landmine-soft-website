
function Contact() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-black text-white py-20 text-center">

        <h1 className="text-5xl font-bold">
          Contact <span className="text-blue-500">Us</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          Have a project in mind? Let’s discuss how we can help you build
          amazing software solutions.
        </p>

      </section>



      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">

        <div className="grid md:grid-cols-2 gap-10 px-10">

          {/* CONTACT FORM */}
          <div className="bg-gray-100 p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold text-blue-600">
              Send a Message
            </h2>

            <form className="mt-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg mb-4"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg mb-4"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border p-3 rounded-lg mb-4"
              ></textarea>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Send Message
              </button>

            </form>

          </div>



          {/* CONTACT INFO */}
          <div className="p-8">

            <h2 className="text-2xl font-bold text-blue-600">
              Contact Information
            </h2>

            <p className="mt-6 text-gray-600">
              📧 Email: info@landminesoft.com
            </p>

            <p className="mt-4 text-gray-600">
              📞 Phone: +91 9876543210
            </p>

            <p className="mt-4 text-gray-600">
              📍 Address: Indore, Madhya Pradesh, India
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;

