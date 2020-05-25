import React from 'react';
import { connect } from 'react-redux';

import { leaveMessage, removeMessage } from '../../../actions/actionCreator'

import RecentPagesBanner from "../../recentPagesBanner/RecentPagesBanner.jsx";
import Message from "./components/Message.jsx";
import LeaveMessage from "./components/LeaveMessage.jsx";


class Blog extends React.Component {

    state = {
        name: '',
        message: ''
    };

    handleInputChange = ({ target: { value } }, inputType) => {
        this.setState({
            [inputType]: value
        })
    };

    addMessage = (event) => {
        event.preventDefault();
        const { name, message } = this.state;

        if (name.length > 0 && message.length > 0) {
            const { leaveMessage } = this.props;

            leaveMessage((new Date()).getTime(), name, message);

            this.setState({
                name: '',
                message: '',
            })
        }
    };

    render() {
        const { name, message } = this.state;
        const { messages, removeMessage } = this.props;

        return (
            <>
                <RecentPagesBanner imgURL="url(../img/blog.jpg)" path="Blog"/>
                <div className="blog container">
                    <Message
                        messages={messages}
                        removeMessage={removeMessage}
                    />
                    <LeaveMessage
                        addMessage={this.addMessage}
                        handleInputChange={this.handleInputChange}
                        name={name}
                        message={message}
                    />
                </div>
            </>
        );
    }
}

export default connect(state => ({
    messages: state.messages
}), { leaveMessage, removeMessage })(Blog);

