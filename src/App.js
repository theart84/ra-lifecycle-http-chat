import {useEffect, useState} from "react";
import shortid from 'shortid';
import ChatInput from "./components/ChatInput/ChatInput";
import MessageList from "./components/MessageList/MessageList";
import createRequest from "./api/createRrequest";
import './App.css';


function App() {
  const [messages, setMessages] = useState([]);
  const [lastMessageID, setLastMessageID] = useState(0);
  const [userId, setUserId] = useState(shortid.generate());

  useEffect(() => {
    const timerID = setInterval(async () => {
      window.localStorage.setItem('userId', userId);
      const response = await createRequest({id: lastMessageID, method: 'get'});
      if (response.length !== 0) {
        const lastReceivedId = response[response.length - 1].id;
        if (lastReceivedId !== lastMessageID) {
          setMessages(prevState => [...prevState, ...response]);
          setLastMessageID(lastReceivedId)
        }
      }
    }, 5000)
    return () => {
      clearTimeout(timerID)
    };
  });




  const addNewMessageHandler = async (message) => {
    try {
      const payload = {
        id: lastMessageID + 1,
        userId: userId,
        content: message
      }
      await createRequest({payload, method: 'post'});
    } catch (error) {
      return <p>Error: {error}</p>
    }
  }



  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <div className="card" style={{height: '900px', maxWidth: '600px'}}>
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="row">
              <div className="card flex-column-reverse p-2" style={{height: '730px', overflow: 'auto'}}>
                <MessageList messages={messages}/>
              </div>
            </div>
            <div className="row">
              <ChatInput addNewMessage={addNewMessageHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
