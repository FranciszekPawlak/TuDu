import { useSidebarContext } from '@/lib/context/SidebarContext';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

const Main:FC<PropsWithChildren> = ({ children }) => {
  const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext();

  return (
    <main
        className={classNames(
        "overflow-y-auto relative w-full h-full bg-gray-900",
        isSidebarOpen ? "lg:ml-16" : "lg:ml-64"
        )}
    >
        {children}
    </main>
  )
};

export default Main;