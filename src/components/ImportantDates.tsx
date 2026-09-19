import { Calendar, FileText, CheckCircle, Users, Megaphone } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Call for Papers Announcement",
      date: "30th October, 2027",
      status: "upcoming",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Paper Submission",
      date: "15th January, 2027",
      status: "upcoming",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Notification of Acceptance",
      date: "15th February, 2027",
      status: "upcoming",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Final Camera Ready Paper",
      date: "15th March 2027",
      status: "upcoming",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Date of Conference",
      date: "17th & 18th April 2027",
      status: "highlighted",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="dates" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Important Dates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mark your calendars with these crucial dates for the conference
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {dates.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg w-56 ${
                  item.status === 'highlighted' ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
                }`}
              >
                <div className={`bg-gradient-to-r ${item.color} p-4 text-white`}>
                  <div className="flex justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-center font-semibold text-base mb-1">
                    {item.title}
                  </h3>
                </div>
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-gray-900">{item.date}</p>
                  {item.status === 'highlighted' && (
                    <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                      Main Event
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

         
      </div>
    </section>
  );
}
