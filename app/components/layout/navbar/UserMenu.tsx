import { Avatar, Dropdown } from "flowbite-react";
import { FC } from "react";

const UserMenu: FC = () => (
    <Dropdown
        arrowIcon={false}
        inline
        label={
            <span>
            <span className="sr-only">User menu</span>
            <Avatar
                alt=""
                img="https://flowbite.com/application-ui/demo/images/users/neil-sims.png"
                rounded
                size="sm"
            />
            </span>
        }
        >
        <Dropdown.Header>
            <span className="block text-sm">Neil Sims</span>
            <span className="block truncate text-sm font-medium">
            neil.sims@flowbite.com
            </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
);

  export default UserMenu;