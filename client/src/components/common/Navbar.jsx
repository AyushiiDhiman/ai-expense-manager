function Navbar() {
  return (
    <div className="h-20 border-b border-gray-800 bg-[#0B0F19] flex items-center justify-between px-8">
      <div>
        <h2 className="text-white text-2xl font-semibold">
          Dashboard
        </h2>

        <p className="text-gray-400 text-sm">
          Welcome back to your finance dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#111827] border border-gray-700 rounded-lg px-4 py-2 text-white outline-none"
        />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </div>
  );
}

export default Navbar;