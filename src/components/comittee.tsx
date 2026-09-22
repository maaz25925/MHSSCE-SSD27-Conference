import { ShieldCheck, Users, Briefcase, Layers } from 'lucide-react';

type CommitteeEntry = {
  members: CommitteeMember[];
  label?: string;
};

type CommitteeMember = {
  name: string;
  image?: string;
};

type CommitteeSection = {
  title: string;
  icon: typeof ShieldCheck;
  description: string;
  entries: CommitteeEntry[];
};

// Import committee member images using dynamic imports to avoid URL parsing issues
const chiefPatronImage = new URL('./images/Padmashree Dr. Zahir I Kazi, President, Anjuman-I-Islam.jpg', import.meta.url).href;
const drShafiPathanImage = new URL('./images/Dr. Shafi Pathan, Principal.jpg', import.meta.url).href;
const drGaneshKameImage = new URL('./images/Dr. Ganesh Kame, Dean Research & HOD Civil Engineering.webp', import.meta.url).href;
const drMohammedShaikhImage = new URL('./images/Dr. Mohammed Ahmed Shaikh, Asst. Prof. Computer Engineering.webp', import.meta.url).href;
const drMohiuddinAhmedImage = new URL('./images/Dr. Mohiuddin Ahmed, Hon. Director.webp', import.meta.url).href;
const drAbdullahShaikhImage = new URL('./images/Dr. Abdullah Shaikh, Hon. Vice President, Anjuman-I-Islam.avif', import.meta.url).href;
const drMTanveerImage = new URL('./images/Dr. M. Tanveer, Professor, IIT Indore.png', import.meta.url).href;
const drIqbalShaikhImage = new URL('./images/dr_iqbal_shaikh_mhssce.jpeg', import.meta.url).href;

