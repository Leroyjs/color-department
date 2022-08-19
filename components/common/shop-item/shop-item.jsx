import {ButtonShop} from "components";
import {
    ShopItemWrapper,
    ProductImage,
    TextContainer, Title, Cost,
} from "./shop-item.style";

export const ShopItem = ({cost, img, title, ...props}) => {
    return (
        <ShopItemWrapper {...props}>
            <TextContainer>
                <Title>{title}</Title>
                <Cost>{cost}$</Cost>
            </TextContainer>
            <ProductImage>{img}</ProductImage>
            <ButtonShop/>
        </ShopItemWrapper>
    );
};
