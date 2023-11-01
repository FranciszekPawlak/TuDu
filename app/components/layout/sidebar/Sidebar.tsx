'use client'
import classNames from "classnames";
import { Sidebar as FlowbiteSidebar, TextInput, Tooltip } from "flowbite-react";
import type { FC } from "react";
import {
  HiChartPie,
  HiChartSquareBar,
  HiClipboard,
  HiCog,
  HiCollection,
  HiInformationCircle,
  HiLockClosed,
  HiSearch,
} from "react-icons/hi";
import { useSidebarContext } from "@/lib/context/SidebarContext";

const Sidebar: FC = function () {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
    useSidebarContext();

  return (
    <div
      className={classNames("lg:!block", {
        hidden: !isSidebarOpenOnSmallScreens,
      })}
    >
      <FlowbiteSidebar
        aria-label="Sidebar with multi-level dropdown example"
        collapsed={false}
      >
        <div className="flex h-full flex-col justify-between py-2">
          <div>
            <form className="pb-3 md:hidden">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                size={32}
              />
            </form>
            <FlowbiteSidebar.Items>
              <FlowbiteSidebar.ItemGroup>
                <FlowbiteSidebar.Item
                  href="/"
                  icon={HiChartPie}
                >
                  Dashboard
                </FlowbiteSidebar.Item>
                
                <FlowbiteSidebar.Collapse icon={HiChartSquareBar} label="Pages">
                  <FlowbiteSidebar.Item href="/pages/pricing">Pricing</FlowbiteSidebar.Item>
                  <FlowbiteSidebar.Item href="/pages/maintenance">
                    Maintenace
                  </FlowbiteSidebar.Item>
                  <FlowbiteSidebar.Item href="/pages/404">404 not found</FlowbiteSidebar.Item>
                  <FlowbiteSidebar.Item href="/pages/500">
                    500 server error
                  </FlowbiteSidebar.Item>
                </FlowbiteSidebar.Collapse>
                <FlowbiteSidebar.Collapse icon={HiLockClosed} label="Authentication">
                  <FlowbiteSidebar.Item href="/authentication/sign-in">
                    Sign in
                  </FlowbiteSidebar.Item>
                  <FlowbiteSidebar.Item href="/authentication/sign-up">
                    Sign up
                  </FlowbiteSidebar.Item>
                  <FlowbiteSidebar.Item href="/authentication/forgot-password">
                    Forgot password
                  </FlowbiteSidebar.Item>
                  <FlowbiteSidebar.Item href="/authentication/reset-password">
                    Reset password
                  </FlowbiteSidebar.Item>
                  <FlowbiteSidebar.Item href="/authentication/profile-lock">
                    Profile lock
                  </FlowbiteSidebar.Item>
                </FlowbiteSidebar.Collapse>
              </FlowbiteSidebar.ItemGroup>
              <FlowbiteSidebar.ItemGroup>
                <FlowbiteSidebar.Item
                  href="https://github.com/themesberg/flowbite-react/"
                  icon={HiClipboard}
                >
                  Docs
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item
                  href="https://flowbite-react.com/"
                  icon={HiCollection}
                >
                  Components
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item
                  href="https://github.com/themesberg/flowbite-react/issues"
                  icon={HiInformationCircle}
                >
                  Help
                </FlowbiteSidebar.Item>
              </FlowbiteSidebar.ItemGroup>
            </FlowbiteSidebar.Items>
          </div>
          <BottomMenu />
        </div>
      </FlowbiteSidebar>
    </div>
  );
};

const BottomMenu: FC = function () {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <div>
        <Tooltip content="Ustawienia">
          <a
            href="/users/settings"
            className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Ustawienia</span>
            <HiCog className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
