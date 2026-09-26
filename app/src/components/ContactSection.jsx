import { useState } from 'react';
import { profile } from '../data/profile';
import { contactData } from '../data/contact';
import { Mail, Send, AtSign, ExternalLink, Shield, Box, CheckCircle, Link2Icon, Link2, Link2OffIcon } from 'lucide-react';

const socialIconMap = { Github: ExternalLink, Linkedin: ExternalLink, Shield, Box, Link2Icon, Link2OffIcon, Link2 };

export default function ContactSection({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [folding, setFolding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFolding(true);
    setTimeout(() => {
      setFolding(false);
      setSubmitted(true);
      setEmail('');
      setScope('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="relative z-20 mt-10 pt-6" id="dispatch-card">
      <div className="relative w-full rounded-2xl bg-[#1a1c22]/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40">
        <div className="pushpin -top-3 left-10" />
        <div className="pushpin -top-3 right-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-1.5">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">{contactData.cardOverline}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-headline text-[22px] sm:text-[24px] text-on-surface font-semibold">
                Initiate Secure Consultation
              </h2>
              <button
                onClick={() => onOpenModal('dispatch')}
                className="px-2 py-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded text-[10px] font-mono tracking-widest uppercase transition-colors"
              >
                [VIEW DISPATCH DETAILS]
              </button>
            </div>
            <p className="font-body text-[13.5px] text-on-surface-variant mt-1 leading-relaxed">
              {contactData.cardDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-outline-variant/30">
              <div className="flex items-center gap-1.5 font-mono text-[12px] text-secondary">
                <AtSign className="w-4 h-4" />
                <a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="px-2.5 py-1 rounded bg-surface-container font-mono text-[11px] text-outline border border-outline-variant/30">
                PGP: {profile.pgp.substring(0, 9)}...{profile.pgp.substring(profile.pgp.length - 4)}
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {profile.socials.map((social) => {
                const Icon = socialIconMap[social.icon] || Shield;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors btn-press"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{social.platform}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form
              className={`flex flex-col gap-3 ${folding ? 'telegram-dispatch' : ''}`}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                <div className="flex-1">
                  <label className="sr-only" htmlFor="contact-email">Your Email</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-mono text-[13px] border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
                    id="contact-email"
                    placeholder="your.email@organization.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="sr-only" htmlFor="contact-scope">Subject</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-mono text-[13px] border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
                    id="contact-scope"
                    placeholder="Subject (e.g., Red Team Audit)"
                    required
                    type="text"
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="contact-message">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-mono text-[13px] border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner min-h-[100px] resize-y"
                  id="contact-message"
                  placeholder="Enter dispatch details..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-mono text-[12px] font-bold tracking-wider uppercase transition-all shadow-md shrink-0 flex items-center justify-center gap-2 btn-press"
                  type="submit"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT</span>
                </button>
              </div>
            </form>

            {/* Success */}
            {submitted && (
              <div className="mt-4 p-3 rounded-xl bg-secondary-container/30 text-secondary font-mono text-[12px] flex items-center gap-2 border border-secondary/30 stamp-animate">
                <CheckCircle className="w-5 h-5" />
                <span>DISPATCH CONFIRMED // MESSAGE ROUTED TO CIPHER-SEC ENCRYPTED INBOX.</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
