import { useState } from 'react'
import { arrShopTest } from './constant'
import { ShopModal, ShopItem } from 'components'
import { ShopList, ShopTitle, ShopWrapper } from './shop-section.style'

export const ShopSection = ({ products = [] }) => {
  const [isOpen, setOpen] = useState(false)
  const [chooseItem, setChooseItem] = useState({})

  return (
    <ShopWrapper>
      <ShopTitle color="white">Shop</ShopTitle>
      <ShopList>
        {products.map((item, index) => (
          <ShopItem
            title={item.title}
            key={item.id + index}
            cost={item.cost}
            img={item.photo}
            setOpen={setOpen}
            onClick={() => {
              setOpen(true)
              setChooseItem(item)
            }}
          />
        ))}
        <ShopModal isOpen={isOpen} setOpen={setOpen} {...chooseItem} />
      </ShopList>
    </ShopWrapper>
  )
}
