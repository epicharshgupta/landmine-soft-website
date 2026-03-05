
function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-10 py-12">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-blue-500">Landmine</span> Soft
          </h2>

          <p className="text-gray-400 mt-4">
            Building scalable software solutions for startups
            and enterprises.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-blue-400">Quick Links</h3>

          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-blue-400">Contact</h3>

          <p className="text-gray-400 mt-4">
            Email: info@landminesoft.com
          </p>

          <p className="text-gray-400">
            Phone: +91 9876543210
          </p>

          <p className="text-gray-400">
            Indore, India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        © 2026 Landmine Soft. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;

