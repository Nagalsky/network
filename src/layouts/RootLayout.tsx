import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { type FC, type ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const { data: session } = useSession();
  return (
    <div className="flex min-h-screen flex-col">
      {session ? <Header /> : null}

      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default RootLayout;
