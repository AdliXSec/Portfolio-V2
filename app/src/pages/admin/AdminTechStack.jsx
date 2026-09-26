import { useState } from 'react';
import { Code2, PlusCircle, Trash2 } from 'lucide-react';
import { techCategories as initialTechStack, techstackModal } from '../../data/techstack';

function TechCategoryCard({ category, onRemove, onUpdate }) {
  const [items, setItems] = useState(category.items || []);

  const addItem = () => setItems([...items, '']);
  const updateItem = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
    onUpdate({ ...category, items: newItems });
  };
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onUpdate({ ...category, items: newItems });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm relative group flex flex-col h-full">
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <button className="px-3 py-1 bg-[#FAF4EE] text-[#2C2520] text-[12px] font-bold rounded border border-[#E8DFD5] hover:bg-[#F2EAE1]">Simpan</button>
        <button onClick={onRemove} className="p-1 bg-[#FFF0F0] text-[#D32F2F] rounded border border-[#FFCDD2] hover:bg-[#FFEBEE]">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      <div className="mb-4 pr-24">
        <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Nama Kategori</label>
        <input 
          type="text" 
          defaultValue={category.category} 
          className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[14px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" 
        />
      </div>
      
      <div className="flex-1">
        <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Item (Tech Stack)</label>
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center bg-[#FAF7F2] border border-[#E8DFD5] rounded-full pl-3 pr-1 py-1">
              <input 
                type="text" 
                value={item} 
                onChange={(e) => updateItem(i, e.target.value)}
                className="bg-transparent text-[12px] font-bold text-[#2C2520] focus:outline-none min-w-[60px]" 
                placeholder="Nama Item"
              />
              <button onClick={() => removeItem(i)} className="p-1 rounded-full text-[#D32F2F] hover:bg-[#FFF0F0]">
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          ))}
          <button onClick={addItem} className="px-3 py-1 flex items-center gap-1 bg-white border border-dashed border-[#C88238] text-[#C88238] rounded-full text-[12px] font-bold hover:bg-[#FAF4EE] transition-colors">
            <PlusCircle className="w-3 h-3" /> Tambah
          </button>
        </div>
      </div>
      
      <div className="mt-5 pt-4 border-t border-[#F0EAE1]">
        <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Icon (Nama Icon Lucide)</label>
        <input 
          type="text" 
          defaultValue={category.icon} 
          className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" 
        />
      </div>
    </div>
  );
}

export default function AdminTechStack() {

  const [techStack, setTechStack] = useState(initialTechStack || []);

  const addCategory = () => {
    setTechStack([...techStack, { category: '', items: [], icon: '' }]);
  };

  const removeCategory = (idx) => {
    setTechStack(techStack.filter((_, i) => i !== idx));
  };

  const updateCategory = (idx, updatedCategory) => {
    const newStack = [...techStack];
    newStack[idx] = updatedCategory;
    setTechStack(newStack);
  };

  return (
    <div className="py-6 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm">
        <div>
          <h1 className="text-[24px] font-bold text-[#2C2520] tracking-tight">Tech Stack & Tools</h1>
          <p className="text-[14px] text-[#685E55] mt-1">
            Kelola daftar bahasa pemrograman, framework, dan perangkat keras yang Anda kuasai.
          </p>
        </div>
        <button onClick={addCategory} className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C88238] hover:bg-[#B86F28] text-white text-[13px] font-semibold shadow-sm transition-all">
          <PlusCircle className="w-5 h-5" />
          <span>Tambah Kategori</span>
        </button>
      </div>

            {/* Modal Header Configuration */}
      <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm mb-2">
        <h2 className="text-[16px] font-bold text-[#2C2520] mb-4">Header Modal (Tampil saat node diklik)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Referensi (Ref)</label>
            <input type="text" defaultValue={techstackModal.ref} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kategori / Tag</label>
            <input type="text" defaultValue={techstackModal.tag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Modal (Title)</label>
            <input type="text" defaultValue={techstackModal.title} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan (Quote)</label>
            <input type="text" defaultValue={techstackModal.quote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {techStack.map((category, index) => (
          <TechCategoryCard 
            key={index} 
            category={category}
            onRemove={() => removeCategory(index)}
            onUpdate={(updated) => updateCategory(index, updated)}
          />
        ))}
      </div>
    </div>
  );
}
