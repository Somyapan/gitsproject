import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <header>
      <nav className="bg-[#333333] px-3 py-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-gray-400 text-xs">
              <i className="fa-solid fa-phone text-xs" />
              <span> +91-294-26578 00-04</span>
            </p>
            <p className="text-white uppercase font-bold text-base transition-all  px-3 py-2 animate-blink-link">
              Online Admission Link 2024
            </p>
          </div>
          <ul className="flex items-center justify-center gap-4 mt-2 text-gray-400 text-sm">
            <li className="hover:text-white">
              <Link to="/career">Careers</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/media-coverage">media Coverage</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/student-notices">Student Notices</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/grievance-form">Grievance Form</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="px-5 flex flex-col gap-3 lg:flex-row mx-auto w-full max-w-screen-2xl items-center justify-center">
        <div className="w-fit">
          <img className=" w-32 h-auto" src="/gits-logo.png" alt="" />
        </div>
        <div className="w-fit text-center">
          <h3 className="font-bold text-[1.75rem] uppercase">
            GEETANJALI INSTITUTE OF TECHNICAL STUDIES, UDAIPUR
          </h3>
          <p className="text-[#F4771E] capitalize text-lg my-1">
            Affiliated to Rajasthan Technical University, Kota and Approved by
            AICTE, New Delhi
          </p>
          <p className="text-[#932AC9] font-bold my-2">
            NAAC A Grade Accredited Institute | NBA Approved B.Tech & MBA
            Program
          </p>
          <p className="flex items-center gap-2 w-fit mx-auto">
            <span className="uppercase font-bold text-[#D83526]">
              Courses Offered:
            </span>
            <ul className="flex items-center gap-2 w-fit">
              <li>
                <Link
                  to="/departments"
                  className="uppercase pr-2 border-r-2 border-[#D83526]"
                >
                  B.tech
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="uppercase pr-2 border-r-2 border-[#D83526]"
                >
                  M.tech
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="uppercase pr-2 border-r-2 border-[#D83526]"
                >
                  mba
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="uppercase pr-2 border-r-2 border-[#D83526]"
                >
                  mca
                </Link>
              </li>
              <li>
                <Link to="/departments" className="uppercase">
                  Phd
                </Link>
              </li>
            </ul>
          </p>
        </div>
        <div className="flex items-center gap-2 w-fit">
          <img className="w-32 h-auto" src="/nba-logo.png" alt="" />
          <img className="w-32 h-auto" src="/rtu.jpg" alt="" />
        </div>
      </nav>
      <nav className="bg-[#FFB700] py-2">
        <ul className="flex items-center gap-4 justify-center w-full uppercase font-bold text-xl">
          <li
            className={`${
              location.pathname === "/" ? "border-b-4 border-[#ff7315]" : ""
            }`}
          >
            <Link
              to="/"
              className={`border-b-4 ${
                location == "/" ? "border-[#FFB700]" : "border-transparent"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="border-b-4 border-transparent">
            <button>Statutory Info</button>
          </li>
          <li className="border-b-4 border-transparent">
            <button>Admission</button>
          </li>
          <li className="border-b-4 border-transparent">
            <Link to="/departments">Departments</Link>
          </li>
          <li className="border-b-4 border-transparent">
            <button>R&D</button>
          </li>
          <li className="border-b-4 border-transparent">
            <button to="/departments">CDC</button>
          </li>
          <li className="border-b-4 border-transparent">
            <button>Placements</button>
          </li>
          <li
            className={`border-b-4 ${
              location.pathname === "/blog"
                ? " border-[#ff7315]"
                : "border-transparent"
            }`}
          >
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
