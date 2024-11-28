import { Drawer } from "antd";
import React from "react";

interface IMenuItemsProps {
  showMenuItems: boolean;
  setShowMenuItems: (showMenuItems: boolean) => void;
}

function MenuItems({ showMenuItems, setShowMenuItems }: IMenuItemsProps) {
  return (
    <Drawer open={showMenuItems} onClose={() => setShowMenuItems(false)}>
      MenuItems
    </Drawer>
  );
}

export default MenuItems;
