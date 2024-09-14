import { toast } from "react-toastify";

const getStoredDonateMoney = () => {
  const storedDonateMoney = localStorage.getItem("Donate-Money");
  if (storedDonateMoney) {
    return JSON.parse(storedDonateMoney);
  }
  return [];
};

const saveDonateMoney = (data) => {
  const storedDonateMoneys = getStoredDonateMoney();

  // Correct comparison: comparing id values
  const exists = storedDonateMoneys.find((item) => item.id === data.id);

  if (exists) {
    return toast.error("You have already saved this donation item.");
  }
  if (!exists) {
    storedDonateMoneys.push(data);
    localStorage.setItem("Donate-Money", JSON.stringify(storedDonateMoneys));
    toast.success("Donation saved successfully!");
  }
};
const deleteDonateMoney = (id) => {
  let storedDonateMoneys = getStoredDonateMoney();

  // Filter out the item with the given id
  storedDonateMoneys = storedDonateMoneys.filter((item) => item.id !== id);

  // Update the local storage with the new filtered array
  localStorage.setItem("Donate-Money", JSON.stringify(storedDonateMoneys));
};

export { getStoredDonateMoney, saveDonateMoney, deleteDonateMoney };
