"use client";
import { Avatar, Dropdown } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";

const UserMenu = () => {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span>
          <span className="sr-only">User menu</span>
          <Avatar
            alt=""
            img={
              session?.user?.image ||
              "https://flowbite.com/application-ui/demo/images/users/neil-sims.png"
            }
            rounded
            size="sm"
          />
        </span>
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">{session?.user.name}</span>
        <span className="block truncate text-sm font-medium">
          {session?.user.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => signOut({ callbackUrl: "/" })}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};

export default UserMenu;
