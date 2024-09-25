import bannerImg from "../assets/img/Rectangle 4281.png";

const Bannar = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6)), url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="pt-44 bg-slate-50 "
      >
        <h1 className="text-4xl text-center font-bold">
          I Grow By Helping People In Need
        </h1>
        <div className="flex justify-center pt-10">
          <label htmlFor=""></label>
          <input
            className="p-2 rounded w-96 border-2  dark:bg-gray-900  text-purple-900 "
            placeholder="search here ...."
            name=""
            id=""
            type="text"
          />
          <button
            className="bg-red-500 rounded w-32 font-bold text-white hover:bg-orange-900"
            value="Search"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
