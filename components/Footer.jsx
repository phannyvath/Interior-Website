import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <p className="mb-2">Email: contact@example.com</p>
              <p className="mb-2">Phone: +1234567890</p>
              <p>Address: 123 Street, City, Country</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-400"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* Middle Section - About Company */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              dolor sed ligula vehicula consequat. Nullam dapibus vitae nulla
              nec ullamcorper.
            </p>
            <p>
              Morbi non odio eget libero dapibus sagittis in in nisl. Curabitur
              sodales orci id pretium sodales.
            </p>
          </div>
          {/* Right Section - Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <form>
              <div className="flex items-center mb-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none focus:bg-gray-700"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md ml-2 hover:bg-orange-600 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-white">
                Stay updated with our latest news and promotions.
              </p>
            </form>
          </div>
        </div>
        {/* Bottom Section - Map */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Our Location</h2>
          <div className="relative h-80">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.40376456087!2d104.89902646034612!3d11.566156966967904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310956d330da8527%3A0x7eff3ca8d12ecc0f!2sKoh%20Pich!5e0!3m2!1sen!2skh!4v1721807193653!5m2!1sen!2skh"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Footer Bottom - Copyright */}
      <div className="bg-orange-600 text-black py-4 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
