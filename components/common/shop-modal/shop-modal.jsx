import { ShopForm } from "./shop-form";
import { Modal } from "components";
import { ShopModalInner, ProductImage, CloseBtn } from "./shop-modal.style";

const demoImg = 'https://www.lenbaget.ru/wp-content/uploads/2021/11/14683-1000x830-1.jpg'
export const ShopModal = ({ img, isOpen, setOpen, ...props }) => {
    return (
        <Modal setOpen={setOpen} isOpen={isOpen}>
            <ShopModalInner>
                <ProductImage src={img}></ProductImage>
                <ShopForm {...props} />
            </ShopModalInner>
            <CloseBtn mt="md" ml="md" onClick={() => setOpen(false)} />
        </Modal>
    );
};
