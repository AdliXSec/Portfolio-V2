import re

with open('/home/leexy/portfolio/app/src/pages/admin/AdminContact.jsx', 'r') as f:
    content = f.read()

# First, define the new standard Header Modal block
header_modal_block = """
      {/* Modal Header Configuration */}
      <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] shadow-sm mb-2">
        <h2 className="text-[16px] font-bold text-[#2C2520] mb-4">Header Modal (Tampil saat node diklik)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Referensi (Ref)</label>
            <input type="text" defaultValue={initialContactData.modalRef} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kategori / Tag</label>
            <input type="text" defaultValue={initialContactData.modalTag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Modal (Title)</label>
            <input type="text" defaultValue={initialContactData.modalTitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan (Quote)</label>
            <input type="text" defaultValue={initialContactData.modalQuote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
        </div>
      </div>
"""

# Insert the header_modal_block right above `<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">`
content = content.replace(
    '<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">',
    header_modal_block + '\n      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">'
)

# Next, we need to remove those 4 inputs from the Dispatch card
old_dispatch_inputs = """          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Referensi Header (Ref)</label>
            <input type="text" defaultValue={initialContactData.modalRef} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238] mb-3" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Tag Layanan</label>
            <input type="text" defaultValue={initialContactData.modalTag} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Judul Penawaran Utama</label>
            <input type="text" defaultValue={initialContactData.modalTitle} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] font-bold text-[#2C2520] focus:outline-none focus:border-[#C88238]" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#865305] uppercase tracking-wider mb-1.5">Kutipan Penawaran (Quote)</label>
            <textarea rows="2" defaultValue={initialContactData.modalQuote} className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-lg text-[13px] text-[#2C2520] font-serif italic focus:outline-none focus:border-[#C88238] resize-none"></textarea>
          </div>
          <div>"""

content = content.replace(old_dispatch_inputs, "          <div>")

with open('/home/leexy/portfolio/app/src/pages/admin/AdminContact.jsx', 'w') as f:
    f.write(content)
