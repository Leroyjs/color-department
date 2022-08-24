import React, {useState} from "react";
import {useFormContext} from "react-hook-form";
import {
    ButtonRectangle,
    H2,
    WorkModal,
    InputField,
    TextAreaField,
    DropDownField
} from "components";
import {formatPhoneNumber, withFormProvider} from "utils";
import {
    FormSection,
    FormWrapper,
    FormColumnLeft,
    FormColumnRight,
} from "./form-work.style";

const ServiceOptions = [
    {label: "color grading", value: "11"},
    {label: "VFX-design", value: "12"},
    {label: "Dailies", value: "13"},
];
const TypeOptions = [
    {label: "color grading", value: "11"},
    {label: "VFX-design", value: "12"},
    {label: "Dailies", value: "13"},
    // Заглушка
];
const TitleOptions = [
    {label: "color grading", value: "11"},
    {label: "VFX-design", value: "12"},
    {label: "Dailies", value: "13"},
    // Заглушка
];

export const FormWork = withFormProvider(({...props}) => {
    const {handleSubmit} = useFormContext();
    const onSubmit = data => console.log(data);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <FormSection onSubmit={handleSubmit(onSubmit)} mt="md" {...props}>
            <H2 color="white" mb="md">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                let's talk
            </H2>
            <FormWrapper>
                <FormColumnLeft>
                    <DropDownField
                        mb="md"
                        name="service"
                        title="Service"
                        options={ServiceOptions}
                        isFullWidth
                    />
                    <DropDownField
                        mb="md"
                        name="type"
                        title="Type"
                        options={TypeOptions}
                        isFullWidth
                    />
                    <DropDownField
                        mb="md"
                        name="title"
                        title="Title"
                        options={TitleOptions}
                        isFullWidth
                    />

                    <InputField name="name" isFullWidth title="NAME*" mb="md"/>
                    <InputField name="phone" normalizer={formatPhoneNumber} isFullWidth
                                title="PLEASE CONTACT ME AT*"/>
                </FormColumnLeft>
                <FormColumnRight>
                    <TextAreaField
                        name="message"
                        isFullWidth
                        title="About your work"/>
                    {/* <ButtonRectangle mt="md">
                        SEND
                    </ButtonRectangle> */}
                </FormColumnRight>
            </FormWrapper>
            <WorkModal isOpen={isModalOpen} setOpen={setModalOpen}/>
        </FormSection>
    );
});