export default function Speakers() {
  const committeeSections: CommitteeSection[] = [
    {
      title: "Committee Members",
      icon: ShieldCheck,
      description: "Leadership and coordination team steering IEEE AISmartSSD 2027.",
      entries: [
        {
          label: "Chief Patron",
          members: [{ name: "Padmashree Dr. Zahir I Kazi, President, Anjuman-I-Islam", image: chiefPatronImage }]
        },
        {
          label: "Patron",
          members: [
            { name: "Dr. Abdullah Shaikh, Hon. Vice President, Anjuman-I-Islam", image: drAbdullahShaikhImage },
            { name: "Dr. Mohiuddin Ahmed, Hon. Director", image: drMohiuddinAhmedImage }
          ]
        },
        {
          label: "Convenors",
          members: [
            { name: "Dr. Shafi Pathan, Principal", image: drShafiPathanImage },
            { name: "Dr. Ganesh Kame, Dean Research", image: drGaneshKameImage }
          ]
        },
        {
          label: "Co-Convenor",
          members: [ { name: "Dr. Iqbal Ahmed Shaikh, Associate Professor, Humanities and Applied Science Dept", image: drIqbalShaikhImage } ]
        },
        {
          label: "Organizing Chair",
          members: [{ name: "Dr. Mohammed Ahmed Shaikh, Asst. Prof. Computer Engineering", image: drMohammedShaikhImage }]
        },
        {
          label: "Members (IT & Technical Support)",
          members: [
            { name: "Mr. Sher Afghan, Programmer (IT)" },
            { name: "Mr. Rehan, Programmer (Comps)" }
          ]
        }
      ]
    },
    {
      title: " Technical Program Committee",
      icon: Users,
      description: "TECHNICAL PROGRAM COMMITTEE DESCRIPTION.",
      entries: [
        { members: [{ name: "Dr. Pranav M. Pawar, Associate Professor, BITS Pilani, Dubai Campus, Dubai UAE" }] },
        { members: [{ name: "Prof. Rushali Thakkar, Quality Specialist, DCL at Smith & Associates, Europe B.V." }] },
        { members: [{ name: "Dr. Mansi Subedar, Associate Professor, Pillai HOC College of Engineering and Technology, (PHCET) Rasayani" }] },
        { members: [{ name: "Dr. Shafi Pathan, Principal, Anjuman-i-Islam's M.H. Saboo Siddik College of Engineering, Byculla, Mumbai" }] },
        { members: [{ name: "Dr. Narendra M. Shekokar, Professor, DJSCE, Mumbai" }] },
        { members: [{ name: "Dr. Sunil Wankhede, Professor, RGIT, Mumbai" }] },
        { members: [{ name: "Dr. Vinit Kotak, Professor, SAKE" }] },
        { members: [{ name: "Dr. Kavita Sonavane, Professor, SFIT" }] },
        { members: [{ name: "Dr. Kailash Karande, Professor, SKN SCEP, Pandharpur" }] },
        { members: [{ name: "Mr. Chetan Manjeshwar, Sr. Product Manager, Google" }] },
        { members: [{ name: "Dr. Prachi Palsodkar, Associate Professor, YCCE" }] },
        { members: [{ name: "Dr. Abhilash Dixit Mishra, Associate Professor, MIT" }] },
        { members: [{ name: "Dr. Mohd. Ahmed Shaikh, Assistant Professor, MHSSCE" }] },
        { members: [{ name: "Prof. Ahlam Ansari, Assistant Professor, MHSSCE" }] },
        { members: [{ name: "Dr. Chaitali Mahajan, Assistant Professor, MHSSCE" }] },
        { members: [{ name: "Dr. Tarannum Shaikh, Assistant Professor, MHSSCE" }] },
        { members: [{ name: "Prof. Amar Pawade, Assistant Professor, MHSSCE" }] }
      ]
    },
    {
      title: " Technical Advisory Board",
      icon: Users,
      description: "Strategic advisors guiding the conference vision.",
      entries: [
        { members: [{ name: "Dr. M. Tanveer, Professor, IIT Indore" }] },
        { members: [{ name: "Dr. Sanjeev Wagh, Principal, Professor, Information Technology @ Govt. College of Engineering, Karad" }] },
        { members: [{ name: "Dr. Parikshit Mahalle, Dean, R&D, Vishwakarma Institute of Technology" }] },
        { members: [{ name: "Dr. Subhas Shinde ,Chairman Board of Study, Computer Engineering,  Mumbai University." }] },
        { members: [{ name: "Dr. Imtiyaz Yusuf, Professor, International Islamic University Malaysia" }] },
        { members: [{ name: "Abdullah Ali Bahattab, Associate professor of the Computer Technology Department, College of Telecom & Electronics (early retirement)" }] }
      ]
    },
    {
      title: "Registration & Publication Chair",
      icon: Briefcase,
      description: "Registration, review and publication of all accepted papers.",
      entries: [
        { members: [{ name: "Dr. Shagufta S. Sayed, Dean Academics" }] },
        { members: [{ name: "Dr. Nilesh Ghongade, HoD Mechanical" }] },
        { members: [{ name: "Dr. Ashfaq Shaikh, HoD Computer Engineering" }] },
        { members: [{ name: "Dr. Ravindra Patil, Associate Professor EXTC" }] },
      ]
    },
    {
      title: "Publicity & Media Chair",
      icon: Layers,
      description: "Managing promotions & outreach activities.",
      entries: [
        { members: [{ name: "Er. Ahlam Shakeel Ansari, Assistant Professor (Computer Engineering)" }] },
        { members: [{ name: "Er. Arshi Khan, Assistant Professor CSE (AIML)" }] }
      ]
    },
    {
      title: "Finance Chair",
      icon: ShieldCheck,
      description: "Oversight on budgeting, expenses, and financial compliance.",
      entries: [
        { members: [{ name: "Dr. Zainab Mirza, HoD IT" }] },
        { members: [{ name: "Dr. Iqbal Shaikh, I/C FE" }] },
        { members: [{ name: "Er. Ujwal G. Chaudhary, Associate Professor" }] },
        { members: [{ name: "Mr. Wajihuddin, Registrar" }] }
      ]
    },
    {
      title: "Sponsorship & Industry Relations Chair",
      icon: Users,
      description: "Building partnerships and ensure funding.",
      entries: [
        { members: [{ name: "Dr. Sha Husain S. Maghrabi, TPO" }] },
        { members: [{ name: "All Department TPO Coordinators" }] }
      ]
    },
    {
      title: "Hospitality Chair",
      icon: Briefcase,
      description: "Ensuring seamless hospitality for dignitaries and delegates.",
      entries: [
        { members: [{ name: "Er. Abdul Sayeed, HoD EXTC" }] },
        { members: [{ name: "Dr. Asrar Taher Pathan, Assistant Professor" }] }
      ]
    },
    {
      title: "Program Advisory Chair",
      icon: Layers,
      description: "Coordinating sessions across all engineering departments.",
      entries: [
        { 
          label: "Department Heads",
          members: [
            { name: "Dr. Ashfaq Shaikh, HoD, Computer Engineering" },
            { name: "Dr. Irfan A. Landge, HoD, Computer Science & Engineering (AI & ML)" },
            { name: "Er. Samana Jafri ,HoD, Computer Science & Engineering (IoT & Cyber Security including Blockchain Technology)" },
            { name: "Dr. Zainab Mirza, HoD, Information Technology" },
            { name: "Dr. Ganesh Kame, HoD, Civil Engineering" },
            { name: "Dr. Nilesh Ghongade, HoD, Mechanical Engineering" },
            { name: "Dr. Shaikh Javed Habib, HoD, Mechanical Engineering (Automobile)" },
            { name: "Er. Abdul Sayeed, HoD, Electronics & Telecommunication Engineering" },
            { name: "Dr. Iqbal Ahmed Shaikh, HoD, Humanities and Applied Science" }
          ]
        }
      ]
    },
    {
      title: "Keynote Speakers",
      icon: Users,
      description: "Distinguished speakers presenting keynote addresses at IEEE AISmartSSD 2027.",
      entries: [
        {
          members: [{ name: "Dr. M. Tanveer, Professor, IIT Indore", image: drMTanveerImage }]
        }
      ]
    }
  ];

  // Component to display a member with image (only for those with images)
  const MemberWithImage = ({ member }: { member: CommitteeMember }) => {
    if (member.image) {
      return (
        <div className="text-center">
          <img
            src={member.image}
            alt=""
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-2xl border-4 border-white/80 hover:border-green-200 transition-all duration-300 mx-auto mb-4"
          />
          <p className="text-gray-800 font-bold text-xl md:text-2xl leading-tight whitespace-normal">
            {member.name}
          </p>
        </div>
      );
    } else {
      // For members without images, show only text aligned to the left
      return (
        <div>
          <p className="text-gray-800 font-medium">{member.name}</p>
        </div>
      );
    }
  };

  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conference Committees
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Official committee roster for IEEE AISmartSSD 2027 covering leadership, advisory, technical, operational, and hospitality roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {committeeSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col ${
                  section.title === "Committee Members" || section.title === "Department Session Management Committee" || section.title === "Keynote Speakers" || section.title === "Program Advisory Chair" ? "lg:col-span-2 min-h-[560px] w-full" : "min-h-[380px]"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600/15 to-green-500/15 text-green-700 flex items-center justify-center shadow-lg border border-green-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-6 flex-1 overflow-hidden">
                  {section.entries.map((entry, entryIndex) => (
                    <div
                      key={entryIndex}
                      className={`border border-green-200/70 rounded-2xl p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${
                        section.title === "Keynote Speakers" ? "speakers-section" : ""
                      }`}
                      id={section.title === "Keynote Speakers" ? "speakers" : undefined}
                    >
                      {entry.label && (
                        <p className="text-xs font-semibold text-green-700 mb-4 uppercase tracking-wide bg-green-50 px-3 py-1 rounded-full inline-block">
                          {entry.label}
                        </p>
                      )}
                      {section.title === "Keynote Speakers" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {entry.members.map((member, memberIndex) => (
                            <MemberWithImage key={memberIndex} member={member} />
                          ))}
                        </div>
                      ) : section.title === " Technical Program Committee" || section.title === " Technical Advisory Board" || section.title === "Registration & Publication Chair" || section.title === "Publicity & Media Chair" || section.title === "Finance Chair" || section.title === "Sponsorship & Industry Relations Chair" || section.title === "Hospitality Chair" ? (
                        <div className="flex flex-wrap gap-6">
                          {entry.members.map((member, memberIndex) => (
                            <div key={memberIndex} className="flex-1 min-w-[200px]">
                              <p className="text-gray-800 font-medium">{member.name}</p>
                            </div>
                          ))}
                        </div>
                      ) : (entry.label === "Chief Patron" || entry.label === "Organizing Secretary" || entry.label === "Organizing Chair") ? (
                        <div className="flex justify-center items-center py-4">
                          {entry.members.map((member, memberIndex) => (
                            <MemberWithImage key={memberIndex} member={member} />
                          ))}
                        </div>
                      ) : entry.label === "Patron" ? (
                        <div className="flex justify-end items-center py-4">
                          <div className="grid grid-cols-2 gap-6">
                            {entry.members.map((member, memberIndex) => (
                              <MemberWithImage key={memberIndex} member={member} />
                            ))}
                          </div>
                        </div>
                      ) : (entry.label === "Convenors" || entry.label === "Co-Convenor" || entry.label === "Organising Co-Chairs" || entry.label === "Organising Co-Secretary") ? (
                        <div className="flex justify-between items-center py-4">
                          <div className="grid grid-cols-2 gap-6 auto-rows-fr w-full">
                            {entry.members.map((member, memberIndex) => (
                              <MemberWithImage key={memberIndex} member={member} />
                            ))}
                          </div>
                        </div>
                      ) : entry.label === "Department Heads" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {entry.members.map((member, memberIndex) => (
                            <MemberWithImage key={memberIndex} member={member} />
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {entry.members.map((member, memberIndex) => (
                            <MemberWithImage key={memberIndex} member={member} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-1.5 rounded-full bg-gradient-to-r from-green-600/30 to-green-400/30 shadow-inner"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
