function handleValidationErrors(err) {

    const groupedErrors = {};

    err.forEach((error) => {
        if (!groupedErrors.hasOwnProperty(error.param)) {
            groupedErrors[error.param] = error.msg;
        }
    });
    return groupedErrors;
}

module.exports = {handleValidationErrors};