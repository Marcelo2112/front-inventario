import React from 'react';
import LineField from './LineField';



export default function InputLine (props) {
    const {
        label,
        type,
        placeholder,
        required,
        step,
        onChange,
        value,
        name,
        error,
        list
    }
 = props;


return (
        <LineField label = {label}>
     <input type={type}
     placeholder={placeholder}
        required={required}
        value={value}
        step={step}
        list={list && list.id} 
        onChange={(event) => onChange(name, event)}
        className={error  ? "form-control is-invalid" : "form-control"}

      />
     {list &&
     <datalist id={list.id}>
         {list.options.map((option, key) => <option key={key}>{option}</option>)}    
     </datalist>
        }
    </LineField>
);
}
