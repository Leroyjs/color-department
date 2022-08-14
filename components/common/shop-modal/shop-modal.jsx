import { Text } from "components";
import { ButtonRectangle } from "components";
import { DropDown } from "components";
import { Input } from "components";
import { ButtonExit } from "components";
import { Counter } from "components";
import { Modal } from "components";
import { H3 } from "components";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import {
  ShopModalInner,
  FormWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
  TextContainer,
  TextStyled,
  InformationColumn,
  ProductDiscription,
} from "./shop-modal.style";

export const ShopModal = observer(
  ({ cost, img, title, discription, isOpen, setOpen }) => {
    const [valueSize, setValueSize] = useState(null);
    const [counterValue, setCounterValue] = useState(1);
    const [InputNameValue, setInputName] = useState("");
    const [InputNumberValue, setInputNumber] = useState("");



    const SelectSizeOptions = [
      { label: "XS", value: "11" },
      { label: "S", value: "12" },
      { label: "M", value: "13" },
      { label: "L", value: "14" },
      { label: "XL", value: "15" },
      { label: "XXL", value: "16" },
    ];




    return (
      <Modal setOpen={setOpen} isOpen={isOpen}>
        <ShopModalInner>
          <ProductImage>{img}</ProductImage>
          <InformationColumn>
            <TextContainer>
              <ProductName>
                Official merch Sweatshirt Color Department
              </ProductName>
              <ProductPrice>6,16$</ProductPrice>
            </TextContainer>
            <ProductDiscription>
              The bulk of the work was concentrated around ‘the wall’, the
              US/Mexico border, one of the main locations in the series.
              However, the real wall is a highly secured area and it was
              difficult for the production crew to get access to it.{" "}
            </ProductDiscription>
            <FormWrapper>
              <DropDown
                mt="md"
                title="Select size"
                onChange={(option) => setValueSize(option)}
                options={SelectSizeOptions}
                value={valueSize}></DropDown>
              <Counter
                value={counterValue}
                onChange={(value) => setCounterValue(value)}
                mt="md"
                title="Quantity"></Counter>
              <Input
                value={InputNameValue}
                onChange={(value) => setInputName(String(value))}
                propsInput={{ placeholder: "My name is" }}
                mt="md"
                title="Name *"></Input>
              <Input
                value={InputNumberValue}
                onChange={(value) => setInputNumber(String(value))}
                propsInput={{ placeholder: "2 000 000-00-00" }}
                mt="md"
                title="Contact me by number *"></Input>
              <ButtonRectangle mt="md">SEND</ButtonRectangle>
            </FormWrapper>
          </InformationColumn>
          <ButtonExit onClick={(e) => { setOpen(false); console.log(e);} }></ButtonExit>
        </ShopModalInner>
      </Modal>
    );
  }
);
