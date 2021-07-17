import React from 'react';
import Message from "../Message/Message";

const MessageList = ({messages}) => {
  return (
    <div>
      {messages.map(message => <Message key={message.id} id={message.id} userId={message.userId} content={message.content}/>)}
    </div>
  );
};

export default MessageList;
