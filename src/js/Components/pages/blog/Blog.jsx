import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { leaveMessage, removeMessage } from '../../../actions/actionCreator'

import RecentPagesBanner from "../../recentPagesBanner/RecentPagesBanner.jsx";
import Message from "./components/Message.jsx";
import LeaveMessage from "./components/LeaveMessage.jsx";
import MessageBar from "./components/MessageBar.jsx";


class Blog extends React.Component {

    state = {
        name: '',
        message: '',
        modalVisible: false
    };

    handleInputChange = ({ target: { value } }, inputType) => {
        this.setState({
            [inputType]: value
        })
    };

    addMessage = (event) => {
        event.preventDefault();
        const { name, message } = this.state;
        const { leaveMessage } = this.props;

        leaveMessage((new Date()).getTime(), name, message);

        this.setState({
            name: '',
            message: '',
        })
    };

    toggleModalVisibility = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    };

    render() {
        const { name, message, modalVisible } = this.state;
        const { messages, removeMessage } = this.props;

        return (
            <>
                <RecentPagesBanner imgURL="url(img/blog.jpg)" path="Messages"/>
                <div className="blog container">
                    <Message
                        messages={messages}
                        removeMessage={removeMessage}
                    />
                    <TransitionGroup>
                        {modalVisible && (
                            <CSSTransition classNames="options" timeout={300}>
                                <LeaveMessage
                                    addMessage={this.addMessage}
                                    handleInputChange={this.handleInputChange}
                                    name={name}
                                    message={message}
                                />
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                    <MessageBar toggleModalVisibility={this.toggleModalVisibility} modalVisible={modalVisible}/>
                </div>
            </>
        );
    }
}

export default connect(state => ({
    messages: state.messages
}), { leaveMessage, removeMessage })(Blog);

