import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";

const navbarLink = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Users",
    path: "/users",
  },
];

interface IHeaderNavbarProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (value: boolean) => void;
}

const HeaderNavbar: FC<IHeaderNavbarProps> = ({
  isMenuOpened,
  setIsMenuOpened,
}) => {
  const router = useRouter();

  return (
    <nav
      className={`${
        isMenuOpened ? "flex w-full" : "hidden"
      } grow flex-col gap-4 py-6 lg:flex lg:w-auto lg:flex-row lg:justify-center lg:gap-8 lg:self-center lg:py-0`}
    >
      {navbarLink.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            onClick={() => setIsMenuOpened(false)}
            className={`${
              router.pathname === link.path
                ? "text-blue-500"
                : "text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            } text-sm font-medium`}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderNavbar;
