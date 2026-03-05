
function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-96">

        <h2 className="text-3xl font-bold text-center text-blue-600">
          Register
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Create your account
        </p>

        <form className="mt-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Register
          </button>
<p className="text-center">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
        </form>

      </div>

    </div>
  );
}

export default Register;

