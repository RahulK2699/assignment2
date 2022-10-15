import Validator from "validatorjs";

export const validate = (params, rules , customrules = {}) => {
    let fieldErrors = {};
    let validation = new Validator(params, rules , customrules);
    if (validation.fails()) {
       
        for (let key in validation.errors.errors) {
            fieldErrors[key] = validation.errors.errors[key][0];
        }
   
    }
    return fieldErrors
}