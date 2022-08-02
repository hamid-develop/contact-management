const ContactSearch = () => {
  return (
    <div className="flex relative ">
      <input
        className="shadow text-md appearance-none focus:border-blue-400 transition ease-in-out delay-400 border-2 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="جستجوی مخاطبین"
      />
      <button className="bg-purple-700 absolute left-0  text-white w-10 h-full flex justify-center items-center rounded">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ContactSearch;
