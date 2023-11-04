import { Label, Navbar as FlowbiteNavbar, TextInput } from "flowbite-react";
import { HiMenuAlt1, HiSearch, HiX } from "react-icons/hi";
import UserMenu from "./UserMenu";
import Notifications from "./Notifications";
import { useSidebarContext } from "@/lib/context/SidebarContext";
import isSmallScreen from "@/lib/helpers/isSmallScreen";
import Logo from "../Logo";

const Navbar = () => {
  const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
    useSidebarContext();

  return (
    <FlowbiteNavbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isPageWithSidebar && (
              <button
                onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                className="mr-3 cursor-pointer rounded p-2 text-gray-400 hover:bg-gray-700 hover:text-white lg:inline"
              >
                <span className="sr-only">Toggle sidebar</span>
                {isOpenOnSmallScreens && isSmallScreen() ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt1 className="h-6 w-6" />
                )}
              </button>
            )}
            <FlowbiteNavbar.Brand href="/">
              <Logo type="transparent_white" />
            </FlowbiteNavbar.Brand>
            <form className="ml-16 hidden md:block">
              <Label htmlFor="search" className="sr-only">
                Szukaj
              </Label>
              <TextInput
                icon={HiSearch}
                id="search"
                name="search"
                placeholder="Szukaj"
                required
                size={32}
                type="search"
              />
            </form>
          </div>
          <div className="flex items-center lg:gap-3">
            <div className="flex items-center">
              <button
                onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                className="cursor-pointer rounded p-2 focus:ring-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:ring-gray-700 lg:hidden"
              >
                <span className="sr-only">Szukaj</span>
                <HiSearch className="h-6 w-6" />
              </button>
              <Notifications />
            </div>
            <div className="block">
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </FlowbiteNavbar>
  );
};

export default Navbar;
