```javascript
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import {
  BookOpen,
  Users,
  Trophy,
  ChevronRight,
  CheckCircle2,
  Calendar,
  FileText,
  CheckSquare,
  AlertCircle,
  School,
  Star,
  GraduationCap,
  Sparkles
} from 'lucide-react';

import { useSettings } from '../context/SettingsContext';

export default function Home() {
  const { settings } = useSettings();

  const isClosed = settings?.statusPendaftaran === 'Tutup';

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },

    visible: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-32">

        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center ${
            settings?.gambarHeaderBeranda
              ? 'opacity-30'
              : 'opacity-10'
          }`}
          style={{
            backgroundImage: `url('${
              settings?.gambarHeaderBeranda ||
              'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop'
            }')`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-green-50/90" />

        {/* Floating Effect */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          <div className="text-center max-w-4xl mx-auto">

            {/* Badge */}
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
                    isClosed
                      ? 'bg-red-500'
                      : 'bg-blue-500'
                  }`}
                ></span>
              </span>

              {isClosed
                ? `Pendaftaran PPDB ${new Date().getFullYear()} Ditutup`
                : `Pendaftaran SPMB ${new Date().getFullYear()} Dibuka`}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Selamat Datang di <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500">
                SD Negeri Kadu 3
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Sekolah dasar modern yang berkomitmen membangun generasi
              cerdas, berkarakter, kreatif, dan siap menghadapi masa depan.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >

              {isClosed ? (
                <button
                  disabled
                  className="inline-flex justify-center items-center gap-2 bg-slate-400 text-white px-8 py-4 rounded-full text-lg font-semibold cursor-not-allowed"
                >
                  <AlertCircle size={20} />
                  Pendaftaran Ditutup
                </button>
              ) : (
                <Link
                  to="/daftar"
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:-translate-y-1"
                >
                  Daftar Sekarang
                  <ChevronRight size={20} />
                </Link>
              )}

              <a
                href="#alur"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-sm"
              >
                Lihat Alur SPMB
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              {
                icon: <Users size={28} />,
                value: '350+',
                label: 'Siswa Aktif',
                color: 'from-blue-500 to-cyan-500',
              },

              {
                icon: <GraduationCap size={28} />,
                value: '25+',
                label: 'Guru Profesional',
                color: 'from-green-500 to-emerald-500',
              },

              {
                icon: <School size={28} />,
                value: '15+',
                label: 'Ruang Kelas',
                color: 'from-orange-500 to-amber-500',
              },

              {
                icon: <Star size={28} />,
                value: '20+',
                label: 'Prestasi',
                color: 'from-pink-500 to-rose-500',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 text-center hover:-translate-y-2 transition-all duration-300"
              >

                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3 className="text-3xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                <p className="text-slate-500 mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >

            {[
              {
                icon: <BookOpen className="text-blue-500" size={32} />,
                title: 'Kurikulum Modern',
                desc: 'Pembelajaran adaptif berbasis kurikulum merdeka.',
              },

              {
                icon: <Users className="text-green-500" size={32} />,
                title: 'Guru Profesional',
                desc: 'Tenaga pengajar berpengalaman dan berdedikasi.',
              },

              {
                icon: <Trophy className="text-amber-500" size={32} />,
                title: 'Fasilitas Lengkap',
                desc: 'Lab komputer, perpustakaan, dan ruang nyaman.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Aktivitas Sekolah
            </h2>

            <p className="text-slate-600 text-lg">
              Suasana belajar yang nyaman dan menyenangkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop',

              'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070&auto=format&fit=crop',

              'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop',
            ].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-3xl shadow-xl group"
              >

                <img
                  src={img}
                  alt="Gallery Sekolah"
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-slate-900">
              Apa Kata Orang Tua?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: 'Ibu Siti',
                text: 'Sekolah sangat nyaman dan gurunya ramah.',
              },

              {
                name: 'Pak Ahmad',
                text: 'Anak saya berkembang sangat baik.',
              },

              {
                name: 'Ibu Rina',
                text: 'Fasilitas lengkap dan pembelajaran modern.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >

                <Sparkles className="text-yellow-500 mb-4" />

                <p className="text-slate-600 leading-relaxed mb-6">
                  "{item.text}"
                </p>

                <h4 className="font-bold text-slate-900">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUR */}
      <section
        id="alur"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              Alur Pendaftaran SPMB
            </h2>

            <p className="text-slate-400 text-lg">
              Ikuti langkah mudah berikut untuk mendaftar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              {
                step: '01',
                icon: <FileText size={28} />,
                title: 'Isi Formulir',
              },

              {
                step: '02',
                icon: <BookOpen size={28} />,
                title: 'Upload Berkas',
              },

              {
                step: '03',
                icon: <CheckSquare size={28} />,
                title: 'Verifikasi',
              },

              {
                step: '04',
                icon: <Calendar size={28} />,
                title: 'Pengumuman',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-3xl p-8 text-center border border-slate-700"
              >

                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center mb-6 relative">

                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-blue-600 text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </div>

                  {item.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
        </div>
      </footer>
    </div>
  );
}
```
