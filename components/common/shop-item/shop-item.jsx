import { Text } from "components";
import { ButtonShop } from "components";
import { ModalShop } from "components";
import { Caption } from "components";
import { H3 } from "components";
import { observer } from "mobx-react-lite";
import { ShopItemWrapper, ProductImage,TextContainer,} from "./shop-item.style";

export const ShopItem = observer(({ cost, img, title, }) => {

const isOpen = false

  return (
    <>
      <ShopItemWrapper onClick={() => isOpen=true}>
        <TextContainer>
          <Caption>{title}</Caption>
          <H3>{cost}$</H3>
        </TextContainer>
        <ProductImage>{img}</ProductImage>
        <ButtonShop></ButtonShop>
      </ShopItemWrapper>
      <ModalShop title={title} cost={cost} img={img} isOpen={isOpen}></ModalShop>
    </>
  );
});
