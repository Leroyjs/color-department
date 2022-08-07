import { ShopSectionWrapper } from "./shop-section.style";
import { ShopItem } from "components";
import "styles/global.style";
import { ModalShop } from "components";

export const ShopSection = (props) => {
  const arrShopTest = [
    {
      name: "The Graham Greene Film Reader Applause Books",
      cost: "12,34",
    },
    {
      name: "The Grahr Applause Books",
      cost: "12,3666",
    },
    {
      name: "The Graham Greene Film",
      cost: "12,34",
    },
    {
      name: "ilm Reader Applause Books",
      cost: "1",
    },
    {
      name: "ilm Reader Applause Books",
      cost: "1",
    },
    {
      name: "ilm Reader Applause Books",
      cost: "1",
    },
    {
      name: "ilm Reader Applause Books",
      cost: "1",
    },
    {
      name: "ilm Reader Applause Books",
      cost: "1",
    },
    {
      name: "ilm Reader Applause Books",
      cost: "1",
    },
    {
      name: "ilm Reader Applause Books",
      cost: "1",
    },
  ];

  let shopList = arrShopTest.map((item) => (
    <ShopItem name={item.name} key={item.id} cost={item.cost} img={item.img} />
  ));
  return ( <>
	  <ShopSectionWrapper>
		    {shopList}
    </ShopSectionWrapper>
    <ModalShop></ModalShop>
</>
  );
};
