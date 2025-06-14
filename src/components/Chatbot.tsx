
import { Bot, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = ({ userName }: { userName: string }) => {
  const [apiKey, setApiKey] = useState('');
  const [hasApiKey, setHasApiKey] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (userName && hasApiKey) {
        setMessages([
            { role: 'assistant', content: `Hello ${userName || 'there'}! Thanks for your interest. How can I help you further today?` }
        ]);
    }
  }, [userName, hasApiKey]);
  
  const handleApiKeySubmit = () => {
    if (apiKey.trim() === '') {
      toast({ title: "API Key is required", variant: 'destructive' });
      return;
    }
    setHasApiKey(true);
    toast({ title: "API Key set successfully!" });
  };

  const handleSendMessage = async () => {
    if (input.trim() === '' || isLoading || !hasApiKey) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const systemInstruction = {
        parts: [{
          text: `You are a helpful assistant for KLAP Property Group, a property sourcing company in the North East of England. The user, ${userName}, has just submitted a contact form. Be helpful, concise, and friendly. Their name is ${userName}.`
        }]
      };

      const contents = newMessages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: systemInstruction,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error?.message || 'Failed to get response from AI');
      }

      const data = await response.json();

      if (!data.candidates || data.candidates.length === 0) {
        throw new Error("Response was blocked due to safety concerns. Please modify your prompt.");
      }

      const botMessageContent = data.candidates[0].content.parts[0].text;
      const botMessage: Message = { role: 'assistant', content: botMessageContent };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
      // remove the user message that caused the error
      setMessages((prev) => prev.slice(0, prev.length - 1));
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasApiKey) {
    return (
      <Card className="w-full max-w-2xl mx-auto animate-fade-in-up">
        <CardHeader>
          <CardTitle>Chatbot Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">Please enter your Google AI API key to start chatting. You can get one from Google AI Studio. For a more permanent and secure solution, we recommend integrating with Supabase.</p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="Google AI API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleApiKeySubmit()}
            />
            <Button onClick={handleApiKeySubmit}>Start Chat</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

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
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isLoading}
          />
          <Button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
