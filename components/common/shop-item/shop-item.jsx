import { ButtonShop, Text, ShopModal, Caption, H3 } from "components";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import {
  ShopItemWrapper,
  ProductImage,
  TextContainer,
} from "./shop-item.style";

export const ShopItem = observer(({ cost, img, title, isOpen }) => {
  const [open, setOpen] = useState(false);
  function handlerClose(value) {
    setOpen(value);
  }

  return (
    <>
      <ShopItemWrapper
        onClick={() => {
          setOpen(true);
        }}
      >
        <TextContainer>
          <Caption>{title}</Caption>
          <H3>{cost}$</H3>
        </TextContainer>
        <ProductImage>{img}</ProductImage>
        <ButtonShop />
      </ShopItemWrapper>
      <ShopModal
        title={title}
        cost={cost}
        img={img}
        setOpen={handlerClose}
        isOpen={open}
      ></ShopModal>
    </>
  );
});
