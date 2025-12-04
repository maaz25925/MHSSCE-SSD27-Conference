export default function About() {

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About the Conference
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The MHSS College of Engineering, under the aegis of Anjuman-i-Islam, proposes to organize an International Conference on Smart Systems for Sustainable Development (SmartSSD 2026) in April 2026. This conference aims to bring together researchers, academicians, industry professionals, and policy experts from across the globe to discuss innovative technologies contributing toward sustainability and green development. 
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About MHSSCE</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Anjuman-I-Islam's M. H. Saboo Siddik College of Engineering (MHSSCE) stands as a distinguished institution committed to delivering quality technical education and shaping ethically grounded engineers of tomorrow. Located in the heart of Mumbai, MHSSCE is governed by Anjuman-I-Islam, a historic educational conglomerate established in 1874 to uplift underprivileged communities through academic empowerment. The Saboo Siddik Campus, established in 1935, was made possible through the generous endowment of Late Mohammed Haji Saboo Siddik, a visionary philanthropist whose dream was to advance technical and industrial education among the youth of the nation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The college is affiliated to the University of Mumbai, approved by the All India Council for Technical Education (AICTE), and by the Government of Maharashtra Directorate of Technical Education (DTE). It has earned prestigious NBA Accreditation for four of its eligible branches, Civil, Mechanical, Electronics and Telecommunication, and Computer Engineering, and NAAC Accreditation for 5 years, underscoring its commitment to academic excellence, transparency, and continuous improvement.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Vision & Mission
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                  <h4 className="text-center font-semibold text-base mb-1">Vision</h4>
                </div>
                <div className="p-4">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    To be an institute of global repute committed to the cause of nation building through technology based education.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white">
                  <h4 className="text-center font-semibold text-base mb-1">Mission</h4>
                </div>
                <div className="p-4">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    To be enabler of creation and dissemination of futuristic knowledge in technology through research and quality education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conference Theme</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The conference focuses on advancing sustainable engineering practices and innovative technologies
              that address contemporary global challenges. We invite original research papers
             in various domains including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Artificial Intelligence, Data Science & Machine Learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Internet of Things, Embedded Systems & Smart Sensor Networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Cybersecurity, Blockchain & Cloud Computing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Sustainable Manufacturing & Smart Industrial System</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Communication Systems, Wireless Technologies & VLSI Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Robotics, Automation & Control Systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Mechanical Engineering, Thermal Engineering & Automotive Systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Applied Sciences & Engineering Mathematics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
