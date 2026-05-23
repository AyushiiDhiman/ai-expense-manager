import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex bg-[#0B0F19] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;