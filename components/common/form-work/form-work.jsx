import { ButtonRectangle, Input, H2, DropDown, TextArea } from "components";
import { useState } from "react";
import {
  FormSection,
  FormWrapper,
  FormColumnLeft,
  FormColumnRight,
} from "./form-work.style";

export const FormWork = () => {
  const [value1, setValueService] = useState();
  const [value2, setValueType] = useState();
  const [value3, setValueTitle] = useState();
  const [message, setMessage] = useState(null);

  const ServiceOptions = [
    { label: "color grading", value: "11" },
    { label: "VFX-design", value: "12" },
    { label: "Dailies", value: "13" },
  ];
  const TypeOptions = [
    { label: "color grading", value: "11" },
    { label: "VFX-design", value: "12" },
    { label: "Dailies", value: "13" },
    // Заглушка
  ];
  const TitleOptions = [
    { label: "color grading", value: "11" },
    { label: "VFX-design", value: "12" },
    { label: "Dailies", value: "13" },
    // Заглушка
  ];
  return (
    <FormSection>
      <H2>let's talk</H2>
      <FormWrapper>
        <FormColumnLeft>
          <DropDown
            mb="md"
            title="Service"
            onChange={(option) => setValueService(option)}
            options={ServiceOptions}
            value={value1}
          />
          <DropDown
            mb="md"
            title="Type"
            onChange={(option) => setValueType(option)}
            options={TypeOptions}
            value={value2}
          />
          <DropDown
            mb="md"
            title="Title"
            onChange={(option) => setValueOption(option)}
            options={TitleOptions}
            value={value3}
          />
          <Input title="NAME*" mb="md"></Input>
          <Input title="PLEASE CONTACT ME AT*"></Input>
        </FormColumnLeft>
        <FormColumnRight>
          <TextArea
            title="About your work"
            value={message}
            onChange={(val) => {
              setMessage(val);
            }}
          />
          <ButtonRectangle mt="md">SEND</ButtonRectangle>
        </FormColumnRight>
      </FormWrapper>
    </FormSection>
  );
};
