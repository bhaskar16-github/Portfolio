import logo from "../assets/BM.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/bhaskar-manikanta-492864245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>
        <a href="https://github.com/bhaskar16-github"><FaGithub/></a>
        <a href="https://x.com/BHASKARMANIKAN4?t=GF0UM1-TbD6wxD3ssODW7g&s=09"><FaSquareXTwitter/></a>
        <a href="https://www.instagram.com/bhaskarmanikanta3?igsh=Zmxlemc3Nm4ycDg1"><FaInstagram/></a>
    </div>
  </nav>
};

export default Navbar;