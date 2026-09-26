import re

with open('/home/leexy/portfolio/app/src/data/modalData.jsx', 'r') as f:
    content = f.read()

# We look for the h4 tag inside the timeline body.
old_block = """                  <span>{exp.period}</span><span className="uppercase">{exp.location}</span>
                </div>
                <h4 className="text-on-surface font-bold text-[18px]">{exp.role} — {exp.company}</h4>"""

new_block = """                  <span>{exp.period}</span><span className="uppercase">{exp.location}</span>
                </div>
                
                {exp.images && exp.images.length > 0 && (
                  <div className={`grid gap-2 pt-2 pb-1 ${exp.images.length === 1 ? 'grid-cols-1' : exp.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {exp.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="w-full h-24 sm:h-32 rounded-lg overflow-hidden border border-outline-variant/30 shadow-sm opacity-90 hover:opacity-100 transition-opacity">
                        <img src={img} alt="Experience proof" className="w-full h-full object-cover cursor-pointer" onClick={() => onImageClick(img)} />
                      </div>
                    ))}
                  </div>
                )}
                
                <h4 className="text-on-surface font-bold text-[18px]">{exp.role} — {exp.company}</h4>"""

content = content.replace(old_block, new_block)

with open('/home/leexy/portfolio/app/src/data/modalData.jsx', 'w') as f:
    f.write(content)
