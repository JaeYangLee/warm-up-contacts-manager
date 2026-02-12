function NavBar() {
  return (
    <>
      <div className="w-screen h-14 fixed top-0 bg-gray-500 flex flex-row items-center justify-center">
        <section className="flex flex-row items-center justify-center gap-2">
          <button className="px-2 border rounded shadow-[2px_2px_0px_0px]">
            Add
          </button>
          <button className="px-2 border rounded shadow-[2px_2px_0px_0px]">
            Clear
          </button>
        </section>
      </div>
    </>
  );
}

export default NavBar;
