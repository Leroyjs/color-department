import React, {useState} from 'react';
import {PropTypes} from "prop-types";
import {Controller, useFormContext} from "react-hook-form";
import {DropDown} from "../drop-down";


export const DropDownField = ({name, rules = null, multiple = false, ...props}) => {
    const {control, formState: {errors}} = useFormContext();
    const [currentOption, setCurrentOption] = useState(null);

    return (
        <Controller
            control={control}
            name={name}
            rules={rules || {validate: (val) => !!val || 'the field is filled incorrectly'}}
            render={({field: {onChange, value, ...other}}) => (
                <DropDown {...props} multiple={multiple} {...other} value={currentOption} error={errors?.[name]?.message}
                          onChange={(option) => {
                              if (multiple) {
                                  onChange(option.map(({value}) => value));
                              } else {
                                  onChange(option.value);
                              }
                              setCurrentOption(option);
                          }}/>
            )}
        />
    );
}

DropDownField.propTypes = {
    name: PropTypes.string.isRequired,
    rules: PropTypes.object,
    multiple: PropTypes.bool,
}
