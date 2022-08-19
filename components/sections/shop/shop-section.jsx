import { useState } from "react";
import { arrShopTest } from "./constant";
import { ShopModal, ShopItem } from "components";
import { ShopSectionWrapper } from "./shop-section.style";
import "styles/global.style";

export const ShopSection = () => {
  const [isOpen, setOpen] = useState(false);
  const [chooseItem, setChooseItem] = useState({});

  return (
    <ShopSectionWrapper>
      {arrShopTest.map(({ title, id, cost, img, discription }) => (
        <ShopItem
          title={title}
          key={id}
          cost={cost}
          img={img}
          discription={discription}
          onClick={() => {
            setOpen(true);
            setChooseItem({ title, id, cost, img, discription });
          }}
        />
      ))}
      <ShopModal isOpen={isOpen} setOpen={setOpen} {...chooseItem} />
    </ShopSectionWrapper>
  );
};
