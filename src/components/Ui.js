import { useState } from "react";
import ScreenSvg from "./ScreenSvg"
const selectItems = [
  {
    id: "Standard",
    value: "Standard",
  },
  {
    id: "Premium",
    value: "Premium",
  },
];
const Ui = () => {
  const [selectedSeatType, setSelectedSeatType] = useState(selectItems[0].value)
  
  return (
    <div className="p-2 w-full h-full flex flex-col">
      <h1 className="text-center text-xl font-bold italic">BOOK MY MOVIE</h1>
      <div className="border border-black w-[30%] flex justify-center rounded-md p-2">
        <label htmlFor="selectElement">Ticket Type: </label>
        <select id="selectElement" className="outline-none rounded-md ml-6" onChange={(e) => setSelectedSeatType(e.target.value)} value={selectedSeatType}>
          {selectItems.map((each) => (
            <option value={each.id} key={each.id} className="bg-transparent cursor-pointer">
              {each.value}
            </option>
          ))}
        </select>
      </div>
      <div>
          <ScreenSvg/>
      </div>
    </div>
  );
};

export default Ui;
