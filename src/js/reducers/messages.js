import { LEAVE_MESSAGE, REMOVE_MESSAGE } from '../constants'
import { load } from 'redux-localstorage-simple';

let MESSAGES = load({ namespace: 'message-storage' });

if (!MESSAGES || !MESSAGES.messages || !MESSAGES.messages.length) {
    MESSAGES = {
        messages: [],
    }
}

const messages = (state = MESSAGES.messages, { id, name, message, type }) => {
    switch (type) {
        case LEAVE_MESSAGE:
            return [
                ...state,
                {
                    id,
                    name,
                    message,
                }
            ];
        case REMOVE_MESSAGE:
            return [...state].filter(message => message.id !== id);
        default:
            return state;
    }
};

export default messages;