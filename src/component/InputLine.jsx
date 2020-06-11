import React from 'react';
import LineField from './LineField';



export default function InputLine (props) {
    const {
        label,
        type,
        placeholder
    }
 = props;


return (
    <LineField label = {label}>
    <input type={type}
    placeholder={placeholder}


    />
    </LineField>
);
}