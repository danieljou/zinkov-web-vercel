import React from "react";

const FormTemplate = (props) => {
    const { label } = props;
    return (
        <div className="w-full my-3">
            <label htmlFor="" className="mb-2 text-gray-600 text-sm font-semibold">
                {label}
            </label>
            <div className="w-full my-2">
                {props.children}
            </div>
        </div>
    );
};

export default FormTemplate;
