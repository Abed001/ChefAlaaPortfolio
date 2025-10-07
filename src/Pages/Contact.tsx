function Contact() {
  return (
    <div
      id="contact"
      className="bg-white px-6 py-16 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[2rem] font-extrabold text-gray-900">
          Contact
        </span>
        <p className="mt-2 text-base text-gray-600">
          Feel free to reach out with any questions or opportunities.
        </p>
      </div>

      <form
        action="#"
        method="POST"
        className="mx-auto mt-10 max-w-xl"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input
            type="text"
            name="first-name"
            placeholder="First name"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none"
          />
          <input
            type="text"
            name="last-name"
            placeholder="Last name"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none sm:col-span-2"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none sm:col-span-2"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-md bg-button-bg px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
