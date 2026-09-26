import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'r') as f:
    content = f.read()

# Add images state and handlers
hook_insert = """
  const [images, setImages] = useState(exp.images || []);
  const addImage = () => { if (images.length < 3) setImages([...images, '']); };
  const updateImage = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
    onUpdate({ ...exp, images: newImages });
  };
  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onUpdate({ ...exp, images: newImages });
  };
"""
content = re.sub(r'(const \[tags, setTags\] = useState\(exp.tags \|\| \[\]\);)', f'\\1\n{hook_insert}', content)

# Add images UI above tags or description
ui_insert = """
        <div className="mb-4">
          <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5 flex justify-between items-center">
            <span>Foto / Bukti (Maks 3)</span>
            <span className="text-[10px] text-[#685E55] font-normal">{images.length}/3 Foto</span>
          </label>
          <div className="space-y-2">
            {images.map((img, i) => (
              <div key={i} className="flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg pl-3 pr-1 py-1">
                <input 
                  type="text" 
                  value={img} 
                  onChange={(e) => updateImage(i, e.target.value)}
                  className="w-full bg-transparent text-[12px] text-[#2C2520] focus:outline-none" 
                  placeholder="URL Foto (https://...)"
                />
                <button onClick={() => removeImage(i)} className="p-1.5 rounded text-[#D32F2F] hover:bg-[#FFF0F0] shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {images.length < 3 && (
              <button onClick={addImage} className="w-full py-1.5 flex items-center justify-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
                <PlusCircle className="w-4 h-4" /> Tambah Foto
              </button>
            )}
          </div>
        </div>
"""
content = re.sub(r'(<div>\n\s*<label className="block text-\[11px\] font-bold text-\[#865305\] uppercase tracking-wider mb-1.5">Deskripsi Singkat \(Card\)</label>)', f'{ui_insert}\n        \\1', content)

# Also update the addExperience default properties to include `images: []`
content = content.replace("color: 'primary', description: '', tags: []", "images: [], color: 'primary', description: '', tags: []")

with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'w') as f:
    f.write(content)

