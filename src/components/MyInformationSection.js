import React from "react";

// Danh sách thông tin cá nhân
const infoCards = [
  { icon: "/icons/user.png", label: "Name", value: "Danh Tran" },
  { 
    icon: "/icons/email.png", 
    label: "Email", 
    value: "danh123098@gmail.com",
    link: "mailto:danh123098@gmail.com" // link mail
  },
  { 
    icon: "/icons/github.png", 
    label: "GitHub", 
    value: "https://github.com/Danh1910",
    link: "https://github.com/Danh1910" // link github
  },
  { icon: "/icons/phone.png", label: "Phone", value: "+84 947 947 704" },
  { icon: "/icons/birthday.png", label: "Birthday", value: "19/10/2003" },
  { icon: "/icons/location.png", label: "Address", value: "Ho Chi Minh, Vietnam" },
];

function MyInformationSection() {
  return (
    <section id="information" className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="p-3 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all flex items-center gap-3"
            >
              <img src={card.icon} alt={card.label} className="w-6 h-6" />
              <div>
                <p className="text-cyan-400 font-semibold">{card.label}</p>
                {card.link ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-cyan-400"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm">{card.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyInformationSection;
