import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(
    () => localStorage.getItem('chatbotOpen') === 'true'
  );
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to the Law and Governance Assistant! How can I assist you with your legal or constitutional queries today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatbotOpen', isOpen);
  }, [isOpen]);

  const generateResponse = async (prompt) => {
    try {
      const response = await axios.post(
        'https://api.cohere.ai/v1/generate',
        {
          model: 'command-xlarge-nightly',
          prompt: prompt,
          max_tokens: 300,
          temperature: 0.9,
          k: 0,
          stop_sequences: [],
          return_likelihoods: 'NONE',
        },
        {
          headers: {
            Authorization: `Bearer GstpGkjpCDH1x7cTMDrOHr9oSGnZhimtZZ28DPo0`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.generations[0].text.trim();
    } catch (error) {
      console.error('Error calling Cohere API:', error);
      return 'Sorry, I encountered an error. Please try again.';
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const conversationHistory = newMessages
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join('\n');
    const prompt = `${conversationHistory}\nbot:`;

    try {
      const botResponse = await generateResponse(prompt);
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 p-6 bg-[#005f73] text-white rounded-full shadow-lg hover:bg-[#004e5f] transition-all flex items-center justify-center"
        style={{ width: '70px', height: '70px', zIndex: 1000 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 md:w-[480px] bg-white rounded-lg shadow-lg flex flex-col z-50 h-[80vh]">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-2xl font-semibold text-[#005f73]">Law Assistant</h3>
        <button onClick={toggleChatbot} className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              msg.sender === 'user'
                ? 'bg-[#005f73] text-white self-end'
                : 'bg-gray-200 text-black self-start'
            }`}
            style={{ maxWidth: '80%' }}
          >
            <span style={{ fontSize: '1.125rem' }}>{msg.text}</span>
          </div>
        ))}
        {loading && <div className="p-4 bg-gray-200 rounded-lg self-start">Thinking...</div>}
      </div>
      <div className="flex items-center border-t border-gray-200 p-4">
        <input
          type="text"
          placeholder="Ask me anything about law..."
          className="flex-grow p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005f73] text-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 p-3 bg-[#005f73] text-white rounded-lg hover:bg-[#004e5f] transition-all text-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
