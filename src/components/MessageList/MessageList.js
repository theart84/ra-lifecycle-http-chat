import React from 'react';
import Message from "../Message/Message";
import PropTypes from 'prop-types';

const MessageList = ({messages}) => {
  return (
    <div>
      {messages.map(message => <Message key={message.id} id={message.id} userId={message.userId} content={message.content}/>)}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList;
