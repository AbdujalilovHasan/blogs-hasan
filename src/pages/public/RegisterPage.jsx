import { useState } from "react";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-9 mt-10">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              placeholder="Your surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Confirm password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-300 py-2 rounded-lg font-semibold hover:bg-amber-200 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;