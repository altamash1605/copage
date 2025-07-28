import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white font-josefin p-6 rounded-md bg-gray-700 text-center space-y-4 shadow-md"
      >
        <FiCheckCircle className="text-5xl text-brand mx-auto" />
        <h3 className="text-2xl font-semibold text-brand">Thank you for reaching out!</h3>
        <p className="text-lg text-gray-300">
          We’ve received your message and will get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white font-josefin"
    >
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-1"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-1"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-2"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-2"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Tell us a little about your business"
        value={formData.message}
        onChange={handleChange}
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-2 resize-none"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="col-span-2 bg-brand text-white font-semibold py-3 rounded-md mt-2 hover:bg-yellow-500 transition"
      >
        {status === 'loading' ? 'Sending...' : 'Start Conversation'}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm col-span-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}