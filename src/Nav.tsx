import { NavLink } from "react-router";

const toggleHidden = () => {
  const menuItems = document.getElementById("nav-toggle");

  if (menuItems?.classList.contains("hidden")) {
    menuItems.classList.remove("hidden");
    menuItems?.classList.remove("animate-[var(--animate-slide-out)]");

    requestAnimationFrame(() => {
      menuItems.classList.add("animate-[var(--animate-slide-in)]");
    });
  } else {
    menuItems?.classList.remove("animate-[var(--animate-slide-in)]");
    requestAnimationFrame(() => {
      menuItems?.classList.add("animate-[var(--animate-slide-out)]");
    });
    setTimeout(() => {
      menuItems?.classList.add("hidden");
    }, 190); //made the timeout slightly less than animation to avoid menu flashing after animation finishes
  }
};

function Nav() {
  return (
    <div className="fixed w-full">
      <div className="fixed w-[46px] h-[43px] md:h-[65px] sm:shadow-md sm:ml-3 bg-[#ffffff]">
        <NavLink to="/">
          <h1 className="text-center text-4xl md:text-5xl font-(family-name:--font-primary)">
            <span className="text-[#44457e]">L</span>F
          </h1>
        </NavLink>
      </div>
      <div className="shadow-lg h-[43px] w-full bg-[#6290C3]">
        <div className="flex justify-end h-full md:hidden">
          <button onClick={() => toggleHidden()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M222.16,153.26a8,8,0,0,1-1,11.25c-17.36,14.38-32.86,19.49-47,19.49-18.58,0-34.82-8.81-49.93-17-25.35-13.75-47.24-25.63-79.07.74a8,8,0,1,1-10.22-12.3c40.17-33.27,70.32-16.92,96.93-2.48,25.35,13.75,47.24,25.62,79.07-.75A8,8,0,0,1,222.16,153.26Zm-177-49.46c31.83-26.37,53.72-14.5,79.07-.75,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.49a8,8,0,1,0-10.22-12.3c-31.83,26.37-53.72,14.49-79.07.74-26.61-14.43-56.76-30.79-96.93,2.48A8,8,0,0,0,45.11,103.8Z"></path>
            </svg>
          </button>
        </div>
        <div
          id="nav-toggle"
          className="hidden md:inline bg-[rgba(98,144,195,0.62)]"
        >
          <ul className="flex items-start justify-center flex-col text-2xl font-(family-name:--font-primary) md:font-(family-name:--font-secondary) md:text-lg md:flex-row md:items-center md:h-full">
            <li className="mt-5 ms-3 pb-3 md:p-0 md:mx-3 md:mt-0">
              <NavLink to="/home">
                <span className="text-[#44457e] md:text-black">H</span>ome
              </NavLink>
            </li>
            <li className="mx-3 pb-3 md:p-0">
              <NavLink to="/order">
                <span className="text-[#44457e] md:text-black">O</span>rder
              </NavLink>
            </li>
            <li className="mx-3 pb-3 md:p-0">
              <span className="text-[#44457e] md:text-black">I</span>nvoices
            </li>
            <li className="mx-3 pb-3 md:p-0">
              <span className="text-[#44457e] md:text-black">A</span>ccount
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
