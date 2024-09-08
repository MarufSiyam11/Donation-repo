import { useEffect, useState } from "react";
import Bannar from "../components/Bannar";
import Card from "./Card";

const Home = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const feaching = async () => {
      const res = await fetch("/public/data.json");
      const data = await res.json();

      setAllData(data);
      console.log(allData);
    };
    feaching();
  }, []);
  return (
    <div>
      <Bannar />

      <div className=" grid pt-28 grid-cols- md:grid-cols-3 gap-5 ">
        {allData?.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
