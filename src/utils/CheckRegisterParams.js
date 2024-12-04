import { messageInputError } from "../components/Messages/MessageInputError";

export const checkRegisterParams = (params, parentElement, message) => {
    if (isNaN(params.value)) {
        messageInputError(parentElement, message);
        return;
    }
};
