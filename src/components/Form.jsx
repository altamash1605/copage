// components/Form.jsx
export default function Form() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white font-josefin">
      <input
        type="text"
        placeholder="First Name"
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-1"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-1"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-2"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-2"
      />
      <textarea
        rows="4"
        placeholder="Tell us a little about your business"
        className="p-3 rounded-md bg-gray-600 placeholder-gray-300 outline-none col-span-2 resize-none"
      />
      <button
        type="submit"
        className="col-span-2 bg-brand text-white font-semibold py-3 rounded-md mt-2 hover:bg-yellow-500 transition"
      >
        Start Conversation
      </button>
    </form>
  );
}
