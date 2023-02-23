import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Fragment, type FC } from "react";

const HeaderUser: FC = () => {
  const { data } = useSession();

  const matches = data?.user?.name?.match(/\b(\w)/g);
  const avatarName = matches ? matches.join("") : "";

  return (
    <Menu as="div" className="relative inline-flex items-start text-left">
      <Menu.Button className="inline-flex items-center gap-3 self-center text-sm font-medium text-black dark:text-white">
        {data?.user?.image ? (
          <Image
            src={data?.user?.image}
            width={32}
            height={32}
            alt="Avatar"
            className="h-8 w-8 rounded-full"
            priority
          />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-center font-semibold uppercase text-white dark:bg-white dark:text-black">
            {avatarName}
          </div>
        )}

        <p className="hidden font-semibold md:block">{data?.user?.name}</p>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-full right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
          <div className="p-1">
            <Menu.Item>
              <button
                className="flex w-full items-center justify-start gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => void signOut()}
              >
                Logout
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeaderUser;
