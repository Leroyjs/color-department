import {useState} from "react";
import {
    ButtonRectangle,
    DropDown,
    Input,
    ButtonExit,
    Counter,
    Modal,
    H3,
} from "components";
import {selectSizeOptions} from "./constants";
import {
    ShopModalInner,
    FormWrapper,
    ProductImage,
    ProductPrice,
    TextContainer,
    InformationColumn,
    ProductDiscription,
} from "./shop-modal.style";
import {ShopForm} from "./shop-form";

export const ShopModal = ({
                              img,
                              isOpen,
                              setOpen,
                              ...props
                          }) => {
    return (
        <Modal setOpen={setOpen} isOpen={isOpen}>
            <ShopModalInner>
                <ProductImage>
                    {img}
                </ProductImage>
                <ShopForm {...props}/>
                <ButtonExit onClick={() => setOpen(false)}/>
            </ShopModalInner>
        </Modal>
    );
};
