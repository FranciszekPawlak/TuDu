import { Dropdown } from "flowbite-react";
import { FC } from "react";
import { HiBell, HiEye } from "react-icons/hi";

interface NotificationItemProps {
    time: Date;
    content: string;
    href: string;
}

const NotificationItem: FC<NotificationItemProps> = ({ time, content, href }) => (
    <a
        href={href}
        className="flex border-b py-3 px-4 border-gray-600 hover:bg-gray-600"
    >
        <div className="w-full pl-3">
            <div className="mb-1.5 text-sm font-semibold text-white">
                {content}
            </div>

            <div className="text-xs font-medium text-primary-400">
                {time.toISOString()}
            </div>
        </div>
    </a>
)

const Notifications: FC = () => (
    <Dropdown
        arrowIcon={false}
        inline
        label={
            <span className="rounded-lg p-2 hover:bg-gray-700">
                <span className="sr-only">Powiadomienia</span>
                <HiBell className="text-2xl text-gray-400 hover:text-white" />
            </span>
        }
    >
        <div className="max-w-[24rem]">
            <div className="block rounded-t-xl py-2 px-4 text-center text-base font-medium bg-gray-700 text-gray-400">
                Powiadomienia
            </div>

            <div>
                {[...Array(3)].map((_, i) => (
                    <NotificationItem 
                        key={i} 
                        time={new Date()} 
                        content="Notification content" 
                        href="#"
                    />
                ))}
            </div>
            <a
                href="#"
                className="block rounded-b-xl py-2 text-center text-base font-normal bg-gray-700 text-white hover:underline"
            >
                <div className="inline-flex items-center gap-x-2">
                    <HiEye className="h-6 w-6" />
                    <span>Zobacz wszystkie</span>
                </div>
            </a>
        </div>
    </Dropdown>
);

export default Notifications;