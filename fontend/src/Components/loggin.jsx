import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation or send data to backend here
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form fields after submission
    setUsername("");
    setPassword("");
  };

  return (
    <div className="font-body bg-gray-900 text-white h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm mb-2">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">Login</button>
      </form>
    </div>
  );
}

export default Login;
