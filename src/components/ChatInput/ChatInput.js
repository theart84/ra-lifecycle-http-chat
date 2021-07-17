import React, {useState} from 'react';

const ChatInput = ({addNewMessage}) => {
  const [inputMessage, setInputMessage] = useState('');

  const onChangeHandler = (event) => {
    const {value} = event.target;
    setInputMessage(value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNewMessage(inputMessage);
    setInputMessage('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="inputChat" className="form-label">Поле для ваших сообщений</label>
        <input type="text" className="form-control" id="inputChat" onChange={onChangeHandler} value={inputMessage}/>
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
};

export default ChatInput;
