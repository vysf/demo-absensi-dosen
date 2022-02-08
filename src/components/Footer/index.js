import React from "react";
// import "./_footer.scss";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="copyright">
      <h4>
        © {date.getFullYear()} Jurusan Fisika FMIPA UNTAN. All right reserved
      </h4>
    </footer>
  );
};

export default Footer;
