import { LEAVE_MESSAGE, REMOVE_MESSAGE } from '../constants'

const MESSAGES = [
    {
        id: 1,
        name: 'Denis',
        message: 'Dorow'
    },
    {
        id: 2,
        name: 'Vasya',
        message: 'Priv'
    },
    {
        id: 3,
        name: 'Petya',
        message: 'Hallow'
    },
    {
        id: 4,
        name: 'Kolya',
        message: 'Ku'
    },
];

const messages = (state = MESSAGES, { id, name, message, type }) => {
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