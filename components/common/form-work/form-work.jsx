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
    const [value, setValue] = useState(null);
    const [message, setMessage] = useState(null);

    const ServiceOptions = ["color grading", "VFX-design", "Dailies"];
    const TypeOptions = ["color grading", "VFX-design", "Dailies"];
    const TitleOptions = ["color grading", "VFX-design", "Dailies"];
  return (
    <FormSection>
      <H2>let's talk</H2>
      <FormWrapper>
        <FormColumnLeft>
          <DropDown
            mb="md"
            title="Service"
            onChange={(option) => setValue(option)}
            options={ServiceOptions}
            value={value}
          />
          <DropDown
            mb="md"
            title="Type"
            onChange={(option) => setValue(option)}
            options={TypeOptions}
            value={value}
          />
          <DropDown
            mb="md"
            title="Title"
            onChange={(option) => setValue(option)}
            options={TitleOptions}
            value={value}
          />
          <Input></Input>
          <Input></Input>
        </FormColumnLeft>
        <FormColumnRight>
          <TextArea
            title="About your work"
            value={message}
            onChange={(val) => {
              setMessage(val);
            }}
          />
          <ButtonRectangle>SEND</ButtonRectangle>
        </FormColumnRight>
      </FormWrapper>
    </FormSection>
  );
};
