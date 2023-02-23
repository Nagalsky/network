import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { type FC, type ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const { data: sessionData } = useSession();

  return (
    <>
      {sessionData ? (
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-grow">{children}</main>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default RootLayout;
