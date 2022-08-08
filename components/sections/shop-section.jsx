import { ShopSectionWrapper } from "./shop-section.style";
import { ShopItem } from "components";
import "styles/global.style";
import { ModalShop } from "components";

export const ShopSection = (props) => {
  const arrShopTest = [
    {
      title: "The Graham Greene Film Reader Applause Books",
      cost: "12,34",
      id: 1,
    },
    {
      title: "e Film Reader Applause Books",
      cost: "8888888",
      id: 2,
    },
    {
      title: "The Graham ",
      cost: "1554555",
      id: 3,
    },
    {
      title: "Thавпавакпквуп",
      cost: "1333333333",
      id: 4,
    }, 
     {
      title: "ne Film Reader Applaus",
      cost: "666666",
      id: 5,

    },
     {
      title: "The Graham Greene Fil",
      cost: "11222222",
      id: 6,

    },


  ];

  let shopList = arrShopTest.map((item) => (
    <ShopItem title={item.title} key={item.id} cost={item.cost} img={item.img} />
  ));
  return ( <>
	  <ShopSectionWrapper>
		    {shopList}
    </ShopSectionWrapper>

</>
  );
};
