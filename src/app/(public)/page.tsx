"use client";
import { Button, Drawer } from "antd";
import React from "react";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

function HomePage() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const searchParams = useSearchParams();

  const formType =
    searchParams.get("formType") == "signup" ? "signup" : "signin";

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="pt-5 px-10 ">
      <div className="flex justify-between items-center">
        <img src="./logo.png" alt="" className="w-20 h-20" />
        <div className="flex gap-5">
          <div className="flex gap-5 items-center">
            <div className="flex gap-5">
              {menuItems.map((item) => (
                <a
                  href={item.path}
                  className="text-sm font-hold text-gray-500"
                  key={item.title}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <Button type="primary" onClick={() => setShowDrawer(true)}>
              Login
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 min-h-[75vh] items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-primary">Shey WORK APP</h1>
          <p className="text-sm text-gray-500">Shey work for twp team</p>
        </div>
        <div className="flex justify-center">
          <img src="./logo.png" alt="" className="w-40 h-40" />
        </div>
      </div>
      {showDrawer && (
        <Drawer
          width={500}
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
        >
          <div className="flex justify-center">
            {formType === "signin" ? (
              <SignIn
                routing="hash"
                signUpUrl="/?formType=signup"
                fallbackRedirectUrl="/account/projects"
              />
            ) : (
              <SignUp
                routing="hash"
                signInUrl="/?formType=signin"
                fallbackRedirectUrl="/account/projects"
              />
            )}
            {/* <SignUp routing="hash" /> */}
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default HomePage;
