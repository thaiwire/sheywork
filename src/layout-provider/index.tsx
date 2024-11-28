"use client";

import { IUser } from "@/interfaces";
import { saveCurrentUserToMongoDB } from "@/server-actions/users";
import { Alert, Button } from "antd";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import MenuItems from "./menu-items";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [currentUserData, setCurrentUserData] = React.useState<IUser | null>(
    null
  );
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showMenuItems, setShowMenuItems] = React.useState<boolean>(false);

  const pathname = usePathname();
  if (!pathname.includes("/account")) {
    return <div>{children}</div>;
  }

  const getCurrentUserData = async () => {
    try {
      setLoading(true);
      //   const response = await saveCurrentUserToMongoDB();
      //   if (response.success) {
      //     setCurrentUserData(response.data);
      //   }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUserData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }
  if (error) {
    return <Alert message={error} type="error" />;
  }
  return (
    <div>
      <div className="p-5 bg-primary flex justify-between items-center">
        <img src="/logo2.png" alt="logo2" className="w-15 h-8" />
        <div className="flex gap-5 items-center ">
          <span className="text-sm font-semibold text-white uppercase">
            Jaruwat Namvong
          </span>
          <Button
            size="small"
            ghost
            icon={<Menu size={14} onClick={() => setShowMenuItems(!true)} />}
          ></Button>
        </div>
      </div>
      {children}
      {showMenuItems && (
        <MenuItems
          showMenuItems={showMenuItems}
          setShowMenuItems={setShowMenuItems}
        />
      )}
    </div>
  );
}

export default LayoutProvider;
