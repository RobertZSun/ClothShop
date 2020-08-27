import React from 'react';

import './form-input.style.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ? (<label className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`}>Label </label>) : null
        }
    </div>
);

export default FormInput;