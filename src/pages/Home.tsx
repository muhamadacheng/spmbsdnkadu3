```javascript
{/* Status Pendaftaran */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm mb-8 shadow-sm border ${
    isClosed
      ? 'bg-red-100 text-red-700 border-red-200'
      : 'bg-blue-100 text-blue-700 border-blue-200'
  }`}
>
  <span className="relative flex h-3 w-3">
    {!isClosed && (
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
    )}

    <span
      className={`relative inline-flex rounded-full h-3 w-3 ${
        isClosed ? 'bg-red-500' : 'bg-blue-500'
      }`}
    ></span>
  </span>

  {isClosed
    ? `Pendaftaran SPMB ${new Date().getFullYear()} Telah Ditutup`
    : `Pendaftaran SPMB ${new Date().getFullYear()} Telah Dibuka`}
</motion.div>

{/* Heading Landing Page */}
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
>
  Selamat Datang di <br className="hidden md:block" />

  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
    SD Negeri Kadu 3
  </span>

  <br />

  <span className="text-slate-800 text-4xl md:text-5xl">
    Membangun Generasi Cerdas & Berkarakter
  </span>
</motion.h1>

{/* Deskripsi */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
>
  Bergabunglah bersama SD Negeri Kadu 3. Kami berkomitmen memberikan
  pendidikan dasar terbaik dengan fasilitas modern dan tenaga pendidik
  profesional.
</motion.p>

{/* Alur SPMB */}
<section
  id="alur"
  className="py-24 bg-slate-900 text-white relative overflow-hidden"
>
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    <div className="text-center mb-16">

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Alur Pendaftaran SPMB SD Negeri Kadu 3
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto text-lg">
        Ikuti langkah-langkah mudah berikut untuk mendaftarkan putra/putri Anda di SD Negeri Kadu 3.
      </p>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-slate-950 text-white py-10">

  <div className="max-w-7xl mx-auto px-4">

    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

      <div>

        <h3 className="text-2xl font-bold">
          SD Negeri Kadu 3
        </h3>

        <p className="text-slate-400 mt-2">
          Membangun Generasi Cerdas dan Berkarakter.
        </p>

      </div>

      <div className="text-slate-400 text-sm">
        © {new Date().getFullYear()} SD Negeri Kadu 3
      </div>

    </div>

    <div className="text-center mt-6 text-slate-400">
      © {new Date().getFullYear()} SD Negeri Kadu 3 - Sistem SPMB Online
    </div>

  </div>
</footer>
```
