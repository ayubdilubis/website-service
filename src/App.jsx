import { useEffect, useState } from 'react';
import { fetchServices } from './servicesApi.js';

function App() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-950/95 pb-10 shadow-[0_15px_60px_-30px_rgba(15,23,42,0.8)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950">
              Premium Web Studio
            </span>
            <p className="mt-4 text-2xl font-semibold sm:text-3xl">Jadikan bisnis Anda tampil mewah di dunia digital.</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="#services" className="transition hover:text-white">Layanan</a>
            <a href="#process" className="transition hover:text-white">Proses</a>
            <a href="#contact" className="transition hover:text-white">Kontak</a>
            <a href="https://wa.me/6283893726741" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-white">
              Dapatkan Penawaran
            </a>
          </nav>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-6">
          <div className="grid gap-12 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-xl backdrop-blur-xl lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Digital Luxury Experience</p>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Website premium untuk brand yang ingin dipercaya dan menjual lebih banyak.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Kami mendesain website yang tidak hanya menarik, tetapi juga berdampak pada konversi, kepercayaan, dan citra brand Anda.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#services" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                  Lihat Paket Premium
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-white">
                  Konsultasi Gratis
                </a>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.85)] backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Proyek</p>
                  <p className="mt-4 text-4xl font-semibold text-white">50+</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Website dan aplikasi yang sudah diluncurkan untuk klien bisnis.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.85)] backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Rating</p>
                  <p className="mt-4 text-4xl font-semibold text-white">4.9/5</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Kepuasan klien dengan desain, performa, dan support yang rapih.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.85)] backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Kecepatan</p>
                  <p className="mt-4 text-4xl font-semibold text-white">24h</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Respons cepat untuk konsultasi awal dan penjadwalan project.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6 shadow-md">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Kecepatan Launch</p>
                <p className="mt-4 text-4xl font-bold text-white">2-3 Minggu</p>
                <p className="mt-2 text-slate-400">Website siap tayang dengan proses yang terstruktur dan cepat.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6 shadow-md">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Branding</p>
                <p className="mt-4 text-4xl font-bold text-white">Fokus Premium</p>
                <p className="mt-2 text-slate-400">Desain yang menonjolkan kualitas dan nilai profesional brand Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section id="services" className="space-y-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Layanan Unggulan</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Solusi digital yang dirancang untuk bisnis yang serius.</h2>
          </div>

          {loading && <p className="text-center text-slate-300">Memuat layanan...</p>}
          {error && <p className="text-center text-red-400">{error}</p>}

          {!loading && !error && (
            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.id} className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl transition hover:-translate-y-1 hover:border-primary">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{service.title}</p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <div className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200">
                      {service.price}
                    </div>
                  </div>
                  <p className="mt-6 text-slate-400">{service.description}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    <span>Termasuk:</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Desain premium</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="process" className="mt-20 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Proses Kerja</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Proses yang transparan dan terukur.</h2>
              <p className="mt-4 max-w-xl text-slate-400">
                Dari analisis kebutuhan hingga peluncuran, setiap langkah dirancang untuk memastikan hasil berkualitas tinggi dan aksi cepat.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-950/90 p-6 text-slate-200">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">1. Konsultasi</p>
                <p className="mt-3 text-lg font-semibold text-white">Diskusi kebutuhan bisnis dan tujuan website.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6 text-slate-200">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">2. Desain & Pengembangan</p>
                <p className="mt-3 text-lg font-semibold text-white">Membangun website dengan UX terbaik dan tampilan premium.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6 text-slate-200">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">3. Launch & Support</p>
                <p className="mt-3 text-lg font-semibold text-white">Peluncuran dengan dukungan teknis dan pemeliharaan awal.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-20 space-y-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Klien Puas</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Pelanggan kami percaya dengan hasil kerja kami.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-xl">
              <p className="text-slate-400">“Desain webnya terasa sangat eksklusif dan prosesnya cepat. Timnya responsif dan detailnya sangat rapi.”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">Ari Setiawan</p>
                <p className="text-sm text-slate-500">Founder Brand Studio</p>
              </div>
            </article>
            <article className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-xl">
              <p className="text-slate-400">“Website kami sekarang terlihat lebih profesional dan meningkatkan kepercayaan pelanggan. Sangat direkomendasikan.”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">Maya Pratama</p>
                <p className="text-sm text-slate-500">Owner Toko Online</p>
              </div>
            </article>
            <article className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-xl">
              <p className="text-slate-400">“Detailnya sangat rapi dan desainnya tepat untuk brand premium kami. Workmanship-nya top.”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">Rina Budiman</p>
                <p className="text-sm text-slate-500">Marketing Manager</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Let's build trust</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Ambil langkah pertama untuk website yang tampak mahal.</h2>
              <p className="mt-4 text-slate-400">
                Hubungi kami untuk proposal yang jelas, timeline terukur, dan desain website profesional yang bisa langsung digunakan oleh bisnis Anda.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/90 p-8 text-slate-200 shadow-lg">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Kontak Cepat</p>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm text-slate-400">Email:</p>
                  <p className="text-lg font-semibold text-white">ayubdilbis@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp:</p>
                  <p className="text-lg font-semibold text-white">+62 838-9372-6741</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a href="mailto:ayubdilbis@gmail.com" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                  Kirim Email
                </a>
                <a href="https://wa.me/6283893726741" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/95 py-8 text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Premium Web Studio. Semua hak dilindungi.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#services" className="transition hover:text-white">Layanan</a>
            <a href="#process" className="transition hover:text-white">Proses</a>
            <a href="#contact" className="transition hover:text-white">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
