import { GrClose } from "react-icons/gr";

const MobileMenu = ({ handleCloseMenu }) => {
  return (
    <>
      <div className="lg:hidden w-full h-full fixed top-0 left-0 bg-yellow-300 hover:cursor-crosshair z-30"></div>
      <div className="lg:hidden absolute h-screen w-full sm:w-1/3 md:w-2/3 lg:w-1/3 bg-gray-900  top-0 right-0 z-40 hover:cursor-default opacity-100">
        <div className="h-full w-full flex flex-col">
          <div className="h-[10vh] px-8 py-2 flex justify-end items-center">
            <GrClose
              className=" text-3xl hover:cursor-pointer bg-sky-500 rounded-full p-1"
              onClick={handleCloseMenu}
            />
          </div>
          <div className="uppercase text-gray-200 flex flex-col text-xl justify-center">
            <a
              href="#"
              className="hover:bg-red-900 border-red-900 w-2/3 mobile-nav-link"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-blue-900 border-blue-900 w-2/5 mobile-nav-link"
            >
              about
            </a>
            <a
              href="#"
              className="hover:bg-green-900 border-green-900 w-3/4 mobile-nav-link"
            >
              skills
            </a>
            <a
              href="#"
              className="hover:bg-yellow-900 border-yellow-900 w-2/4 mobile-nav-link"
            >
              projects
            </a>
            <a
              href="#"
              className="hover:bg-sky-700 border-sky-700 w-3/5 mobile-nav-link"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
