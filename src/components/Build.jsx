import Form from './Form';
import Testimonials from './Testimonials';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

export default function Build() {
  return (
    <section id="build" className="bg-[#121B29] py-16 px-8 md:px-10 max-w-full mx-auto h-screen">
      <h2 className="text-4xl md:text-5xl mb-10 text-left font-bold font-poppins text-white">
        <span className='text-brand font-bold font-poppins'>Co</span>Build
      </h2>
      <p className="text-lg mb-8 leading-relaxed font-light font-josefin text-gray-100">
            Ready to build something great? Tell me your idea, and let’s bring it to life — together.
          </p>
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 md:pr-8 md:border-r-2">
          <Form />
        </div>

        {/* Right: Testimonials + Info (Desktop only) */}
        <div className="w-full md:w-1/2 h-auto hidden md:flex flex-col gap-10">
          {/* Testimonials */}
          <Testimonials />

          {/* Contact Info */}
          <div className="text-white font-josefin space-y-4">
            <p className="text-lg font-semibold">Find us online</p>
            <div className="flex gap-4 text-2xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-brand transition" />
              </a>
              <a href="https://wa.me/919711059091" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-brand transition" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-brand transition" />
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-2">
            <iframe
              title="CoPage Location"
              className="w-full h-40 rounded-md border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.931206034258!2d77.2090217!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dd04c7b11b%3A0x6ac3d6d1be0cf16b!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-sm text-white font-josefin">New Delhi, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
