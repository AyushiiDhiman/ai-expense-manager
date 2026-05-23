import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Expenses",
      path: "/expenses",
    },
    {
      name: "Groups",
      path: "/groups",
    },
    {
      name: "Reports",
      path: "/reports",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="w-64 h-screen bg-[#111827] border-r border-gray-800 p-6">
      
      <h1 className="text-white text-2xl font-bold mb-10">
        ExpenseAI
      </h1>

      <div className="space-y-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;