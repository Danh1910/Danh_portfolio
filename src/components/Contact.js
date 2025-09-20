import React, { useState } from "react";
import Swal from "sweetalert2";


function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  const res = await fetch("http://localhost:5000/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  Swal.fire({
    title: "Success!",
    text: data.message || "Feedback sent successfully!",
    icon: "success",
    confirmButtonColor: "#06b6d4", // màu cyan
    background: "#1e1e1e", // dark mode
    color: "#fff",
  });

  setForm({ name: "", email: "", feedback: "" });
} catch (err) {
  console.error(err);

  Swal.fire({
    title: "Error!",
    text: "Failed to send feedback.",
    icon: "error",
    confirmButtonColor: "#ef4444", // màu đỏ
    background: "#1e1e1e",
    color: "#fff",
  });
}
};


  return (
    <section id="contact" className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1e1e1e] p-6 rounded-lg shadow-lg"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded bg-[#121212] border border-cyan-500/30 text-white 
             focus:outline-none focus:border-cyan-400 autofill:bg-[#121212] autofill:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded bg-[#121212] border border-cyan-500/30 text-white 
             focus:outline-none focus:border-cyan-400 autofill:bg-[#121212] autofill:text-white"
            />
          </div>

          {/* Feedback */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Feedback
            </label>
            <textarea
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              placeholder="Write your feedback..."
              rows="4"
              required
              className="w-full p-3 rounded bg-[#121212] border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
