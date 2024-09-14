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

      <div className=" grid pt-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
        {allData?.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
