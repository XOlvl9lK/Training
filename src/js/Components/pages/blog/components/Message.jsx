import React from 'react';

const Message = ({ messages, removeMessage }) => {

    return (
        <>
            {messages.map((message, index) => {
                if (index % 2 === 0) {
                    return (
                        <div key={message.id} className="message" style={{alignSelf: "flex-end"}}>
                            <span onClick={() => removeMessage(message.id)} className="icon-times-circle"/>
                            <h2><span className="icon-envelope-open"/> {message.name}</h2>
                            <p>{message.message}</p>
                        </div>
                    );
                } else {
                    return (
                        <div key={message.id} className="message" style={{alignSelf: "flex-start"}}>
                            <span onClick={() => removeMessage(message.id)} className="icon-times-circle"/>
                            <h2><span className="icon-suitcase"/> {message.name}</h2>
                            <p>{message.message}</p>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default Message;