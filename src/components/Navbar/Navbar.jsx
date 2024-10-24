import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiProfileFill } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const handleEmailClick = () => {
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lucaseuof07@gmail.com&su=${encodeURIComponent(
      ""
    )}&body=${encodeURIComponent("")}`;
    window.open(mailtoLink, "_blank");
  };

  const handleWhatsappClick = () => {
    const whatsappLink = `https://wa.me/5561996410548?text=${encodeURIComponent(
      ""
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const handleDownload = () => {
    const pdfUrl = '/CV-LucasOliveira.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV-LucasOliveira.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="navbar">
      <FaLinkedin
        title="LinkedIn"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/lucas-oliveira-ferreira-4788b62b1/",
            "_blank"
          )
        }
      />
      <FaGithub
        title="GitHub"
        onClick={() => window.open("https://github.com/lucasolv", "_blank")}
      />
      <HiOutlineMail title="lucaseuof07@gmail.com" onClick={handleEmailClick} />
      <FaWhatsapp title="(61) 996410548" onClick={handleWhatsappClick} />
      <RiProfileFill title="Download do currículo em PDF" onClick={handleDownload} />
    </div>
  );
};

export default Navbar;
