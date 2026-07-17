'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function ChatRoom({ user }: { user: any }) {
  const supabase = createClient();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('chat_messages')
        .select('*, profiles(display_name)')
        .order('created_at', { ascending: true });
      if (data) setMessages(data);
    };
    fetchMessages();

    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chat_messages' },
        () => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await supabase.from('chat_messages').insert({
      user_id: user.id,
      content: newMessage,
    });
    setNewMessage('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto flex flex-col h-[600px] border border-stone-200">
      {/* Fenêtre de discussion simple */}
      <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-stone-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.user_id === user.id ? 'items-end' : 'items-start'}`}>
            <span className="text-xs text-stone-500 mb-1">{msg.profiles?.display_name || 'Membre'}</span>
            <div className={`p-3 rounded-2xl max-w-md ${msg.user_id === user.id ? 'bg-red-905 bg-red-900 text-white' : 'bg-stone-200 text-stone-800'}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Saisie */}
      <form onSubmit={sendMessage} className="p-4 border-t border-stone-200 flex bg-white">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Écrivez votre message..."
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-900"
        />
        <button type="submit" className="bg-red-900 text-white px-6 py-2 rounded-r-lg hover:bg-red-950 transition">
          Envoyer
        </button>
      </form>
    </div>
  );
}
