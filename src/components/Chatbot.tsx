import { Bot, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Investing options
const timeframeOptions = ["Within the next month", "1 - 3 months", "3 - 6 months", "Just researching at the moment"];
const budgetOptions = ["<£50,000", "£50,000 - £100,000", "£100,000 - £150,000", "£200,000+", "Prefer not to say"];

// Selling options
const propertyTypeOptions = ["Detached House", "Semi-Detached House", "Terraced House", "Flat / Apartment", "Bungalow", "Other"];
const conditionOptions = ["Excellent / Recently Renovated", "Good / Well-maintained", "Average / Needs some updating", "Needs significant renovation"];
const sellingTimeframeOptions = ["Ready to sell now / ASAP", "Within the next 3-6 months", "Just curious about the value", "Planning for later in the year"];


const Chatbot = ({ userName, interest }: { userName: string, interest: 'selling' | 'investing' }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [leadData, setLeadData] = useState({ 
    // Investing flow
    goal: '', 
    timeframe: '', 
    budget: '', 
    email: '', 
    callTime: '', 
    additionalInfo: '',
    // Selling flow
    address: '',
    propertyType: '',
    bedroomsBathrooms: '',
    condition: '',
    sellingTimeframe: '',
    contactDetails: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (userName && step === 0) {
      if (interest === 'selling') {
        setMessages([
          { role: 'assistant', content: `Hello ${userName}! Thank you for considering us to help with your property journey. I'm here to gather a few initial details for a free, no-obligation valuation from our local experts.` },
          { role: 'assistant', content: "To start, could you please provide the full address of the property you're thinking of selling, including the postcode?" }
        ]);
        setStep(1); // selling step 1: awaiting address
      } else { // 'investing' flow
        setMessages([
            { role: 'assistant', content: `Hi ${userName || 'there'}! Thanks for your interest in our work. I'm here to ask a few quick questions about your project to make sure we connect you with the right person on our team. It should only take a minute.` },
            { role: 'assistant', content: "To start, could you tell me a little about the main goal you're hoping to achieve?" }
        ]);
        setStep(1); // investing step 1: awaiting goal
      }
    }
  }, [userName, step, interest]);
  
  const handleOptionClick = (option: string, type: string) => {
    const userMessage: Message = { role: 'user', content: option };
    setMessages(prev => [...prev, userMessage]);

    if (interest === 'investing') {
      if (type === 'timeframe' && step === 2) {
        setLeadData(prev => ({...prev, timeframe: option}));
        setTimeout(() => {
          setMessages(prev => [...prev,
            { role: 'assistant', content: "Perfect, that's really helpful. To help us suggest the best solutions, could you select the approximate budget you're working with for this project?" }
          ]);
          setStep(3); // investing step 3: awaiting budget
        }, 500);
      } else if (type === 'budget' && step === 3) {
        setLeadData(prev => ({...prev, budget: option}));
        setTimeout(() => {
          setMessages(prev => [...prev,
            { role: 'assistant', content: "Excellent, that's everything I need. Thank you! The final step is for me to get your email address, and then a member of our team will be in touch with a tailored response very shortly." }
          ]);
          setStep(4); // investing step 4: awaiting email
        }, 500);
      }
    } else if (interest === 'selling') {
        if (type === 'propertyType' && step === 2) {
            setLeadData(prev => ({...prev, propertyType: option}));
            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'assistant', content: "Understood. How many bedrooms and how many bathrooms does the property have?" }]);
                setStep(3); // selling step 3: awaiting bed/bath
            }, 500);
        } else if (type === 'condition' && step === 4) {
            setLeadData(prev => ({...prev, condition: option}));
            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'assistant', content: "We're almost done. To help us understand your situation, could you tell me what your timeframe for selling is?" }]);
                setStep(5); // selling step 5: awaiting timeframe
            }, 500);
        } else if (type === 'sellingTimeframe' && step === 5) {
            setLeadData(prev => ({...prev, sellingTimeframe: option}));
            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'assistant', content: "Perfect, that's all the property information I need. Thank you. The final step is to get your contact details so one of our local agents can reach out to schedule your free valuation and discuss the next steps." }, {role: 'assistant', content: "Could you please provide your full name, email address, and the best phone number to reach you on?"}]);
                setStep(6); // selling step 6: awaiting contact details
            }, 500);
        }
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const isInputDisabled = () => {
      if (interest === 'investing') return step === 2 || step === 3 || step === 7;
      if (interest === 'selling') return step === 2 || step === 4 || step === 5 || step === 7;
      return false;
    }
    if (isInputDisabled()) return;

    const userMessage: Message = { role: 'user', content: input };
    const currentInput = input;
    setInput('');
    setMessages(prev => [...prev, userMessage]);
    
    if (interest === 'investing') {
      if (step === 1) { // Awaiting goal
        setLeadData(prev => ({ ...prev, goal: currentInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: "That sounds like a great project! What is your ideal timeframe for getting this done?" }]);
          setStep(2);
        }, 500);
      } else if (step === 4) { // Awaiting email
        if (!/\S+@\S+\.\S+/.test(currentInput)) {
          setTimeout(() => { setMessages(prev => [...prev, { role: 'assistant', content: "Please provide a valid email address." }]); }, 500);
          return;
        }
        setLeadData(prev => ({ ...prev, email: currentInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: "Thank you. And when is a good time for a member of our team to call you for a brief, no-obligation chat?" }]);
          setStep(5);
        }, 500);
      } else if (step === 5) { // Awaiting call time
        setLeadData(prev => ({ ...prev, callTime: currentInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: "Great. Finally, is there any specific information you'd like us to prepare for you or any particular questions you'd like us to answer during the call?" }]);
          setStep(6);
        }, 500);
      } else if (step === 6) { // Awaiting additional info
        setLeadData(prev => {
          const finalData = { ...prev, additionalInfo: currentInput };
          console.log('Investing lead data collected:', finalData);
          return finalData;
        });
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: "Perfect! We have everything we need. A specialist from our team will be in touch. To speed things up, you can book a call directly here: https://calendly.com/keeshan-klappropertygroup/30min?preview_source=et_card&month=2025-06. Thank you!" }]);
          setStep(7);
        }, 500);
      } else {
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', content: "That's a great question for our team. I can make sure they address that in their follow-up. For now, my job is just to get these initial details for them." }]);
        }, 500);
      }
    } else if (interest === 'selling') {
      if (step === 1) { // awaiting address
        setLeadData(prev => ({ ...prev, address: currentInput }));
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', content: "Thank you. And what type of property is it?" }]);
            setStep(2);
        }, 500);
      } else if (step === 3) { // awaiting bed/bath
          setLeadData(prev => ({ ...prev, bedroomsBathrooms: currentInput }));
          setTimeout(() => {
              setMessages(prev => [...prev, { role: 'assistant', content: "That's helpful. How would you describe the current condition of the property?" }]);
              setStep(4);
          }, 500);
      } else if (step === 6) { // awaiting contact details
          setLeadData(prev => {
              const finalData = { ...prev, contactDetails: currentInput };
              console.log('Selling lead data collected:', finalData);
              return finalData;
          });
          setTimeout(() => {
              setMessages(prev => [...prev, { role: 'assistant', content: `Thank you, ${userName}. All your information has been securely passed to our team. An agent who specialises in your area will be in touch within 24 hours to arrange a convenient time for your valuation. To speed things up, you can book a call directly here: https://calendly.com/keeshan-klappropertygroup/30min?preview_source=et_card&month=2025-06. We look forward to speaking with you soon!` }]);
              setStep(7);
          }, 500);
      } else {
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', content: "I can't provide a valuation myself, but I can arrange for one of our expert agents to give you an accurate market appraisal. Shall we continue?" }]);
        }, 500);
      }
    }
  };
  
  const isInputDisabled = () => {
    if (interest === 'investing') return step === 2 || step === 3 || step === 7;
    if (interest === 'selling') return step === 2 || step === 4 || step === 5 || step === 7;
    return false;
  };

  const renderMessageContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return content.split(urlRegex).map((part, i) => {
        if (part.match(urlRegex)) {
            return (
                <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline">
                    {part}
                </a>
            );
        }
        return part;
    });
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
                {renderMessageContent(msg.content)}
              </div>
              {msg.role === 'user' && <div className="p-2 rounded-full bg-primary/20 shrink-0"><User className="w-6 h-6 text-primary" /></div>}
            </div>
          ))}
          {/* Investing Flow Options */}
          {interest === 'investing' && step === 2 && (
            <div className="flex flex-wrap gap-2 justify-center p-2">
              {timeframeOptions.map(option => <Button key={option} onClick={() => handleOptionClick(option, 'timeframe')} variant="outline" size="sm">{option}</Button>)}
            </div>
          )}
          {interest === 'investing' && step === 3 && (
            <div className="flex flex-wrap gap-2 justify-center p-2">
              {budgetOptions.map(option => <Button key={option} onClick={() => handleOptionClick(option, 'budget')} variant="outline" size="sm">{option}</Button>)}
            </div>
          )}
          {/* Selling Flow Options */}
          {interest === 'selling' && step === 2 && (
             <div className="flex flex-wrap gap-2 justify-center p-2">
              {propertyTypeOptions.map(option => <Button key={option} onClick={() => handleOptionClick(option, 'propertyType')} variant="outline" size="sm">{option}</Button>)}
            </div>
          )}
          {interest === 'selling' && step === 4 && (
             <div className="flex flex-wrap gap-2 justify-center p-2">
              {conditionOptions.map(option => <Button key={option} onClick={() => handleOptionClick(option, 'condition')} variant="outline" size="sm">{option}</Button>)}
            </div>
          )}
          {interest === 'selling' && step === 5 && (
             <div className="flex flex-wrap gap-2 justify-center p-2">
              {sellingTimeframeOptions.map(option => <Button key={option} onClick={() => handleOptionClick(option, 'sellingTimeframe')} variant="outline" size="sm">{option}</Button>)}
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
            disabled={isInputDisabled()}
          />
          <Button onClick={handleSendMessage} disabled={isInputDisabled()}>
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
