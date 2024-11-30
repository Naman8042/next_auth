"use client";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import Checkbox from '@mui/material/Checkbox';


type CheckboxState = {
  [key: string]: boolean;
};



const Shopleft = () => {
  const [checkedItems, setCheckedItems] = useState<CheckboxState>({});
  const [checkedStar,setCheckedStar] = useState<number>(3)
  const [value, setValue] = useState<number>(50);

  const handlePrice = (newValue: number) => {
    setValue(newValue);
  };
  let star:number= 1;
  const checkboxes: { [key: string]: string } = {
    "Fresh Fruit": "Fresh Fruit",
    Vegetables: "Vegetables",
    Cooking: "Cooking",
    Snacks: "Snacks",
    Beverages: "Beverages",
    Beauty: "Beauty",
    Bakery: "Bakery",
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <div className="w-[20%] px-10">
      <h1 className="mb-3 text-lg">All Categories</h1>

      <div className="pb-4 border-b-2">
        {Object.keys(checkboxes).map((checkbox) => (
          <div key={checkbox} className="flex gap-1">
            <input
              type="checkbox"
              name={checkbox}
              value={checkboxes[checkbox]}
              checked={checkedItems[checkbox] || false}
              onChange={handleChange}
              className="checked:border-indigo-500 "
            />
            <label className="text-base">{checkboxes[checkbox]}</label>
          </div>
        ))}
      </div>
      <h1 className="my-3 text-lg">Price</h1>
      <div className="border-b-2 pb-4">
        <input
          type="range"
          min={0}
          max={1000}
          value={value}
          onChange={(e) => {
            handlePrice(Number(e.target.value));
          }}
        />
        <h5 className="text-sm">Price {value}</h5>
      </div>
      <h1 className="my-3 text-lg">Rating</h1>
      <div>
        {/* <input type="checkbox"/> */}
        <Checkbox size="small"/>
      </div>
      
    </div>
  );
};

export default Shopleft;
