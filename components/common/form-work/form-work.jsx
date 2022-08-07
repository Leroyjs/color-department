import { ButtonRectangle } from "components";
import { Input } from "components";
import { H3 } from "components";
import { useState } from "react";
import { DropDown } from "components/ui/dropDown";
import { TextArea } from "components/ui/textArea";
import { H2 } from "components";
import {
  FormSection,
  FormWrapper,
  FormColumnLeft,
  FormColumnRight,
} from "./form-work.style";

export const FormWork = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
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
  ];
  const TitleOptions = [
    { label: "color grading", value: "11" },
    { label: "VFX-design", value: "12" },
    { label: "Dailies", value: "13" },
  ];
  return (
    <FormSection>
      <H2>let's talk</H2>
      <FormWrapper>
        <FormColumnLeft>
          <DropDown
            mb="md"
            title="Service"
            onChange={(option) => setValue1(option)}
            options={ServiceOptions}
            value={value1}
          />
          <DropDown
            mb="md"
            title="Type"
            onChange={(option) => setValue2(option)}
            options={TypeOptions}
            value={value2}
          />
          <DropDown
            mb="md"
            title="Title"
            onChange={(option) => setValue3(option)}
            options={TitleOptions}
            value={value3}
          />
          <Input mb="md"  >NAME</Input>
          <Input>PLEASE CONTACT ME AT*</Input>
        </FormColumnLeft>
        <FormColumnRight>
          <TextArea
            title="About your work"
            value={message}
            onChange={(val) => {
              setMessage(val);
            }}
          />
          <ButtonRectangle
          >SEND</ButtonRectangle>
        </FormColumnRight>
      </FormWrapper>
    </FormSection>
  );
};
