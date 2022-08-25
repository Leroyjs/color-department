import { ButtonExit, Modal } from "components";
import { ShopModalInner, ProductImage } from "./shop-modal.style";
import { ShopForm } from "./shop-form";

export const ShopModal = ({ img, isOpen, setOpen, ...props }) => {
  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <ShopModalInner>
        <ProductImage>{img}</ProductImage>
        <ShopForm {...props} />
      </ShopModalInner>
      <ButtonExit onClick={() => setOpen(false)} />
    </Modal>
  );
};
