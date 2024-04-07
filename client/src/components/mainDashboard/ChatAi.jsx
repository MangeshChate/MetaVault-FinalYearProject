import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const ChatInterface = () => {
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([
    {
      role: 'system',
      content: 'You will follow the conversation and respond to the queries asked by the user.'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const apiUrl = "https://chatpostapp-23srkaehza-uc.a.run.app/palm2";

      const headersList = {
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify({
        user_input: inputText,
      });

      const reqOptions = {
        url: apiUrl,
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      const response = await axios.request(reqOptions);
      setConversation(prevConversation => [...prevConversation, { role: 'user', content: inputText }, { role: 'assistant', content: response.data.content }]);
      setInputText('');

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-4 text-white h-[92vh]">
      <div className="overflow-y-auto flex-grow container">
        {conversation.map((message, index) => (
          <div key={index} className={`flex mb-4 ${message.role === 'assistant' ? 'justify-end' : 'justify-start'}`}>
            {message.role === 'assistant' && (
              <div className="flex items-end ">
                <div className="  mr-2 text-xl flex justify-end">
                  <div className='rounded-xl p-5 w-[75%] white-blur-glass'>
                    {message.content}

                  </div>
                </div>
                <img src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg" alt="Assistant" className="w-9 h-8 rounded-full" />
              </div>
            )}
            {message.role === 'user' && (
              <div className="flex items-end ">
                <img src="https://gateway.pinata.cloud/ipfs/QmS7YQ9bFGH3WeLbLPJEKYHAyiEi6E5Vpr5tSi4Pkh6cKa" alt="User" className="w-9 h-8 rounded-full" />
                <div className=" r ml-2 text-xl">
                <div className='rounded-xl p-5  blue-blur-glass'>
                    {message.content}

                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        <input
          className=" p-4 w-[75%] rounded-full border  border-gray-700 focus:outline-none blue-blur-glass  text-xl font-mono focus:border-blue-500"
          placeholder="Type your message here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="p-2 rounded-r-lg  text-white  focus:outline-none"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Sending..." : (
            <img src="https://cdn-icons-png.freepik.com/256/11454/11454609.png" alt="" className='w-[50px] h-[50px]' />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
