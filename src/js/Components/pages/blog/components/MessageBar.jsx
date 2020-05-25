import React from 'react';

const MessageBar = ({ toggleModalVisibility, modalVisible }) => (
    <div onClick={toggleModalVisibility} className="message-bar">
        {modalVisible ? <span>&or;</span> : <span>&and;</span>}
        <h1>Leave A Message</h1>
        {modalVisible ? <span>&or;</span> : <span>&and;</span>}
    </div>
);

export default MessageBar;