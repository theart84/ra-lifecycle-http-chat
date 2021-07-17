import React from 'react';
import classes from './Message.module.css';

const Message = ({id, userId,content}) => {
  const currentUserID = window.localStorage.getItem('userId');
  const classesMessage = [classes["speech-bubble"]];
  if (currentUserID !== userId) {
    classesMessage.push(classes.other)
  }
  return (
    <div className={classesMessage.join(' ')} data-id={id}>
      <span>{content}</span>
    </div>
  );
};

export default Message;
