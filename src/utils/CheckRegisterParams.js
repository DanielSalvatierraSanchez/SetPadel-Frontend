import { messageInput } from "../components/Messages/Error/MessageInput";

export const checkRegisterParams = (params, parentElement, message) => {
    if (isNaN(params.value)) {
        messageInput(parentElement, message);
        return;
    }
};
