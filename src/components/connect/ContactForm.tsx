import React, { useState } from 'react';

const initialState = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await fetch("https://formspree.io/f/mvgrqqbv", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm(initialState);
    } else {
      const data = await response.json();
      console.error("Form error:", data);
    }
  } catch (err) {
    console.error("Submission failed", err);
  }
};


  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-3xl space-y-4 text-white bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-md"
    >
      {/* Name */}
      <div>
        <input
          className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 text-sm"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 text-sm"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <textarea
          className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 text-sm resize-none"
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-semibold shadow-md text-white"
      >
        Send Message
      </button>

      {/* Success Message */}
      {submitted && (
        <p className="text-green-400 text-sm mt-2">Thank you for reaching out!</p>
      )}
    </form>
  );
};

export { ContactForm };
