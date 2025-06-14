
import { Bot, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const timeframeOptions = ["Within the next month", "1 - 3 months", "3 - 6 months", "Just researching at the moment"];
const budgetOptions = ["<£50,000", "£50,000 - £100,000", "£100,000 - £150,000", "£200,000+", "Prefer not to say"];

const Chatbot = ({ userName }: { userName: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: initial, 1: awaiting goal, 2: awaiting timeframe, 3: awaiting budget, 4: awaiting email, 5: done
  const [leadData, setLeadData] = useState({ goal: '', timeframe: '', budget: '', email: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (userName && step === 0) {
        setMessages([
            { role: 'assistant', content: `Hi ${userName || 'there'}! Thanks for your interest in our work. I'm here to ask a few quick questions about your project to make sure we connect you with the right person on our team. It should only take a minute.` },
            { role: 'assistant', content: "To start, could you tell me a little about the main goal you're hoping to achieve?" }
        ]);
        setStep(1);
    }
  }, [userName, step]);
  
  const handleOptionClick = (option: string, type: 'timeframe' | 'budget') => {
    const userMessage: Message = { role: 'user', content: option };
    setMessages(prev => [...prev, userMessage]);

    if (type === 'timeframe' && step === 2) {
      setLeadData(prev => ({...prev, timeframe: option}));
      setTimeout(() => {
        setMessages(prev => [...prev,
          { role: 'assistant', content: "Perfect, that's really helpful. To help us suggest the best solutions, could you select the approximate budget you're working with for this project?" }
        ]);
        setStep(3);
      }, 500);
    } else if (type === 'budget' && step === 3) {
      setLeadData(prev => ({...prev, budget: option}));
      setTimeout(() => {
        setMessages(prev => [...prev,
          { role: 'assistant', content: "Excellent, that's everything I need. Thank you! The final step is for me to get your email address, and then a member of our team will be in touch with a tailored response very shortly." }
        ]);
        setStep(4);
      }, 500);
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === '' || step === 2 || step === 3 || step === 5) return;

    const userMessage: Message = { role: 'user', content: input };
    const currentInput = input;
    setInput('');
    setMessages(prev => [...prev, userMessage]);
    
    if (step === 1) { // Awaiting goal
      setLeadData(prev => ({ ...prev, goal: currentInput }));
      setTimeout(() => {
        setMessages(prev => [...prev, 
          { role: 'assistant', content: "That sounds like a great project! What is your ideal timeframe for getting this done?" }
        ]);
        setStep(2);
      }, 500);
    } else if (step === 4) { // Awaiting email
      if (!/\S+@\S+\.\S+/.test(currentInput)) {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: "Please provide a valid email address." }]);
        }, 500);
        return;
      }
      const finalData = { ...leadData, email: currentInput };
      setLeadData(finalData);
      console.log('Lead data collected:', finalData);

      setTimeout(() => {
        setMessages(prev => [...prev, 
          { role: 'assistant', content: "Got it. Thank you! We'll be in touch soon. Have a wonderful day." }
        ]);
        setStep(5);
      }, 500);
    } else {
        setTimeout(() => {
            setMessages(prev => [...prev, 
                { role: 'assistant', content: "That's a great question for our team. I can make sure they address that in their follow-up. For now, my job is just to get these initial details for them." }
            ]);
        }, 500);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in-up">
      <CardHeader>
        <CardTitle>Chat with us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 border rounded-md mb-4 bg-background/50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && <div className="p-2 rounded-full bg-secondary/20 shrink-0"><Bot className="w-6 h-6 text-secondary" /></div>}
              <div className={`rounded-lg px-4 py-2 max-w-[80%] break-words ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {msg.content}
              </div>
              {msg.role === 'user' && <div className="p-2 rounded-full bg-primary/20 shrink-0"><User className="w-6 h-6 text-primary" /></div>}
            </div>
          ))}
          {step === 2 && (
            <div className="flex flex-wrap gap-2 justify-center p-2">
              {timeframeOptions.map(option => <Button key={option} onClick={() => handleOptionClick(option, 'timeframe')} variant="outline" size="sm">{option}</Button>)}
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-wrap gap-2 justify-center p-2">
              {budgetOptions.map(option => <Button key={option} onClick={() => handleOptionClick(option, 'budget')} variant="outline" size="sm">{option}</Button>)}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={step === 2 || step === 3 || step === 5}
          />
          <Button onClick={handleSendMessage} disabled={step === 2 || step === 3 || step === 5}>
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
