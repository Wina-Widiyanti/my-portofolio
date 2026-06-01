const projects = [
  {
    title: "Yourself is Yours",
    description:
      "Film pendek yang mengangkat pesan tentang pentingnya menghargai pencapaian diri sendiri tanpa membandingkannya dengan orang lain. Berperan sebagai editor dalam menyusun alur visual dan membangun emosi cerita.",
    image: "/projects/project1.jpeg",
    tags: ["Short Film", "Storytelling"],
    link: "https://www.instagram.com/reel/DKYyGYpSHf7/?igsh=b3Q2aXg2NWVpczdp",
  },
  {
    title: "A Pause for The Soul",
    description:
      "Video kampanye yang mengajak audiens untuk lebih peduli terhadap kesehatan mental sebagai bagian penting dari kesejahteraan hidup. Berperan sebagai editor dalam memperkuat penyampaian pesan melalui visual dan ritme video.",
    image: "/projects/project2.jpeg",
    tags: ["Campaign Video", "Mental Health"],
    link: "https://www.instagram.com/reel/DKenC_DSlQt/?igsh=cGZjcGd2OXJrY3Vk",
  },
  {
    title: "Mungkin Nanti, Rahasiaku Sampai",
    description:
      "Proyek film pendek kolaboratif yang diproduksi untuk pemenuhan tugas mata kuliah. Berperan sebagai pemeran dalam video tersebut.",
    image: "/projects/project3.jpeg",
    tags: ["Short Film", "Film Editing"],
    link: "https://www.instagram.com/reel/DA21jNCvVsu/?igsh=MWpyOTMyMXEyeXZtcw==",
  },
  {
    title: "BROADUCATION (Broadcasting Education)",
    description:
      "Video edukasi yang membahas hukum dan etika penyiaran digital di Indonesia. Berperan sebagai editor dalam menyusun materi visual agar informatif, menarik, dan mudah dipahami.",
    image: "/projects/project4.jpeg",
    tags: ["Educational Video", "YouTube"],
    link: "https://youtu.be/JXgTW5g0A2I?si=VoA6t-L7EBv_HXg6",
  },
  {
    title: "Custom Korean Cake",
    description:
      "Desain grafis yang dibuat untuk memperkenalkan identitas produk Custom Korean Cake melalui visual yang menarik dan konsisten guna memperkuat citra merek.",
    image: "/projects/project5.jpeg",
    tags: ["Graphic Design", "Brand Content"],
    link: "https://www.instagram.com/p/DJYIlOfxl-I/?igsh=enp5czhubWlsZnNx",
  },
  {
    title: "Decorating Cake Class",
    description:
      "Video dokumentasi kegiatan Decorating Cake Class yang menampilkan proses pembelajaran dan kreativitas peserta. Berperan sebagai editor dalam menyusun visual agar lebih dinamis dan menarik.",
    image: "/projects/project6.jpeg",
    tags: ["Instagram Reels", "Event Documentation"],
    link: "https://www.instagram.com/reel/DKQwIypzjYj/?igsh=MWVpcHdrd21vYTRyaw==",
  },
  {
    title: "Challenge: Write ‘Happy Birthday’ with Your Eyes Closed",
    description:
      "Konten interaktif berupa tantangan menulis dengan mata tertutup yang dirancang untuk meningkatkan engagement di media sosial. Editing difokuskan pada penyampaian tantangan dan call-to-action yang mendorong interaksi audiens.",
    image: "/projects/project7.jpeg",
    tags: ["Instagram Reels", "Engagement Content"],
    link: "https://www.instagram.com/reel/DKQwIypzjYj/?igsh=MWVpcHdrd21vYTRyaw==",
  },
  {
    title: "Profil Lima Biji Kopi",
    description:
      "Konten profil brand yang menampilkan identitas dan karakteristik Lima Biji Kopi melalui visual yang konsisten. Berperan sebagai editor untuk mendukung citra merek yang profesional.",
    image: "/projects/project8.jpeg",
    tags: ["Brand Content", "Instagram Reels"],
    link: "https://www.instagram.com/reel/DYbdrI8zHQL/?igsh=MWk1N2I3eDMxOW5qcg==",
  },
  {
    title: "Majalah SAVOR",
    description:
      "Proyek kolaboratif perancangan majalah digital bertema fashion dan kuliner. Berkontribusi dalam penyusunan layout, hierarki visual, dan elemen desain untuk menghasilkan tampilan yang informatif dan estetis.",
    image: "/projects/project9.png",
    tags: ["Magazine Design", "Editorial Design"],
    link: "https://drive.google.com/file/d/1WEhYC5FAeHvXWDfFUUIDIBOxrnowCLCK/view?usp=sharing",
  },
  {
    title: "Feature News Festival Budaya",
    description:
      "Video feature news yang mengangkat kuliner khas Nusa Tenggara Timur melalui Festival Budaya Nusantara ke-17. Berperan sebagai editor dalam menyusun narasi visual yang informatif dan menarik.",
    image: "/projects/project10.jpeg",
    tags: ["Feature News", "Journalism"],
    link: "https://www.instagram.com/reel/DYmolzZxS3J/?igsh=amlqZ2Z0NWZueXdp",
  },
  {
    title: "3 Straight News Vokasi TV",
    description:
      "Produksi program berita straight news yang dikerjakan secara kolaboratif untuk Vokasi TV. Bertanggung jawab pada proses editing agar informasi tersampaikan secara jelas, ringkas, dan sesuai kaidah jurnalistik.",
    image: "/projects/project11.jpeg",
    tags: ["Straight News", "Broadcast Journalism"],
    link: "https://youtu.be/zEOpfYXA8wQ?si=_frCdSHg6kyh9QCY",
  },
  {
    title: "Video Company PASCOY",
    description:
      "Video profil perusahaan yang dirancang untuk memperkenalkan identitas, layanan, dan nilai perusahaan kepada audiens. Berperan sebagai editor dalam menyusun visual yang profesional dan komunikatif.",
    image: "/projects/project12.jpeg",
    tags: ["Company Profile", "Corporate Video"],
    link: "https://drive.google.com/file/d/1Kye4_xCGXqs2eefVG-nrToNcEZrXosUR/view?usp=sharing",
  },
  {
    title: "Dua Tekstur, Satu Solusi",
    description:
      "Video promosi produk yang menyoroti permasalahan dan solusi yang ditawarkan melalui pendekatan visual yang menarik.",
    image: "/projects/project13.jpeg",
    tags: ["Product Promotion", "Advertising Video"],
    link: "https://drive.google.com/file/d/1Kye4_xCGXqs2eefVG-nrToNcEZrXosUR/view?usp=sharing",
  },
  {
    title: "Perempuan dalam Konservasi Cuma Jadi Pelengkap?",
    description:
      "Konten carousel edukatif yang membahas peran perempuan dalam upaya konservasi lingkungan. Berkontribusi dalam penyusunan visual dan alur informasi agar pesan tersampaikan secara jelas dan menarik.",
    image: "/projects/project14.jpeg",
    tags: ["Carousel Design", "Educational Content"],
    link: "https://www.instagram.com/p/DYPVKVskU4a/?igsh=eDVsbnc4aHpmaDIw",
  },
  {
    title: "Perempuan Ini Punya Banyak Peran, Tetapi Seringkali Tidak Diakui",
    description:
      "Konten visual yang mengangkat apresiasi terhadap kontribusi perempuan dalam berbagai bidang. Disusun dengan pendekatan desain yang sederhana namun mampu memperkuat pesan yang disampaikan.",
    image: "/projects/project15.jpeg",
    tags: ["Graphic Design", "Social Campaign"],
    link: "https://www.instagram.com/p/DYPWwRgx4fD/?igsh=NHh1OTljMXhlNGx5",
  },
  {
    title: "Cuplikan Konten dari Broadcast IPBTV",
    description:
      "Video potongan konten yang dirancang untuk menarik perhatian audiens dan meningkatkan jangkauan tayangan utama. Berperan sebagai editor dalam memilih momen penting dan menyusun visual yang menarik.",
    image: "/projects/project16.jpeg",
    tags: ["Social Media Content", "Content Repurposing"],
    link: "https://www.instagram.com/reel/DYPTxBFx_W4/?igsh=cDZydDkzMWJpeDcy",
  },
  {
    title: "Hook Cepat Broadcast IPBTV",
    description:
      "Konten video pendek dengan pendekatan hook cepat untuk menarik perhatian audiens sejak detik pertama. Editing difokuskan pada ritme visual yang cepat dan efektif.",
    image: "/projects/project17.jpeg",
    tags: ["TikTok Content", "Short-Form Video"],
    link: "https://vt.tiktok.com/ZSxWKNak5/",
  },
  {
    title: "Storytelling Content Broadcast IPBTV",
    description:
      "Konten video berbasis storytelling yang menyampaikan informasi melalui alur cerita yang lebih dekat dengan audiens. Berperan sebagai editor dalam membangun narasi visual yang menarik dan mudah diikuti.",
    image: "/projects/project18.jpeg",
    tags: ["TikTok Content", "Storytelling"],
    link: "https://vt.tiktok.com/ZSxWKdrvp/",
  },
  {
    title: "This is Wina",
    description:
      "Konten carousel personal branding yang memperkenalkan profil, dan kegiatan seorang mahasiswi. Disusun dengan visual yang terstruktur untuk meningkatkan daya tarik dan keterbacaan informasi.",
    image: "/projects/project19.jpeg",
    tags: ["Personal Branding", "Carousel Design"],
    link: "https://drive.google.com/file/d/11Dwb6dXzh-EJ7RTbN3mwiQW7YJOQmHd5/view?usp=drivesdk",
  },
  {
    title: "My Favourite Outfit Look",
    description:
      "Konten video lifestyle yang menampilkan pilihan outfit favorit melalui penyajian visual yang menarik dan dinamis. Berperan sebagai editor dalam mengatur ritme video agar sesuai dengan karakter platform media sosial.",
    image: "/projects/project20.jpeg",
    tags: ["TikTok Content", "Lifestyle Content"],
    link: "https://vt.tiktok.com/ZSxWKnYwV/",
  },
];
export default projects;
