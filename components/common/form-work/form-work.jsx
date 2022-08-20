import React, {useState} from "react";
import {
    ButtonRectangle,
    Input,
    H2,
    DropDown,
    TextArea,
    WorkModal,
} from "components";
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

export const FormWork = ({...props}) => {
    const [service, setService] = useState();
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <FormSection mt="md" {...props}>
            <H2 color="white" mb="md">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                let's talk
            </H2>
            <FormWrapper>
                <FormColumnLeft>
                    <DropDown
                        mb="md"
                        title="Service"
                        onChange={(option) => setService(option)}
                        options={ServiceOptions}
                        value={service}
                        isFullWidth
                    />
                    <DropDown
                        mb="md"
                        title="Type"
                        onChange={(option) => setType(option)}
                        options={TypeOptions}
                        value={type}
                        isFullWidth
                    />
                    <DropDown
                        mb="md"
                        title="Title"
                        onChange={(option) => setTitle(option)}
                        options={TitleOptions}
                        value={title}
                        isFullWidth
                    />
                    <Input isFullWidth title="NAME*" mb="md" value={name} onChange={(val) => setName(val)}/>
                    <Input isFullWidth title="PLEASE CONTACT ME AT*" value={phone} onChange={(val) => setPhone(val)}/>
                </FormColumnLeft>
                <FormColumnRight>
                    <TextArea
                        isFullWidth
                        title="About your work"
                        value={message}
                        onChange={(val) => {
                            setMessage(val);
                        }}
                    />
                    <ButtonRectangle mt="md" onClick={() => setModalOpen(true)}>
                        SEND
                    </ButtonRectangle>
                </FormColumnRight>
            </FormWrapper>
            <WorkModal isOpen={isModalOpen} setOpen={setModalOpen}/>
        </FormSection>
    );
};
