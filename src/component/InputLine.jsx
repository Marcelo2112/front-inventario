import React from 'react';
import LineField from './LineField';



export default function InputLine (props) {
    const {
        label,
        type,
        placeholder,
        required,
        onChange,
        value,
        name,
        error
    }
 = props;


return (
    <LineField label = {label}>
    <input type={type}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={(event) => onChange(name, event)}
    className={error  ? 'inputError': undefined}

    />
    </LineField>
);
}