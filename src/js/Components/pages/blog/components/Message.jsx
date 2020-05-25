import React from 'react';

const Message = ({ messages, removeMessage }) => (
    <>
    {messages.map((message, index) => {
        if (index % 2 === 0) {
            return (
                <div key={message.id} className="message" style={{alignSelf: "flex-end"}}>
                    <h2><span className="icon-envelope-open" /> {message.name}</h2>
                    <p>{message.message} <span onClick={() => removeMessage(message.id)}>&times;</span></p>
                </div>
            );
        } else {
            return (
                <div key={message.id} className="message" style={{alignSelf: "flex-start"}}>
                    <h2><span className="icon-envelope-open" /> {message.name}</h2>
                    <p>{message.message} <span onClick={() => removeMessage(message.id)}>&times;</span></p>
                </div>
            );
        }
    })}
    </>
);

export default Message;