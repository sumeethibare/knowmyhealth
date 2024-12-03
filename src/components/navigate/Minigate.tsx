import React from 'react';

interface MenuItem {
    label: string;
    href: string;
    isActive?: boolean;
    Icon?: React.ElementType;
}

const menuItems: MenuItem[] = [
    { label: 'Wellness', href: '/wellness', isActive: true },
    { label: 'Appointments', href: '/appointments' },
    { label: 'Consultation', href: '/consultation' },
];

const Minigate: React.FC = () => {
    return (
        <nav className="bg-gray-50 shadow">
            <ul className="flex py-3 pl-4 flex-row items-center font-medium space-x-4 rtl:space-x-reverse text-sm">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.Icon && <item.Icon className="h-5 w-5 mr-2 text-gray-700" />}
                        <a
                            href={item.href}
                            className={`text-gray-900 ${item.isActive ? 'font-semibold text-blue-800' : 'hover:text-blue-600'
                                }`}
                            aria-current={item.isActive ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Minigate;
