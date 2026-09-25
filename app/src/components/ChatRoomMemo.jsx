import { MessageSquare, Lock, Terminal } from 'lucide-react';
import { profile } from '../data/profile';

export default function ChatRoomMemo({ id }) {
  return (
    <article 
      id={id}
      className="evidence-card rotate-[2deg] relative w-full rounded-2xl bg-[#14161a] border border-outline-variant/40 shadow-xl p-5 flex flex-col h-full"
    >
      {/* Paperclip */}
      <div className="absolute -top-3 left-10 w-4 h-10 rounded-full border-2 border-outline-variant/60 bg-transparent z-20 shadow-sm" />
      <div className="absolute -top-1 left-11 w-2 h-7 rounded-full border-2 border-[#111317] bg-transparent z-30" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">SECURE COMMS // CHAT</span>
        </div>
        <Lock className="w-3.5 h-3.5 text-secondary" />
      </div>

      {/* Chat History */}
      <div className="flex-1 flex flex-col gap-4 mb-4">
        {/* User (Owner) Message */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] text-outline">[{profile.name}]</span>
            <div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container border border-primary/30">
              <img src={profile.imageUrl} alt={profile.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[90%] shadow-sm">
            <p className="font-body text-[13px] text-on-surface leading-relaxed">
              Halo! Terima kasih sudah menyempatkan waktu untuk mampir dan melihat isi "Case Archive" saya. Semoga Anda menemukan sesuatu yang menarik di sini. Mari terhubung dan berkolaborasi! 👋
            </p>
          </div>
          <span className="font-mono text-[9px] text-outline-variant mt-0.5">14:00 UTC - ENCRYPTED</span>
        </div>
      </div>

      {/* Input area (disabled / coming soon) */}
      <div className="mt-auto pt-3 border-t border-outline-variant/30">
        <div className="w-full flex items-center justify-between bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-2.5 opacity-70">
          <span className="font-mono text-[11px] text-outline italic flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" />
            LIVE CHAT CHANNEL <span className="text-primary font-bold">// ESTABLISHING CONNECTION SOON...</span>
          </span>
        </div>
      </div>
    </article>
  );
}
