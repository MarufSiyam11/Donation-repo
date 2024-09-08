const Bannar = () => {
  return (
    <div className="pt-44">
      <h1 className="text-4xl text-center font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="flex justify-center pt-10">
        <label htmlFor=""></label>
        <input
          className="p-2 rounded w-96 border-2  dark:bg-gray-900  text-purple-900 "
          type="search"
          placeholder="search here ...."
          name=""
          id=""
        />
        <button
          className="bg-red-500 rounded w-32 font-bold text-white hover:bg-orange-900"
          value="Search"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Bannar;
