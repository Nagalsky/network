import { IconMenu } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import { useState, type FC } from "react";
import HeaderNavbar from "./HeaderNavbar";
import HeaderUser from "./HeaderUser";
import ThemeToggle from "./ThemeToggle";

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white py-3 dark:border-gray-600 dark:bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 lg:gap-8">
        <Link href="/" className="relative flex items-center gap-3">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="Logo"
            className="h-8 w-8"
            priority
          />
          <span className="hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:inline-block">
            Network
          </span>
        </Link>
        <div className="flex items-center gap-6 md:order-2">
          <ThemeToggle />

          <button
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            onClick={() => setIsMenuOpened((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <IconMenu className="h-6 w-6" />
          </button>

          <HeaderUser />
        </div>

        <HeaderNavbar
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
    </header>
  );
};

export default Header;
