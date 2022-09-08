import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  ButtonRectangle,
  H2,
  WorkModal,
  InputField,
  TextAreaField,
  DropDownField,
} from 'components'
import { formatPhoneNumber, withFormProvider } from 'utils'
import {
  FormSection,
  FormWrapper,
  FormColumnLeft,
  FormColumnRight,
} from './form-work.style'

const ServiceOptions = [
  { label: 'color grading', value: '11' },
  { label: 'VFX-design', value: '12' },
  { label: 'Dailies', value: '13' },
]
const TypeOptions = [
  { label: 'color grading', value: '11' },
  { label: 'VFX-design', value: '12' },
  { label: 'Dailies', value: '13' },
  // Заглушка
]
const TitleOptions = [
  { label: 'color grading', value: '11' },
  { label: 'VFX-design', value: '12' },
  { label: 'Dailies', value: '13' },
  // Заглушка
]

export const FormWork = withFormProvider(({ ...props }) => {
  const { handleSubmit } = useFormContext()
  const onSubmit = (data) => {
    console.log(data)
    setModalOpen(true)
  }
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <FormSection onSubmit={handleSubmit(onSubmit)} {...props}>
      <H2 color="white" mb="md" mt="lg">
        let&apos;s talk
      </H2>
      <FormWrapper>
        <FormColumnLeft>
          <DropDownField
            mb="md2"
            name="service"
            title="Service"
            options={ServiceOptions}
            isFullWidth
            multiple
          />
          <DropDownField
            mb="md2"
            name="type"
            title="Type"
            options={TypeOptions}
            isFullWidth
            multiple
          />
          <DropDownField
            mb="md2"
            name="title"
            title="Title"
            options={TitleOptions}
            isFullWidth
            multiple
          />

          <InputField
            name="name"
            isFullWidth
            title="NAME*"
            mb="md2"
            propsInput={{ placeholder: 'My name is' }}
          />
          <InputField
            name="phone"
            isFullWidth
            title="PLEASE CONTACT ME AT*"
            propsInput={{ placeholder: 'My e-mail or number phone' }}
          />
        </FormColumnLeft>
        <FormColumnRight>
          <TextAreaField
            name="message"
            rules={{}}
            isFullWidth
            title="About your work"
          />
          <ButtonRectangle mt="md3" mb="xlg">
            SEND
          </ButtonRectangle>
        </FormColumnRight>
      </FormWrapper>
      <WorkModal isOpen={isModalOpen} setOpen={setModalOpen} />
    </FormSection>
  )
})
