import React, { useEffect } from 'react'

const FormErrorsProvider = ({ errors, setErrorState, setHelperTextState }) => {

    useEffect(() => {
        if (errors != null) {
            const newErrors = {};
            const newHelperTexts = {};

            Object.keys(errors).forEach(field => {
                const fieldErrors = errors[field];
                newErrors[field] = fieldErrors.length > 0;
                newHelperTexts[field] = fieldErrors.join(', '); // Ou utilisez un format approprié pour le texte d'aide
            });

            setErrorState(newErrors);
            setHelperTextState(newHelperTexts);
        }
    }, [errors]);
    return (
        <div>

        </div>
    )
}

export default FormErrorsProvider