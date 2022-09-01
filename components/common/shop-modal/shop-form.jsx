import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { formatPhoneNumber, withFormProvider } from "utils";
import {
  H3,
  ButtonRectangle,
  DropDownField,
  InputField,
  CounterField,
  WorkModal,
} from "components";
import { selectSizeOptions } from "./constants";
import {
  FormWrapper,
  InformationColumn,
  InformationItem,
  ProductDiscription,
  ProductDiscriptionWrapper,
  ProductPrice,
  TextContainer,
} from "./shop-modal.style";

export const ShopForm = withFormProvider(({ cost, discription, title }) => {
  const [isOpen, setOpen] = useState(false)
  const { handleSubmit } = useFormContext();
  const onSubmit = () => setOpen(true);

  return (<>
    <InformationColumn>
      <TextContainer>
        <H3>{title}</H3>
        <ProductPrice>{cost}$</ProductPrice>
      </TextContainer>
      <InformationItem>
        <ProductDiscription
          wrapperProps={{ className: ProductDiscriptionWrapper }}
        >
          {discription}
        </ProductDiscription>

        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <DropDownField
            mt="md"
            title="Select size"
            name="size"
            options={selectSizeOptions}
          />
          <CounterField name="quantity" title="Quantity" mt="md" />
          <InputField
            name="name"
            propsInput={{ placeholder: "My name is" }}
            mt="md"
            title="Name *"
          />
          <InputField
            name="phone"
            normalizer={formatPhoneNumber}
            propsInput={{ placeholder: "2 000 000-00-00" }}
            mt="md"
            title="Contact me by number *"
          />
          <ButtonRectangle mt="md">SEND</ButtonRectangle>
        </FormWrapper>
      </InformationItem>
    </InformationColumn>
    <WorkModal isOpen={isOpen} setOpen={setOpen} />
  </>
  );
});
