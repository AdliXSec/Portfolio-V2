import { Radio, Terminal, Trash2, Send, Clock, User, Shield } from 'lucide-react';
import { useState } from 'react';
import { livechatData } from '../../data/livechat';

export default function AdminLivechat() {
  const [messages, setMessages] = useState(livechatData || []);
  const [reply, setReply] = useState('');

  const sendReply = () => {
    if (!reply.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'Naufal Syahruradli',
      role: 'admin',
      message: reply,
      timestamp: 'Just now'
    };
    setMessages([...messages, newMsg]);
    setReply('');
  };

  const deleteMsg = (id) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  return (
    <div className="py-2 sm:py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[20px] sm:text-[24px] font-bold text-[#2C2520] tracking-tight flex items-center gap-2">
            <Radio className="w-6 h-6 text-[#C88238]" /> Live Chat Terminal
          </h1>
          <p className="text-[13px] sm:text-[14px] text-[#685E55] mt-1">
            Pantau dan balas pesan pengunjung secara real-time dari komponen "Secure Comms".
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#E8DFD5] rounded-xl shadow-sm flex flex-col h-[600px] overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-[#111317] p-4 flex items-center justify-between border-b border-[#2C2520]">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#fec486]" />
            <span className="font-mono text-[12px] uppercase tracking-widest text-[#fec486] font-bold">SECURE COMMS // INTERCEPT</span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 bg-[#1a1c20] p-4 sm:p-6 overflow-y-auto flex flex-col gap-4">
          {messages.map(msg => (
            <div key={msg.id} className={`flex flex-col w-full ${msg.role === 'admin' ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-2 mb-1">
                {msg.role === 'admin' ? (
                  <>
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#fec486] font-bold">[{msg.sender}]</span>
                    <Shield className="w-3.5 h-3.5 text-[#fec486]" />
                  </>
                ) : (
                  <>
                    <User className="w-3.5 h-3.5 text-[#85d6bb]" />
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#85d6bb] font-bold">[{msg.sender}]</span>
                  </>
                )}
              </div>
              <div className={`relative group max-w-[90%] sm:max-w-[75%] px-4 py-2.5 rounded-2xl ${msg.role === 'admin'
                  ? 'bg-[#fec486]/10 border border-[#fec486]/30 rounded-tr-sm'
                  : 'bg-[#85d6bb]/10 border border-[#85d6bb]/30 rounded-tl-sm'
                }`}>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#e2e2e8] leading-relaxed">
                  {msg.message}
                </p>

                {/* Delete Button (Hover) */}
                <button
                  onClick={() => deleteMsg(msg.id)}
                  className={`absolute top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/40 ${msg.role === 'admin' ? '-left-10' : '-right-10'}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-1 mt-1 text-[#d4c4b5]/50">
                <Clock className="w-3 h-3" />
                <span className="font-mono text-[9px]">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-[#111317] p-4 border-t border-[#2C2520] flex gap-3">
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendReply()}
            placeholder="Ketik balasan sebagai Admin (Terminal Mode)..."
            className="flex-1 bg-[#1a1c20] text-[#e2e2e8] px-4 py-2.5 rounded-lg border border-[#2C2520] focus:border-[#fec486] focus:outline-none font-mono text-[13px]"
          />
          <button
            onClick={sendReply}
            className="px-5 py-2.5 bg-[#fec486] hover:bg-[#e0a96d] text-[#111317] font-bold rounded-lg flex items-center justify-center transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
