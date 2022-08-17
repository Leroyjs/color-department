import { ShopSectionWrapper } from "./shop-section.style";
import { ShopItem } from "components";
import "styles/global.style";
import { arrShopTest } from "./constant";

export const ShopSection = (props) => {
  let shopList = arrShopTest.map(({ title, id, cost, img }) => (
    <ShopItem title={title} key={id} cost={cost} img={img} />
  ));

  return <ShopSectionWrapper>{shopList}</ShopSectionWrapper>;
};
