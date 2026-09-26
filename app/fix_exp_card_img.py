import re

with open('/home/leexy/portfolio/app/src/components/ExperienceCard.jsx', 'r') as f:
    content = f.read()

# Target block
old_block = """            <div className="flex items-baseline justify-between">
              <span className={`font-mono text-[11px] font-bold ${exp.color === 'secondary' ? 'text-[#006650]' : exp.color === 'primary' ? 'text-[#633d09]' : 'text-[#554b38]'
                }`}>{exp.period}</span>
              <span className="text-[10px] font-mono text-[#6c614c]">{exp.location}</span>
            </div>
            <div className="font-body text-[15px] font-bold text-[#1a1c20] leading-snug">{exp.role}</div>"""

new_block = """            <div className="flex items-baseline justify-between">
              <span className={`font-mono text-[11px] font-bold ${exp.color === 'secondary' ? 'text-[#006650]' : exp.color === 'primary' ? 'text-[#633d09]' : 'text-[#554b38]'
                }`}>{exp.period}</span>
              <span className="text-[10px] font-mono text-[#6c614c]">{exp.location}</span>
            </div>
            
            {exp.images && exp.images.length > 0 && (
              <div className={`grid gap-1.5 mt-1.5 mb-1 ${exp.images.length === 1 ? 'grid-cols-1' : exp.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {exp.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="w-full h-16 rounded overflow-hidden border border-[#cfbfa8] opacity-90 shadow-sm">
                    <img src={img} alt="Experience proof" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
            
            <div className="font-body text-[15px] font-bold text-[#1a1c20] leading-snug">{exp.role}</div>"""

content = content.replace(old_block, new_block)

with open('/home/leexy/portfolio/app/src/components/ExperienceCard.jsx', 'w') as f:
    f.write(content)
