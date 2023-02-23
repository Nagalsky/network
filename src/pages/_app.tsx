import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "../utils/api";

import RootLayout from "@/layouts/RootLayout";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider session={session}>
        {pathname === "/auth/signin" ? (
          <Component {...pageProps} />
        ) : (
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        )}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
