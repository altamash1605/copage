// components/Build.jsx
import Form from './Form';
import Testimonials from './Testimonials';

export default function Build() {
  return (
    <section
      id="build"
      className="bg-[#121B29] text-white py-20 px-6 md:px-12 max-w-full mx-0 font-josefin"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
        {/* Left: Form + Heading */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-brand">Co</span>Build
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Ready to build something great? Tell me your idea, and let’s bring it to life — together.
          </p>
          <Form />
        </div>

        {/* Right: Testimonials (desktop only) */}
        <div className="hidden md:block w-full md:min-h-[80vh] md:w-1/2 border-t md:border-t-0 md:border-l border-gray-600 pl-4 md:pl-8">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
