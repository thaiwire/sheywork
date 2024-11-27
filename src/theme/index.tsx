import React from "react";
import { ConfigProvider } from "antd";

function Theme({ children }: { children: React.ReactNode }) {
  const primaryColor = "#531785";
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
          controlOutline: "none",
          borderRadius: 8,
        },
        components: {
          Input: {
            controlHeight: 45,
            borderRadius: 8,
          },
          Button: {
            controlHeight: 40,
            borderRadius: 0,
          },
          Select: {
            controlHeight: 45,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default Theme;
