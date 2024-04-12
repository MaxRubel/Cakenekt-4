/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from 'react';
import firebase from "firebase/compat/app";
import MessageCard from './MessageCard';
import createNewMessage from '../../api/chat';
import GameContext from "../GameContext";
import uniqid from 'uniqid';

export default function Chat({ gameId }) {
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const db = firebase.database();
  const messagesEndRef = useRef(null);
  const { isPlayer } = useContext(GameContext)

  useEffect(() => {
    const messagesRef = db.ref('messages').orderByChild('gameId').equalTo(gameId);

    const onMessageAdded = (snapshot) => {
      const newMessage = snapshot.val();
      if (newMessage) {
        setAllMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    };
    const addedListener = messagesRef.on('child_added', onMessageAdded);
    return () => {
      messagesRef.off('child_added', addedListener);
    };
  }, [gameId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [allMessages]);

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage((preVal) => value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      gameId,
      message,
      player: isPlayer,
      timeStamp: new Date().toString(),
    }
    createNewMessage(payload).then(() => {
      setMessage((preVal) => '');
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div id="row1" >
        <div className='messages-container'>

          {allMessages.map((newMessage) => (
            <MessageCard key={uniqid()} message={newMessage} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form
          className="input-container"
          id="inputMessage"
          onSubmit={handleSubmit}
        >
          <div className="input-container" >
            <textarea
              className="form-control chat-message-input"
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type something..."
            />
          </div>
        </form>
      </div>
      <div id="row2 small">
      </div>

    </>
  );
}
