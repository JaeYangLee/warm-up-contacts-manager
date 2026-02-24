import { useState } from "react";

function NavBar({ contact, onAdd }) {
  const [search, setSearch] = useState("");

  const handleReset = () => {
    setSearch("");
  };

  return (
    <>
      <div className="fixed top-0 flex flex-row items-center justify-center w-screen gap-2 px-4 bg-gray-500 h-14">
        <section>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="px-2 border rounded shadow-[2px_2px_0px_0px]"
          />
        </section>
        <section className="flex flex-row items-center justify-center gap-2">
          <button
            onClick={onAdd}
            className="px-2 border rounded-full shadow-[2px_2px_0px_0px]"
          >
            +
          </button>
          <button
            onClick={handleReset}
            className="px-2 border rounded shadow-[2px_2px_0px_0px]"
          >
            Clear
          </button>
        </section>
      </div>
    </>
  );
}

export default NavBar;
