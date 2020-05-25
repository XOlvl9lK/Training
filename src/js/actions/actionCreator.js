import { LEAVE_MESSAGE, REMOVE_MESSAGE } from '../constants'

export const leaveMessage = (id, name, message) => ({
    type: LEAVE_MESSAGE,
    id,
    name,
    message
});

export const removeMessage = id => ({
    type: REMOVE_MESSAGE,
    id,
});