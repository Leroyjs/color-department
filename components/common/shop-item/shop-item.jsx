import { Text } from "components";
import { ButtonShop } from "components";
import { Caption } from "components";
import { H3 } from "components";
import { observer } from "mobx-react-lite";
import {
  ShopItemWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
  TextContainer,
  TextStyled,
} from "./shop-item.style";

export const ShopItem = observer(({ cost, image, text }) => {
  return (
    <ShopItemWrapper>
      <TextContainer>
        <Caption>{text}</Caption>
        <H3>{cost}$</H3>
      </TextContainer>
      <ProductImage>{image}</ProductImage>
      <ButtonShop></ButtonShop>
    </ShopItemWrapper>
  );
});
