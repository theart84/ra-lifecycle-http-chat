import React from 'react';
import PropTypes from 'prop-types';
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

Message.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
}

export default Message;
