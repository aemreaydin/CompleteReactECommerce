import React from 'react';

import './FormInput.scss';

interface FormInputProps {
    name: string;
    type: string;
    id: string;
    placeholder?: string | undefined;
    value?: string | number | string[];
    htmlFor?: string | undefined;
    inputClassName?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void | undefined;
    onSubmit?(event: React.FormEvent<HTMLFormElement>): void | undefined;
}

const FormInput : React.FC<FormInputProps> = ({name, type, value, id, htmlFor, onChange, placeholder, inputClassName}) => (
    <div className={`form-input form-input__${name}`}>
        {htmlFor
            ?
                <label
                    className="form-input__label"
                    htmlFor={htmlFor}>
                    {name}
                </label>
            :
                null
        }
        <input
            required
            name={name}
            type={type}
            value={value}
            id={id}
            placeholder={placeholder ? placeholder : undefined}
            onChange={onChange}
            className={inputClassName ? inputClassName : undefined}/>
    </div>
);

export default FormInput;