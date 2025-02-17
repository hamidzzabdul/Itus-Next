import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-[100vh] flex">
      {/* left side */}
      <div className="w-[14%] md:w-[8%] lg:[50%] xl:[50%] p-4 h-[100vh] overflow-scroll  no-scrollbar border-red-500 border-2"></div>
      {/* right */}
      <div className="w-[84%] h-screen md:[92%] lg:w-[80%]  bg-[#F7F8FA] overflow-scroll flex flex-col gap-5 border-red-500 border-2">
        {/* <Navbar /> */}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
