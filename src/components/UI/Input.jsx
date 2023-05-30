import React, from 'react';

const Input = ({label, type, setState}) => {



    return (
        <div className="form-floating mb-4">
            <input
                type={type}
                className="form-control"
                id="floatingInput"
                placeholder={label}
                onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="floatingInput">{label}</label>
        </div>
    );
};

export default Input;