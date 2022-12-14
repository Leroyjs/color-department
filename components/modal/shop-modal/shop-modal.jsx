import { Modal } from 'components'
import { ShopForm } from './shop-form'
import { CloseBtn, ProductImage, ShopModalInner } from './shop-modal.style'

export const ShopModal = ({ photo, isOpen, setOpen, ...props }) => {
  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <ShopModalInner>
        <ProductImage src={photo} />
        <ShopForm {...props} />
      </ShopModalInner>
      <CloseBtn mt="md" ml="md" onClick={() => setOpen(false)} />
    </Modal>
  )
}
