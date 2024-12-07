import { randomMessageError } from "./RandomMessageError";

export const checkRegisterParams = (params, parentElement, message) => {
    if (isNaN(params.value)) {
        randomMessageError(parentElement, message);
        return;
    }
};
