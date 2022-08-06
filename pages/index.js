import { useState } from "react";
import {DropDown, TextArea} from "components";
import "styles/global.style";
import { ShopItem } from "components";
import { ModalShop } from "components";

const options = [
  {
    label: "color grading",
    value: 1,
  },
  {
    label: "VFX-design",
    value: 2,
  },
  {
    label: "Dailies",
    value: 3,
  },
];

const Home = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <main style={{ height: "100vh", overflow: "visible" }}>
        <DropDown
          title="Service"
          onChange={(option) => setValue(option)}
          options={options}
          value={value}
        />

        <TextArea
          title="About your work"
          onChange={(val) => {
            console.log(val);
          }}
        />
        <ShopItem
          cost={"12,34"}
          text={"The Graham Greene Film Reader Applause Books"}
        />
        <ModalShop/>
      </main>
    </>
  );
};

export default Home;
