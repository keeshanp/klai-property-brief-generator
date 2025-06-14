
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
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemMessage = `You are a helpful assistant for KLAP Property Group, a property sourcing company in the North East of England. The user, ${userName}, has just submitted a contact form. Be helpful, concise, and friendly. Their name is ${userName}.`;
      
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            { role: 'system', content: systemMessage },
            ...messages.map(m => ({role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content})),
            userMessage
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error?.message || 'Failed to get response from AI');
      }

      const data = await response.json();
      const botMessage: Message = { role: 'assistant', content: data.choices[0].message.content };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
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
          <p className="text-muted-foreground">Please enter your Perplexity API key to start chatting. For a more permanent and secure solution, we recommend integrating with Supabase.</p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="Perplexity API Key"
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
