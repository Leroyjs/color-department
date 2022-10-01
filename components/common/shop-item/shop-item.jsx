import { ButtonShop } from 'components'
import Image from 'next/image'
import {
  ShopItemWrapper,
  ProductImage,
  TextContainer,
  Title,
  Cost,
  CostPhone,
} from './shop-item.style'

export const ShopItem = ({ cost, img, title, ...props }) => {
  return (
    <ShopItemWrapper {...props}>
      <TextContainer>
        <Title>{title}</Title>
        <Cost>{cost.toString().slice(0, 8)}$</Cost>
      </TextContainer>
      <ProductImage>
        <Image
          quality={72}
          layout="responsive"
          width={240}
          height={240}
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={img}
          src={img}
        />
      </ProductImage>
      <CostPhone>{cost}$</CostPhone>
      <ButtonShop />
    </ShopItemWrapper>
  )
}
