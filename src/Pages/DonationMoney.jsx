import { useEffect, useState } from "react";
import { deleteDonateMoney } from "../LocalStorage/LocalStroage";
import { toast } from "react-toastify";

const DonationMoney = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const getStoredDonateMoney = () => {
      const storedDonateMoney = localStorage.getItem("Donate-Money");
      if (storedDonateMoney) {
        const result = JSON.parse(storedDonateMoney);
        setData(result);
      }
    };
    getStoredDonateMoney();
  }, []);
  const handleDelete = (id) => {
    deleteDonateMoney(id); // Delete the item by id
    setData(data.filter((item) => item.id !== id)); // Update state
    toast.success("Donation item removed.");
  };
  return (
    <div className="md:grid grid-cols-2 gap-4 pt-20 m-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="md:flex col-span-2 md:col-span-1 bg-white shadow-lg rounded-lg"
        >
          <div>
            <img
              className="w-full h-full object-cover"
              src={item?.image}
              alt={item.title}
            />
          </div>
          <div
            style={{ background: item.category_background_color }}
            className="p-4 flex-1"
          >
            <div className="flex justify-between">
              <div>
                <h2
                  className="text-xl font-medium mx-2 mt-4 p-2 w-28 rounded"
                  style={{
                    backgroundColor: item.card_color,
                    color: item.text_color,
                  }}
                >
                  {item.category}
                </h2>
                <h2 className="text-2xl font-bold p-2">{item.title}</h2>
                <p
                  style={{
                    color: item?.text_color,
                  }}
                  className="font-medium px-2"
                >
                  {item?.price}
                </p>
                <button
                  style={{ backgroundColor: item?.text_color }}
                  className="p-2 rounded m-3 text-white"
                >
                  View Details
                </button>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="rounded font-thin  mt-20 bg-amber-400 h-10 w-20 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonationMoney;
