import React from 'react';
import {PropTypes} from "prop-types";
import {Controller, useFormContext} from "react-hook-form";
import {Counter} from "../counter";

export const CounterField = ({name, rules = null, normalizer, ...props}) => {
    const {control, formState: {errors}} = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules || {validate: (val) => !!val || 'the field is filled incorrectly'}}
            render={({field}) => (
                <Counter {...props} {...field} error={errors?.[name]?.message}/>
            )}
        />
    );
};

CounterField.propTypes = {
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    normalizer: PropTypes.func,
}
