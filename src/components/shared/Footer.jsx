import logoXl from "../../assets/images/logo-xl.svg";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10 md:pb-10 md:pt-20">
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logoXl} alt="KeenKeeper logo" className="w-40 md:w-auto" />
          <p className="max-w-xl text-sm md:text-base leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg md:text-xl font-medium">Social Links</p>
          <div className="flex justify-center gap-3">
            <a aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-base-100 rounded-full text-neutral hover:bg-neutral hover:text-white transition cursor-pointer">
              <BsInstagram />
            </a>
            <a aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-base-100 rounded-full text-neutral hover:bg-neutral hover:text-white transition cursor-pointer">
              <BsFacebook />
            </a>
            <a aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-base-100 rounded-full text-neutral hover:bg-neutral hover:text-white transition cursor-pointer">
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full border-t border-[#46544f] pt-10 text-center md:text-left">
        <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;