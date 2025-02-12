import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const data: Props[] = [
  {
    title: "Working Hours",
    subtitle: "Monday to Friday: 9:00 AM - 8:00 PM",
  },
  {
    title: "Email Us",
    subtitle: "support@metromart.com",
  },
  {
    title: "Visit Us",
    subtitle: "123 Commerce Avenue, Downtown Business District, Karachi, Pakistan.",
  },
  {
    title: "Call Us",
    subtitle: "+92 312 3456789",
  },
];

const FooterHead = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data.map((item, index) => (
        <ContactItem key={index} title={item.title} subtitle={item.subtitle} />
      ))}
    </div>
  );
};

const ContactItem = ({ title, subtitle }: Props) => {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-100 p-4 transition-colors">
      <div>
        <h3 className="font-semibold font-satoshi text-gray-900 hover:text-darkColor transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 font-agrandir hover:text-gray-900 transition-colors">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FooterHead;
