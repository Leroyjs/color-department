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
import {
  formatPhoneNumber,
  getOptionsByLabels,
  postContact,
  postOrder,
  withFormProvider,
} from 'utils'
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

export const FormWork = withFormProvider(
  ({ first_selector, second_selector, third_selector, ...props }) => {
    const { handleSubmit } = useFormContext()
    const onSubmit = (data) => {
      postContact({ ...data, titles: [data?.titles || ''] })
        .then(() => {
          setModalOpen(true)
        })
        .catch((error) => {
          console.log(error)
        })
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
              name={'services'}
              title={first_selector.title}
              options={getOptionsByLabels(first_selector.options)}
              isFullWidth
              multiple
            />
            <DropDownField
              mb="md2"
              name={'types'}
              title={second_selector.title}
              options={getOptionsByLabels(second_selector.options)}
              isFullWidth
              multiple
            />
            <InputField
              mb="md2"
              name={'titles'}
              title={third_selector.title}
              propsInput={{ placeholder: 'title' }}
              isFullWidth
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
              propsInput={{ placeholder: 'My e-mail or phone number' }}
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
  }
)
