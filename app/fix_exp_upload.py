import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'r') as f:
    content = f.read()

# Add Link and Upload to lucide-react imports
content = content.replace("import { Briefcase", "import { Link, Upload, Briefcase")

# Add handleFileUpload to ExperienceCard
hook_insert = """
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && images.length < 3) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images, reader.result];
        setImages(newImages);
        onUpdate({ ...exp, images: newImages });
      };
      reader.readAsDataURL(file);
    }
  };
"""
content = re.sub(r'(const removeImage = .*?;\n  };)', f'\\1\n{hook_insert}', content, flags=re.DOTALL)

# Replace Tambah Foto button with two buttons
old_button = """            {images.length < 3 && (
              <button onClick={addImage} className="w-full py-1.5 flex items-center justify-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
                <PlusCircle className="w-4 h-4" /> Tambah Foto
              </button>
            )}"""

new_button = """            {images.length < 3 && (
              <div className="flex gap-2">
                <button onClick={addImage} className="flex-1 py-1.5 flex items-center justify-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
                  <Link className="w-3.5 h-3.5" /> Tambah URL
                </button>
                <label className="flex-1 py-1.5 flex items-center justify-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-lg text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors cursor-pointer">
                  <Upload className="w-3.5 h-3.5" /> Upload File
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                </label>
              </div>
            )}"""

content = content.replace(old_button, new_button)

# Also update the display of the image field so that if it's a very long base64 string, it doesn't look ugly, or it shows an image preview.
# Let's add a tiny image preview if the image starts with 'http' or 'data:image'
old_input = """                <input 
                  type="text" 
                  value={img} 
                  onChange={(e) => updateImage(i, e.target.value)}
                  className="w-full bg-transparent text-[12px] text-[#2C2520] focus:outline-none" 
                  placeholder="URL Foto (https://...)"
                />"""

new_input = """                {img.startsWith('data:image') || img.startsWith('http') ? (
                  <img src={img} alt="preview" className="w-6 h-6 rounded object-cover mr-2 shrink-0 border border-[#E8DFD5]" />
                ) : null}
                <input 
                  type="text" 
                  value={img.startsWith('data:image') ? 'Base64 Encoded Image Data...' : img} 
                  onChange={(e) => updateImage(i, e.target.value)}
                  disabled={img.startsWith('data:image')}
                  className={`w-full bg-transparent text-[12px] focus:outline-none ${img.startsWith('data:image') ? 'text-[#837466] italic' : 'text-[#2C2520]'}`} 
                  placeholder="URL Foto (https://...)"
                />"""

content = content.replace(old_input, new_input)

with open('/home/leexy/portfolio/app/src/pages/admin/AdminExperience.jsx', 'w') as f:
    f.write(content)
