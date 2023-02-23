import Header from "@/components/Header";
import { type FC, type ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default RootLayout;
