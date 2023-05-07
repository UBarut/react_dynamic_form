import React from 'react'

export function Input({ type = 'text', id, className, minLength, maxlength, beFill = false, placeholder, dataPattern, min, max }) {
    let inputProps = {
        type: type,
        id: id,
        className: className,
        minLength: minLength,
        maxLength: maxlength,
        placeholder: placeholder,
        'data-pattern': dataPattern
    };
    beFill && (inputProps.befill = '');
    if (className.includes('year') && type === 'number') {
        inputProps.min = min;
        inputProps.max = max;
    };
    return (
        <div className="input-part">
            <div className="inner-input" data-placeholder={placeholder}>
                <input {...inputProps} />
                {(className.includes('input-date') && type === 'date') &&
                    <div className="input-icon"></div>
                }
            </div>
            <h5 className="input-error"></h5>
        </div>
    )
}
export function TextArea({ id, className, minLength, maxlength, beFill = false, placeholder }) {
    let inputProps = {
        id: id,
        className: className,
        minLength: minLength,
        maxLength: maxlength,
        placeholder: placeholder,
    };
    beFill && (inputProps.befill = '');
    return (
        <div className="input-part">
            <div className="inner-input" data-placeholder={placeholder}>
                <textarea {...inputProps} />
            </div>
            <h5 className="input-error"></h5>
        </div>
    )
}
export function CheckboxFieldset({ id, title, description, minlimit, maxlimit, beFill = false, checkboxList }) {
    let inputProps = {
        id: id,
        minlimit: minlimit,
        maxlimit: maxlimit
    };
    beFill && (inputProps.befill = '');
    return (
        <div className="input-part">
            <fieldset className="checkboxFieldset" {...inputProps}>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="desc">{description}</div>
                </div>
                <div className="groups">
                    {
                        checkboxList.map((checkbox, index) => (

                            <div key={index} className="checkbox">
                                <input type="checkbox" name={`${title}-${index}`} id={`${title}-${index}`} />
                                <label htmlFor={`${title}-${index}`}>{checkbox}</label>
                            </div>
                        ))
                    }
                </div>
                {/* <h5 className="input-error"></h5> */}
            </fieldset>
        </div>
    )
}
export function RadioButtonFieldset({ id, title, description, beFill = false, radiobuttonList }) {
    let inputProps = {
        id: id,
    };
    beFill && (inputProps.befill = '');
    return (
        <div className="input-part">
            <fieldset className="radioFieldset" {...inputProps}>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="desc">{description}</div>
                </div>
                <div className="groups">
                    {
                        radiobuttonList.map((radio, index) => (
                            <div key={index} className="radio">
                                <input type="radio" name={`${title}`} id={`${title}-${index}`} />
                                    <label htmlFor={`${title}-${index}`}>{radio}</label>
                            </div>
                        ))
                    }
                </div>
                {/* <h5 className="input-error"></h5> */}
            </fieldset>
        </div>
    )
}