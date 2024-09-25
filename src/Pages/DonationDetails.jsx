/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonateMoney } from "../LocalStorage/LocalStroage";

const DonationDetails = () => {
  const { id } = useParams();

  const [allData, setAllData] = useState([]);
  const [detailsData, setDetailsData] = useState(null); // Initialize as null
  const notify = (data) => {
    saveDonateMoney(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/public/data.json");
      const data = await res.json();
      setAllData(data); // Update state with fetched data

      // Find the specific item directly from the fetched data
      const details = data.find((item) => item.id === Number(id));
      // console.log(details);
      setDetailsData(details); // Update detailsData with the found item
    };

    fetchData();
  }, [id]);

  return (
    <div className="pt-32  ">
      <div className="">
        <div className="relative flex justify-center mx-auto overflow-hidden">
          <img
            className="md:w-[850px] h-[400px]  md:h-[600px]"
            src={detailsData?.image}
            alt=""
          />
          <div className="absolute left-0 bottom-0  h-20 p-2 bg-gradient-to-r from-[#0B0B0B]    w-[850px]">
            <button
              onClick={() => notify(detailsData)}
              style={{ backgroundColor: detailsData?.text_color }}
              className="p-2 rounded m-3"
            >
              Donate {detailsData?.price}
            </button>
          </div>
        </div>
        <div className="md:mr-40 md:ml-40">
          <h2 className="text-3xl pt-10 pb-5 font-bold">
            {detailsData?.category}
          </h2>
          <p>{detailsData?.description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
