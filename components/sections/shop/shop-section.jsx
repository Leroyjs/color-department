import {useState} from "react";
import {arrShopTest} from "./constant";
import {ShopModal, ShopItem} from "components";
import {ShopList, ShopTitle, ShopWrapper} from "./shop-section.style";

export const ShopSection = () => {
    const [isOpen, setOpen] = useState(false);
    const [chooseItem, setChooseItem] = useState({});

    return (
        <ShopWrapper>
            <ShopTitle color="white">
                Shop
            </ShopTitle>
            <ShopList>
                {arrShopTest.map(({title, id, cost, img, discription}) => (
                    <ShopItem
                        title={title}
                        key={id}
                        cost={cost}
                        img={img}
                        setOpen={setOpen}
                        discription={discription}
                        onClick={() => {
                            setOpen(true);
                            setChooseItem({title, id, cost, img, discription});
                        }}
                    />
                ))}
                <ShopModal isOpen={isOpen} setOpen={setOpen} {...chooseItem} />
            </ShopList>
        </ShopWrapper>
    );
};
