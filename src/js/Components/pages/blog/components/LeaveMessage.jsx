import React from 'react';

const LeaveMessage = ({ name, message, handleInputChange, addMessage }) => (
        <div className="leave-message">
            <h2>Leave A Message</h2>
            <form onSubmit={addMessage}>
                <textarea
                    rows="1"
                    cols="15"
                    placeholder="Your Name"
                    value={name}
                    onChange={event => handleInputChange(event, 'name')}
                    required
                />
                <textarea
                    rows="3"
                    cols="15"
                    placeholder="Your Message"
                    value={message}
                    onChange={event => handleInputChange(event, 'message')}
                    required
                />
                <button type="submit">Post Message</button>
            </form>
        </div>

);

export default LeaveMessage;