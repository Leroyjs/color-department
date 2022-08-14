import { Text } from "components";
import { ButtonShop } from "components";
import { ShopModal } from "components";
import { Caption } from "components";
import { H3 } from "components";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { ShopItemWrapper, ProductImage,TextContainer,} from "./shop-item.style";

export const ShopItem = observer(({ cost, img, title, isOpen}) => {
const [open, setOpen] = useState(false)


  function handlerClose(value) {
   setOpen(value)
 }

  return (
    <>
      <ShopItemWrapper onClick={() => { setOpen(true) }}>
        <TextContainer>
          <Caption>{title}</Caption>
          <H3>{cost}$</H3>
        </TextContainer>
        <ProductImage>{img}</ProductImage>
        <ButtonShop></ButtonShop>
      </ShopItemWrapper>
      <ShopModal title={title} cost={cost} img={img} setOpen={(e) => {handlerClose(e)}} isOpen={open}></ShopModal>
    </>
  );
});
