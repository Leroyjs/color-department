import { ButtonShop } from "components";
import {
  ShopItemWrapper,
  ProductImage,
  TextContainer,
  Title,
  Cost,
  CostPhone,
} from "./shop-item.style";

export const ShopItem = ({ cost, img, title, ...props }) => {
  return (
    <ShopItemWrapper {...props}>
      <TextContainer>
        <Title>{title}</Title>
        <Cost>{cost}$</Cost>
      </TextContainer>
      <ProductImage src={img}></ProductImage>
      <CostPhone>{cost}$</CostPhone>
      <ButtonShop />
    </ShopItemWrapper>
  );
};
