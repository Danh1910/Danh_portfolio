import React from "react";
import Section from "./ui/Section";
import { Stagger, StaggerItem } from "./ui/motion";

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
    value: "github.com/Danh1910",
    link: "https://github.com/Danh1910" // link github
  },
  {
    icon: "/icons/linkedin.svg",
    label: "LinkedIn",
    value: "linkedin.com/in/danh-trần",
    link: "https://www.linkedin.com/in/danh-tr%E1%BA%A7n-a12784333/"
  },
  { icon: "/icons/phone.png", label: "Phone", value: "+84 947 947 704" },
  { icon: "/icons/location.png", label: "Address", value: "Ho Chi Minh, Vietnam" },
];

function InfoCard({ icon, label, value, link }) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 transition-colors group-hover:bg-accent-500/20">
        <img src={icon} alt="" className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wider text-gray-500">{label}</span>
        <span className="block truncate text-gray-200 transition-colors group-hover:text-accent-300">{value}</span>
      </span>
    </>
  );
  const className =
    "group flex h-full items-center gap-4 rounded-xl border border-white/10 bg-surface p-4 transition-colors hover:border-accent-500/50";

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

function MyInformationSection() {
  return (
    <Section id="information" index="01" title="Information">
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {infoCards.map((card) => (
          <StaggerItem key={card.label}>
            <InfoCard {...card} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default MyInformationSection;
