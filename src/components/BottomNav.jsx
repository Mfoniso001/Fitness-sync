import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();

  const tabs = [
    { name: "Home", path: "/dashboard" },
    { name: "Progress", path: "/progress" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="flex justify-around bg-white py-3 shadow-inner">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={`text-sm font-medium ${
            pathname === tab.path ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
