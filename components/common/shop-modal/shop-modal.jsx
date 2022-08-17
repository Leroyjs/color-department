import { selectSizeOptions } from "./constants";
import {
  ButtonRectangle,
  DropDown,
  Input,
  ButtonExit,
  Counter,
  Modal,
  H3,
} from "components";
import { useState } from "react";
import {
  ShopModalInner,
  FormWrapper,
  ProductImage,
  ProductPrice,
  TextContainer,
  InformationColumn,
  ProductDiscription,
} from "./shop-modal.style";

export const ShopModal = ({
  cost,
  img,
  title,
  discription,
  isOpen,
  setOpen,
}) => {
  const [valueSize, setValueSize] = useState(null);
  const [counterValue, setCounterValue] = useState(1);
  const [InputNameValue, setInputName] = useState("");
  const [InputNumberValue, setInputNumber] = useState("");

  return (
    <Modal setOpen={setOpen} isOpen={isOpen}>
      <ShopModalInner>
        <ProductImage>{img}</ProductImage>
        <InformationColumn>
          <TextContainer>
            <H3>Official merch Sweatshirt Color Department</H3>
            <ProductPrice>6,16$</ProductPrice>
          </TextContainer>
          <ProductDiscription>
            The bulk of the work was concentrated around ‘the wall’, the
            US/Mexico border, one of the main locations in the series. However,
            the real wall is a highly secured area and it was difficult for the
            production crew to get access to it.{" "}
          </ProductDiscription>
          <FormWrapper>
            <DropDown
              mt="md"
              title="Select size"
              onChange={(option) => setValueSize(option)}
              options={selectSizeOptions}
              value={valueSize}
            />
            <Counter
              value={counterValue}
              onChange={(value) => setCounterValue(value)}
              mt="md"
              title="Quantity"
            />
            <Input
              value={InputNameValue}
              onChange={(value) => setInputName(String(value))}
              propsInput={{ placeholder: "My name is" }}
              mt="md"
              title="Name *"
            />
            <Input
              value={InputNumberValue}
              onChange={(value) => setInputNumber(String(value))}
              propsInput={{ placeholder: "2 000 000-00-00" }}
              mt="md"
              title="Contact me by number *"
            />
            <ButtonRectangle mt="md">SEND</ButtonRectangle>
          </FormWrapper>
        </InformationColumn>
        <ButtonExit
          onClick={() => {
            setOpen(false);
          }}
        />
      </ShopModalInner>
    </Modal>
  );
};
