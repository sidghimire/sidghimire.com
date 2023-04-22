import React, { ReactNode } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
    <aside className="bg-gray-800 text-white w-1/5 md:w-64">
      <SideNav/>
    </aside>

    <main className="flex-1">
      <div className="bg-gray-800 text-black px-4 py-2 md:hidden">
        <Header/>
      </div>

      <div className="p-4 md:p-8">
        {children}
      </div>
    </main>
  </div>
  );
};

export default Layout;
