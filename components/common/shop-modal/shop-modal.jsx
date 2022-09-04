import { CloseBtn, ProductImage, ShopModalInner } from "./shop-modal.style";

import { Modal } from "components";
import { ShopForm } from "./shop-form";

export const ShopModal = ({ img, isOpen, setOpen, ...props }) => {
  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <ShopModalInner>
        <ProductImage src={img} />
        <ShopForm {...props} />
      </ShopModalInner>
      <CloseBtn mt="md" ml="md" onClick={() => setOpen(false)} />
    </Modal>
  );
};
