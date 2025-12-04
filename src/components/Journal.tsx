import { BookOpen, Award, Users, Globe } from 'lucide-react';

export default function Journal() {
  return (
    <section id="journal" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            G R Journal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advancing academic excellence through quality research publications
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  About G R Journal
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  G R Journal is a distinguished academic publisher committed to advancing knowledge across diverse 
                  disciplines through rigorous peer-reviewed research publications. With a focus on quality, integrity, 
                  and innovation, we serve as a bridge between researchers, academics, and industry professionals 
                  worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to provide a platform for scholarly discourse, foster academic collaboration, 
                  and contribute to the global body of knowledge by publishing cutting-edge research that addresses 
                  contemporary challenges and drives meaningful progress.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Quality Publications</h4>
                    <p className="text-sm text-gray-600">Rigorous peer-review process</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
                    <p className="text-sm text-gray-600">International indexing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Academic Network</h4>
                    <p className="text-sm text-gray-600">Global researcher community</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Open Access</h4>
                    <p className="text-sm text-gray-600">Worldwide knowledge sharing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}
