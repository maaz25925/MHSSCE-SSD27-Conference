import { ClipboardList, X } from 'lucide-react';
import { useState } from 'react';

export default function Registration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const bankDetails = {
    bankName: "DCB Bank",
    bankBranch: "Saboo Siddique",
    branchCode: "000053",
    branchAddress: "Saboo Siddique, M. H. S. College of Engg.,\n8 Shepard Road, Byculla, Mumbai, Maharashtra,\nPin: 400008\nTel: 23014149 / 23712525",
    accountTitle: "AIS MHSS College of Engg",
    accountType: "Classic Current Account",
    accountNumber: "05320100000027",
    ifscCode: "DCBL0000053",
    micrCode: "400072034"
  };

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = bankDetails.accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Register now to secure your spot at SmartSSD 2026
          </p>
        </div>

          <div className="max-w-6xl mx-auto mb-16">
          <div className="text-black">
              <div className="flex justify-center mb-3">
                <ClipboardList className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Registration Fees</h3>
            <div className="p-6">
              <div className="overflow-x-auto">
                <div className="min-w-[1000px]">
                  {/* Category: Author */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white mb-4 rounded-lg">
                    <div className="p-4">
                      <h4 className="text-2xl font-bold">Category: Author</h4>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Sub-Category</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">National</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">International</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-gray-900">Research Scholar / Student</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">₹2,000/-</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">$100 USD</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-gray-900">Academician</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">₹4,000/-</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">$200 USD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Category: Delegate (Attendees) */}
                  <div className="bg-gradient-to-r from-green-500 to-purple-600 text-white mb-4 rounded-lg">
                    <div className="p-4">
                      <h4 className="text-2xl font-bold">Category: Attendees (without paper)</h4>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Sub-Category</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">National</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">International</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-gray-900">Research Scholar / Student</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">₹500/-</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">$25 USD</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-4 font-medium text-gray-900">Academician</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">₹1,000/-</td>
                            <td className="px-4 py-4 text-green-600 font-semibold">$50 USD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={openModal}
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">For Authors</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  <span>All manuscripts must be the original work of authors and not plagiarism.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  <span>Authorship of a manuscript should be limited to authors who have made significant contributions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  <span>Authors must properly and accurately acknowledge the work of others.</span>
                </li>
              </ul>
            </div>
            <div>
              
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                  <span>Authors should disclose any financial or other substantive conflict of interest that might influence the results or interpretation of their manuscript and acknowledge individuals or organizations that have provided financial support for research.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                  <span>Authors may be asked to provide the raw data in connection with manuscripts for editorial review, and should prepare to provide public access to such data if possible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                  <span>All manuscripts must be previously unpublished, and not under consideration for publication elsewhere.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-600 text-sm">
          *Registration fee is non-refundable, non-transferable and includes 18% GST
        </div>
      </div>

      {/* Payment Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Payment Details</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Bank Information */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-2">Bank Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-green-100 text-sm">Bank Name</span>
                    <p className="text-white font-semibold text-lg">{bankDetails.bankName}</p>
                  </div>
                  <div>
                    <span className="text-green-100 text-sm">Bank Branch</span>
                    <p className="text-white font-semibold text-lg">{bankDetails.bankBranch}</p>
                  </div>
                  <div>
                    <span className="text-green-100 text-sm">Branch Code</span>
                    <p className="text-white font-semibold text-lg">{bankDetails.branchCode}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-green-100 text-sm">Branch Address</span>
                    <p className="text-white font-semibold text-lg whitespace-pre-line">
                      {bankDetails.branchAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <span className="text-gray-600 text-sm">Account Title</span>
                    <p className="text-gray-900 font-semibold mt-1">{bankDetails.accountTitle}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <span className="text-gray-600 text-sm">Account Type</span>
                    <p className="text-gray-900 font-semibold mt-1">{bankDetails.accountType}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 md:col-span-2">
                    <span className="text-gray-600 text-sm">Account Number</span>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-1">
                      <p className="text-gray-900 font-semibold text-lg">{bankDetails.accountNumber}</p>
                      <button
                        onClick={copyAccountNumber}
                        className={`px-4 py-2 ${
                          isCopied 
                            ? 'bg-green-500 hover:bg-green-600' 
                            : 'bg-green-600 hover:bg-green-700'
                        } text-white rounded-lg font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {isCopied ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          )}
                        </svg>
                        {isCopied ? 'Copied!' : 'Copy Account Number'}
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <span className="text-gray-600 text-sm">RTGS/NEFT/IFSC Code</span>
                    <p className="text-gray-900 font-semibold mt-1">{bankDetails.ifscCode}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <span className="text-gray-600 text-sm">MICR Code</span>
                    <p className="text-gray-900 font-semibold mt-1">{bankDetails.micrCode}</p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-yellow-800 mb-2">Important Instructions</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Please ensure all payment details are accurate before making the transfer</li>
                  <li>• Keep your payment receipt for future reference</li>
                  <li>• Contact us if you encounter any issues with payment</li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
