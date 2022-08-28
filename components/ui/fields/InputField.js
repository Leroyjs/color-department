import React from 'react';
import {PropTypes} from "prop-types";
import {Controller, useFormContext} from "react-hook-form";
import {Input} from "../input";

export const InputField = ({name, rules = null, normalizer, ...props}) => {
    const {control, formState: {errors}} = useFormContext();

    return (
      <Controller
        control={control}
        name={name}
        rules={
          rules || {
            validate: (val) => !!val || "the field is filled incorrectly",
          }
        }
        render={({ field: { onChange, ...other } }) => (
          <Input
            {...props}
            {...other}
            onChange={(event) => {
              const { value } = event.target;

              if (normalizer) {
                event.target.value = normalizer(value);
                onChange(value);
              } else {
                onChange(value);
              }
            }}
            error={errors?.[name]?.message}
          />
        )}
      />
    );
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    normalizer: PropTypes.func,
}
