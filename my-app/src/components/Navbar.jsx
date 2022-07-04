import ContactSearch from "./ContactSearch";

const Navbar = () => {
  return (
    <div className="w-full h-20 py-4 flex border border-solid shadow-lg">
      <div className="flex justify-center items-center mr-10">
        <span className="flex p-4 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <h3>وب اپلیکیشن مدیریت </h3>
          <h3 className="text-purple-700 pr-1 ">مخاطبین</h3>
        </span>
      </div>
      <div className="mx-auto py-1 w-80">
        <ContactSearch />
      </div>
    </div>
  );
};

export default Navbar;
