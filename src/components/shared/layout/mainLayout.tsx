import React, { PropsWithChildren } from "react";
import SideNavigation, { SIDEBAR_WIDTH } from "./sideNavigation";

const MainLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="flex min-h-screen p-6 bg-[#f5f5f5] w-full relative">
      <SideNavigation />
      <div
        className="flex-1 flex flex-col pl-6 w-full"
        // style={{ paddingLeft: "324px" }}
      >
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
