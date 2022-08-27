import React from 'react';
import {PropTypes} from "prop-types";
import {Controller, useFormContext} from "react-hook-form";
import {TextArea} from "../text-area";
import { applyMargins } from 'styles';

export const TextAreaField = ({name, rules = null, ...props}) => {
    const {control, formState: {errors}} = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules || {validate: (val) => !!val || 'the field is filled incorrectly'}}
            render={({field}) => (
                <TextArea {...props} {...field} error={errors?.[name]?.message}/>
            )}
        />
    );
};

TextAreaField.propTypes = {
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    applyMargins,
}
