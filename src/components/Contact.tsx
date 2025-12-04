import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions? Get in touch with our organizing committee
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    M.H. Saboo Siddik College of Engineering<br />
                    Byculla, Mumbai - 400008<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">smartssd2026@mhssce.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Conference Coordinators</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-400 rounded-xl">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Irfan A. Landge</p>
                    <p className="text-sm text-gray-600">Organizing chair</p>
                    <p className="text-sm text-gray-600">Email: irfan.landge@mhssce.ac.in</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Mohammed Ahmed Shaikh</p>
                    <p className="text-sm text-gray-600">Organising Co-chair</p>
                    <p className="text-sm text-gray-600">Email: ahmed.shaikh@mhssce.ac.in</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Prof. Samana Jafri</p>
                    <p className="text-sm text-gray-600">Organising Co-chair</p>
                    <p className="text-sm text-gray-600">Email: samana.jafri@mhssce.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Location Map</h3>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3364822867565!2d72.83248731490284!3d18.97501198717858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3f6f0c6b8b%3A0x3df7e5e5a3e5e5e5!2sM.H.%20Saboo%20Siddik%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
