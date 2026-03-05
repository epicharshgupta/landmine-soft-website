
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-96">

        <h2 className="text-3xl font-bold text-center text-blue-600">
          Login
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Welcome back to Landmine Soft
        </p>

        <form className="mt-6">

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

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Login
          </button>
        <p className="text-center">Not registered yet? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
        </form>

      </div>

    </div>
  );
}

export default Login;

