import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  formatPhoneNumber,
  getDimensions,
  postOrder,
  withFormProvider,
} from 'utils'
import {
  H3,
  ButtonRectangle,
  DropDownField,
  InputField,
  CounterField,
  WorkModal,
} from 'components/index'
import { selectSizeOptions } from './constants'
import {
  FormWrapper,
  InformationColumn,
  InformationItem,
  ProductDiscription,
  ProductDiscriptionWrapper,
  ProductPrice,
  TextContainer,
} from './shop-modal.style'

export const ShopForm = withFormProvider(
  ({ cost, description, dimensions, title }) => {
    const [isOpen, setOpen] = useState(false)
    const { handleSubmit } = useFormContext()

    function getTotal({ quantity }) {
      const num = Number(quantity) * Number(String(cost).replace(',', '.'))
      return String(num)
    }

    const onSubmit = (data) => {
      postOrder({
        ...data,
        name: title,
        quantity: String(data.quantity),
        total_cost: getTotal(data),
      })
        .then(() => {
          setOpen(true)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return (
      <>
        <InformationColumn>
          <TextContainer>
            <H3>{title}</H3>
            <ProductPrice>{cost}$</ProductPrice>
          </TextContainer>
          <InformationItem>
            <ProductDiscription
              wrapperProps={{ className: ProductDiscriptionWrapper }}
            >
              {description}
            </ProductDiscription>

            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              {dimensions?.length && !dimensions?.includes('-') && (
                <DropDownField
                  mt="md"
                  title="Select size"
                  name="sizes"
                  multiple
                  options={getDimensions(dimensions)}
                />
              )}
              <CounterField name="quantity" title="Quantity" mt="md" />
              <InputField
                name="title"
                propsInput={{ placeholder: 'My name is' }}
                mt="md"
                title="Name *"
              />
              <InputField
                name="phone"
                propsInput={{ placeholder: 'My e-mail' }}
                mt="md"
                title="Contact email *"
              />
              <ButtonRectangle mt="md">SEND</ButtonRectangle>
            </FormWrapper>
          </InformationItem>
        </InformationColumn>
        <WorkModal isOpen={isOpen} setOpen={setOpen} />
      </>
    )
  }
)
