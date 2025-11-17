export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleId: string;
  excerpt: string;
  excerptId: string;
  content: string;
  contentId: string;
  image: string;
  category: string;
  categoryId: string;
  date: string;
  readTime: string;
  readTimeId: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "The-Evolution-of-Cybersecurity-in-the-Digital-Era",
    title: "The Evolution of Cybersecurity in the Digital Era",
    titleId: "Evolusi Cybersecurity di Era Digital",
    excerpt: "Cybersecurity is becoming increasingly complex in a connected world. Learn how modern strategies, AI, and user awareness are shaping the future of cybersecurity.",
    excerptId: "Keamanan siber semakin kompleks di dunia yang terhubung. Pelajari bagaimana strategi modern, AI, dan kesadaran pengguna membentuk masa depan cybersecurity.",
    content: `
    <p>The Evolution of Cybersecurity in the Digital Era</p>
    <p>Cybersecurity has become a top priority in an increasingly connected world. Cyber attacks are growing more sophisticated, requiring adaptive strategies to keep data and systems secure.</p>

    <h2>Artificial Intelligence Integration</h2>
    <p>AI is no longer just a buzzword—it's becoming an integral part of modern web development. From intelligent chatbots to personalized user experiences, AI-powered features are enhancing how users interact with websites. Machine learning algorithms can now predict user behavior, optimize content delivery, and even assist in code generation.</p>

    <h2>Progressive Web Apps (PWAs)</h2>
    <p>Progressive Web Apps continue to blur the line between web and native applications. With improved offline capabilities, push notifications, and near-native performance, PWAs offer the best of both worlds. Companies are increasingly adopting PWAs to provide seamless experiences across all devices without the need for separate native apps.</p>

    <h2>WebAssembly and Performance</h2>
    <p>WebAssembly (Wasm) is opening new possibilities for web applications by allowing developers to run high-performance code in the browser. This technology enables complex applications like video editors, 3D games, and scientific simulations to run directly in web browsers with near-native speed.</p>

    <h2>The Rise of Edge Computing</h2>
    <p>Edge computing is transforming how we think about web infrastructure. By processing data closer to the user, edge computing reduces latency and improves performance. This is particularly important for real-time applications and IoT devices.</p>

    <p>As developers, staying ahead of these trends is crucial. The future of web development is exciting, and those who embrace these technologies will be well-positioned to build the next generation of web applications.</p>
    `,
    contentId: `
    <p>Evolusi Keamanan Siber di Era Digital</p>
    <p>Keamanan siber menjadi prioritas utama di dunia yang semakin terhubung. Serangan siber semakin canggih, sehingga strategi adaptif diperlukan untuk menjaga data dan sistem tetap aman.</p>

    <h2>Integrasi Kecerdasan Buatan</h2>
    <p>AI kini bukan sekadar istilah populer—melainkan bagian penting dari pengembangan web modern. Mulai dari chatbot cerdas hingga pengalaman pengguna yang dipersonalisasi, fitur berbasis AI meningkatkan interaksi pengguna dengan website. Algoritma machine learning kini dapat memprediksi perilaku pengguna, mengoptimalkan penyampaian konten, bahkan membantu dalam pembuatan kode.</p>

    <h2>Progressive Web Apps (PWAs)</h2>
    <p>Progressive Web Apps terus mempersatukan pengalaman antara aplikasi web dan aplikasi native. Dengan kemampuan offline yang lebih baik, notifikasi push, dan performa hampir setara native, PWAs menawarkan yang terbaik dari kedua dunia. Perusahaan semakin banyak mengadopsi PWAs untuk memberikan pengalaman mulus di semua perangkat tanpa perlu membuat aplikasi native terpisah.</p>

    <h2>WebAssembly dan Performa</h2>
    <p>WebAssembly (Wasm) membuka kemungkinan baru bagi aplikasi web dengan memungkinkan pengembang menjalankan kode berkinerja tinggi langsung di browser. Teknologi ini memungkinkan aplikasi kompleks seperti editor video, game 3D, dan simulasi ilmiah berjalan langsung di browser dengan kecepatan mendekati native.</p>

    <h2>Kebangkitan Edge Computing</h2>
    <p>Edge computing mengubah cara kita memandang infrastruktur web. Dengan memproses data lebih dekat ke pengguna, edge computing mengurangi latensi dan meningkatkan performa. Hal ini sangat penting untuk aplikasi real-time dan perangkat IoT.</p>

    <p>Sebagai pengembang, tetap mengikuti tren ini sangat penting. Masa depan pengembangan web sangat menjanjikan, dan mereka yang memanfaatkan teknologi ini akan siap membangun generasi berikutnya dari aplikasi web.</p>
    `,
    image: "/assets/images/cyber.png",
    category: "Security",
    categoryId: "Keamanan",
    date: "2025-11-17",
    readTime: "5 min read",
    readTimeId: "5 menit baca"
  },
  {
    id: "2",
    slug: "Build-a-Simple-Portfolio-Website-with-React-&-Tailwind",
    title: "Build a Simple Portfolio Website with React & Tailwind",
    titleId: "Membuat Website Portofolio Sederhana dengan React & Tailwind",
    excerpt: "This tutorial guides you to create a simple portfolio website using React and Tailwind CSS. The site is responsive and easy to expand, featuring projects, skills, and contact information.",
    excerptId: "Pelajari prinsip-prinsip fundamental yang membuat antarmuka pengguna intuitif, mudah diakses, dan menarik secara visual.",
    content: `
<p>Building an effective portfolio website requires more than just showing projects—it also demands understanding structure, responsiveness, and user experience. Let's explore the core steps to create a modern portfolio website using React and Tailwind CSS.</p>

<h2>1. Setting Up the Project</h2>
<p>Start by creating a React project with Vite. It's fast, lightweight, and provides a solid foundation for your portfolio site.</p>
<pre><code>npm create vite@latest my-portfolio
cd my-portfolio
npm install
npm run dev</code></pre>
<p>Open your browser at <code>http://localhost:5173</code> to see the initial project.</p>

<h2>2. Install Tailwind CSS</h2>
<p>Tailwind CSS makes modern, responsive styling easy. After installation, configure it for React.</p>
<pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
<p>Edit <code>tailwind.config.js</code>:</p>
<pre><code>content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: { extend: {} },
plugins: [],</code></pre>
<p>Add to <code>src/index.css</code>:</p>
<pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>

<h2>3. Create Folder Structure</h2>
<p>A clear structure makes development easier:</p>
<pre><code>src/
  components/
    Navbar.jsx
    Footer.jsx
    ProjectCard.jsx
  pages/
    Home.jsx
  App.jsx</code></pre>

<h2>4. Create Navbar</h2>
<pre><code>import React from "react";

const Navbar = () => (
  &lt;nav className="p-5 bg-gray-800 text-white flex justify-between"&gt;
    &lt;h1 className="font-bold"&gt;Portfolio&lt;/h1&gt;
    &lt;div className="space-x-4"&gt;
      &lt;a href="#projects"&gt;Projects&lt;/a&gt;
      &lt;a href="#skills"&gt;Skills&lt;/a&gt;
      &lt;a href="#contact"&gt;Contact&lt;/a&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
);

export default Navbar;</code></pre>

<h2>5. Create ProjectCard</h2>
<pre><code>const ProjectCard = ({ title, description, link }) =&gt; (
  &lt;div className="border p-4 rounded shadow hover:shadow-lg transition"&gt;
    &lt;h2 className="font-bold text-lg"&gt;{title}&lt;/h2&gt;
    &lt;p&gt;{description}&lt;/p&gt;
    &lt;a href={link} target="_blank" className="text-blue-500"&gt;View Project&lt;/a&gt;
  &lt;/div&gt;
);

export default ProjectCard;</code></pre>

<h2>6. Home Page</h2>
<pre><code>import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Online Store Website", description: "React + Tailwind", link: "#" },
  { title: "Personal Portfolio", description: "React + Tailwind", link: "#" },
];

const Home = () =&gt; (
  &lt;div&gt;
    &lt;Navbar /&gt;
    &lt;section id="projects" className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6"&gt;
      {projects.map((p, i) =&gt; &lt;ProjectCard key={i} {...p} /&gt;)}
    &lt;/section&gt;
  &lt;/div&gt;
);

export default Home;</code></pre>

<h2>7. Running the Project</h2>
<p>After everything is ready, run the project:</p>
<pre><code>npm run dev</code></pre>
<p>Your portfolio website is now live at <code>http://localhost:5173</code>.</p>

    `,
    contentId: `
      <p>Membangun website portofolio yang efektif membutuhkan lebih dari sekadar menampilkan proyek—ini juga menuntut pemahaman tentang struktur, responsivitas, dan pengalaman pengguna. Mari kita lihat langkah-langkah inti untuk membuat website portofolio modern dengan React dan Tailwind CSS.</p>

<h2>1. Menyiapkan Proyek</h2>
<p>Mulailah dengan membuat proyek React menggunakan Vite. Proses ini cepat dan ringan, serta memberi fondasi yang solid untuk website portofolio kamu.</p>
<pre><code>npm create vite@latest my-portfolio
cd my-portfolio
npm install
npm run dev</code></pre>
<p>Buka browser di <code>http://localhost:5173</code> untuk melihat proyek awal.</p>

<h2>2. Instalasi Tailwind CSS</h2>
<p>Tailwind CSS memudahkan styling responsif dan modern. Setelah instalasi, konfigurasikan untuk bekerja dengan React.</p>
<pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
<p>Edit <code>tailwind.config.js</code>:</p>
<pre><code>content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: { extend: {} },
plugins: [],</code></pre>
<p>Tambahkan ke <code>src/index.css</code>:</p>
<pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>

<h2>3. Membuat Struktur Folder</h2>
<p>Struktur yang jelas memudahkan pengembangan:</p>
<pre><code>src/
  components/
    Navbar.jsx
    Footer.jsx
    ProjectCard.jsx
  pages/
    Home.jsx
  App.jsx</code></pre>

<h2>4. Membuat Navbar</h2>
<pre><code>import React from "react";

const Navbar = () => {
  return (
    &lt;nav className="p-5 bg-gray-800 text-white flex justify-between"&gt;
      &lt;h1 className="font-bold"&gt;Portofolio&lt;/h1&gt;
      &lt;div className="space-x-4"&gt;
        &lt;a href="#projects"&gt;Proyek&lt;/a&gt;
        &lt;a href="#skills"&gt;Skill&lt;/a&gt;
        &lt;a href="#contact"&gt;Kontak&lt;/a&gt;
      &lt;/div&gt;
    &lt;/nav&gt;
  );
};

export default Navbar;</code></pre>

<h2>5. Membuat Kartu Proyek (ProjectCard)</h2>
<pre><code>const ProjectCard = ({ title, description, link }) => {
  return (
    &lt;div className="border p-4 rounded shadow hover:shadow-lg transition"&gt;
      &lt;h2 className="font-bold text-lg"&gt;{title}&lt;/h2&gt;
      &lt;p&gt;{description}&lt;/p&gt;
      &lt;a href={link} target="_blank" className="text-blue-500"&gt;Lihat Proyek&lt;/a&gt;
    &lt;/div&gt;
  );
};

export default ProjectCard;</code></pre>

<h2>6. Halaman Home</h2>
<pre><code>import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Website Toko Online", description: "React + Tailwind", link: "#" },
  { title: "Portfolio Pribadi", description: "React + Tailwind", link: "#" },
];

const Home = () => {
  return (
    &lt;div&gt;
      &lt;Navbar /&gt;
      &lt;section id="projects" className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6"&gt;
        {projects.map((p, i) =&gt; &lt;ProjectCard key={i} {...p} /&gt;)}
      &lt;/section&gt;
    &lt;/div&gt;
  );
};

export default Home;</code></pre>

<h2>7. Menjalankan Proyek</h2>
<p>Setelah semua siap, jalankan proyek dan lihat hasilnya:</p>
<pre><code>npm run dev</code></pre>
<p>Website portofolio kamu sekarang dapat diakses di <code>http://localhost:5173</code>.</p>

    `,
    image: "/assets/images/web.png",
    category: "Web Development",
    categoryId: "Pengembangan Web",
    date: "2025-11-17",
    readTime: "10 min read",
    readTimeId: "10 menit baca"
  },
  {
    id: "3",
    slug: "Maintaining-Creativity-and-Productivity-in-the-Digital-Era",
    title: "Maintaining Creativity and Productivity in the Digital Era",
    titleId: "Menjaga Kreativitas dan Produktivitas di Era Digital",
    excerpt: "Learn how to maintain creativity and productivity in the digital era with daily routines, hobbies, digital detox, learning from others, and regular reflection. Boost focus and innovation without sacrificing quality of life.",
    excerptId: "Pelajari cara menjaga kreativitas dan produktivitas di era digital dengan strategi harian, hobi, digital detox, belajar dari orang lain, serta refleksi rutin. Tingkatkan fokus dan inovasi tanpa mengorbankan kualitas hidup.",
    content: `
      <p>In today’s fast-paced digital era, maintaining both creativity and productivity is a significant challenge. Distractions from social media, notifications, and work demands make it easy to lose focus. However, with the right strategies, we can stay productive without sacrificing creativity. Here are some strategies that can help:</p>

<h3>Establish a Daily Routine</h3>
<p>Start your day by setting your main priorities. Creating a clear task list ensures that your energy is not wasted. A consistent routine helps your brain adapt, making it easier to maintain focus throughout the day.</p>

<h3>Make Time for Hobbies</h3>
<p>Creative activities outside of work, such as painting, writing, playing music, or even playing kendama, can spark new ideas and stimulate innovative thinking. Hobbies are also an effective way to relieve stress.</p>

<h3>Schedule Digital Detox Time</h3>
<p>Reduce distractions by turning off notifications or using screen time limiting apps. Taking a break from the digital world allows the brain to rest and process information more effectively.</p>

<h3>Learn from Others</h3>
<p>Follow inspiring stories from digital nomads, creators, or young entrepreneurs. Understanding their journeys provides new perspectives and motivation to continue growing.</p>

<h3>Reflect and Evaluate</h3>
<p>At the end of each week, review your achievements and plan improvements for the next week. Regular reflection allows you to track progress, correct ineffective habits, and strategize better for future tasks.</p>

<p>By balancing work, leisure, and creativity, you can remain productive while maintaining a high quality of life. Creativity and productivity do not have to conflict; they can strengthen each other when managed properly.</p>
    `,
    contentId: `
      <p>Di era digital yang serba cepat, menjaga kreativitas sekaligus produktivitas menjadi tantangan tersendiri. Banyak distraksi dari media sosial, notifikasi, hingga tuntutan pekerjaan membuat fokus mudah hilang. Namun, dengan strategi yang tepat, kita bisa tetap produktif tanpa mengorbankan kreativitas. Berikut beberapa strategi yang bisa membantu:</p>

<h3>Tetapkan Rutinitas Harian</h3>
<p>Mulailah hari dengan menetapkan prioritas utama. Buat daftar tugas yang jelas agar energi tidak terbuang sia-sia. Rutinitas yang konsisten membantu otak beradaptasi sehingga fokus lebih mudah dipertahankan.</p>

<h3>Berikan Waktu untuk Hobi</h3>
<p>Aktivitas kreatif di luar pekerjaan, seperti melukis, menulis, bermain musik, atau bahkan bermain kendama, dapat meningkatkan ide-ide baru dan merangsang pola pikir inovatif. Hobi juga menjadi cara efektif untuk melepaskan stres.</p>

<h3>Jadwalkan Waktu Digital Detox</h3>
<p>Kurangi distraksi dengan mematikan notifikasi atau menggunakan aplikasi pembatas waktu layar. Memberikan jeda dari dunia digital membantu otak beristirahat dan memproses informasi lebih efektif.</p>

<h3>Belajar dari Orang Lain</h3>
<p>Ikuti kisah inspiratif dari digital nomad, kreator, atau pengusaha muda. Memahami perjalanan mereka memberikan perspektif baru dan motivasi untuk terus berkembang.</p>

<h3>Evaluasi dan Refleksi</h3>
<p>Setiap akhir minggu, tinjau pencapaian dan rencanakan perbaikan untuk minggu berikutnya. Dengan refleksi rutin, kita bisa melihat progres, memperbaiki kebiasaan yang kurang efektif, dan merencanakan strategi yang lebih baik.</p>

<p>Dengan menjaga keseimbangan antara pekerjaan, hiburan, dan kreativitas, kita bisa tetap produktif sekaligus menjaga kualitas hidup. Kreativitas dan produktivitas tidak harus saling bertentangan, malah keduanya bisa saling memperkuat jika dikelola dengan tepat.</p>
    `,
    image: "/assets/images/cof.png",
    category: "Self Improvement",
    categoryId: "Pengembangan Diri",
    date: "2025-11-18",
    readTime: "6 min read",
    readTimeId: "6 menit baca"
  }
];