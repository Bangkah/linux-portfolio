export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const clientIP = request.headers.get("cf-connecting-ip") || "Unknown IP";
  const userAgent = request.headers.get("user-agent") || "Unknown Scanner";
  const fullUrlString = request.url;
  const lowerUrl = fullUrlString.toLowerCase();

  // Jika diakses di root (/) atau halaman index tanpa parameter serangan, biarkan tampil sebagai web portofolio normal
  if (path === "/" && !url.search && !lowerUrl.includes(".")) {
    return env.ASSETS.fetch(request);
  }

  let attackType = "Pengunjung Santai / Nongkrong";
  let customRoast = "";
  let fakePayload = "";

  // 1. Serangan Berat: RCE / Command Injection
  if (lowerUrl.includes("cat%20") || lowerUrl.includes("wget") || lowerUrl.includes("curl") || lowerUrl.includes("bash") || lowerUrl.includes("sh") || lowerUrl.includes("uname") || lowerUrl.includes("id;") || lowerUrl.includes("nc%20") || lowerUrl.includes("exec") || lowerUrl.includes("system")) {
    attackType = "Remote Code Execution (RCE)";
    customRoast = "Geloo, niat banget mau remote server pakai command-line! Tenang bang, ini Cloudflare Pages, bukan VPS kenalanmu. Mending istirahat sambil nunggu warkop buka.";
    fakePayload = "uid=0(root) gid=0(root) groups=0(root)\n[INFO]: Server aman terkendali, silakan lanjut ngopi lagi.";
  }
  // 2. Serangan Berat: SSRF
  else if (lowerUrl.includes("169.254.169.254") || lowerUrl.includes("localhost") || lowerUrl.includes("127.0.0.1") || lowerUrl.includes("file://") || lowerUrl.includes("gopher://") || lowerUrl.includes("dict://")) {
    attackType = "Server-Side Request Forgery (SSRF)";
    customRoast = "Lagi cari IP internal atau metadata cloud ya? Sayang sekali, di sini isinya cuma portofolio anak IT yang lagi hobi ngopi, gak ada rahasia negara.";
    fakePayload = "{\"status\": \"ok\", \"message\": \"Internal network is cozy and filled with warm coffee aroma.\"}";
  }
  // 3. Serangan Berat: XXE / Deserialization
  else if (lowerUrl.includes("<!entity") || lowerUrl.includes("system") || lowerUrl.includes("dtd") || lowerUrl.includes("serialization") || lowerUrl.includes("objectinputstream")) {
    attackType = "XML External Entity (XXE)";
    customRoast = "Mainan XML entity lama nih ye! Parser di sini udah kebal karena pagi ngopi, siang ngopi, malam ngopi. bukan lambung aja yang kebal, tapi parser juga.";
    fakePayload = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root>\n  <status>fun_mode_on</status>\n  <pesan>Kurang-kurangin begadang, banyakin ngopi bareng kating.</pesan>\n</root>";
  }
  // 4. Serangan Menengah: SQL Injection
  else if (url.search.includes("union") || url.search.includes("select") || url.search.includes("'") || url.search.includes("OR") || fullUrlString.includes("OR") || lowerUrl.includes("drop") || lowerUrl.includes("insert")) {
    attackType = "SQL Injection (SQLi)";
    customRoast = "Asyik banget nyoba injeksi SQL! Tenang aja, database di sini cuma nyimpen list menu warkop dan rating kopi terenak, aman kok.";
    fakePayload = "1. SELECT * FROM menu_warkop WHERE kategori='kopi_tubruk';\n2. INSERT INTO catatan_gabut (aktivitas) VALUES ('Nge-test SQLi tengah malem');\n-- Status: Aman, gak ada data penting yang harus di suntik kok!";
  }
  // 5. Serangan Menengah: Path Traversal / LFI
  else if (fullUrlString.includes("..") || fullUrlString.includes("passwd") || fullUrlString.includes("win.ini") || fullUrlString.includes("shadow") || fullUrlString.includes("hosts")) {
    attackType = "Path Traversal / LFI";
    customRoast = "Nyari file sistem ya? Nih bonus file rahasia paling berharga buat anak kos: panduan menyeduh mie instan agar kuahnya pas.";
    fakePayload = "1. Didihkan air secukupnya di warkop.\n2. Masukkan mie dan bumbu sesuai takaran.\n3. Jangan lupa pakai telur setengah matang biar hidup lebih tenang.\n4. Tidur besok nebak path lagi";
  }  
  // 6. Serangan Menengah: XSS
  else if (fullUrlString.includes("<script>") || fullUrlString.includes("onerror") || fullUrlString.includes("onload") || lowerUrl.includes("alert(")) {
    attackType = "Cross-Site Scripting (XSS)";
    customRoast = "Dikit-dikit alert(1), kurang kreatif nih bos! Coba sesekali nulis kode yang beneran bisa bikin web-nya interaktif.";
    fakePayload = "<script>alert('Halo bang, semalem tidurnya nyenyak? Yuk ngopi yuk!');</script>";
  }
  // 7. Serangan Ringan: Reconnaissance / Fuzzing (.env, .git, admin, backup)
  else if (path.includes(".env") || path.includes(".git") || path.includes("config") || path.includes("admin") || path.includes("backup") || path.includes("db") || path.includes("sql") || path.includes("secret")) {
    attackType = "Directory Fuzzing / Reconnaissance";
    customRoast = "Rajin banget nge-scan direktori tersembunyi! Semangatnya patut diacungi jempol buat tugas praktikum besok pagi.";
    fakePayload = "APP_NAME=WarkopHoneypot\nDB_HOST=localhost\nNOTE=Semangat ya nge-scan-nya, semoga lekas dapat cache berharga!";
  }
  // 8. Tambahan Simulasi Baru: API Enumeration / Token Leaking Test
  else if (path.includes("api") || path.includes("token") || path.includes("auth") || path.includes("graphql") || path.includes("swagger")) {
    attackType = "API & Endpoint Enumeration";
    customRoast = "Wah, lagi berburu endpoint API ya? Sayang sekali dokumentasinya cuma ada di ingatan pemilik web pas lagi setengah sadar di warkop.";
    fakePayload = "{\n  \"endpoints\": [\n    {\n    \"path\": \"/api/kopi\",\n    \"status\": \"Available (Hot & Fresh)\"\n  },\n  {\n    \"path\": \"/api/gorengan\",\n    \"status\": \"Habis, sisa bakwan doang\"\n  }\n  ]\n}";
  }
  // 9. Tambahan Simulasi Baru: Git Leak / Repository Scraping
  else if (path.includes("HEAD") || path.includes("config") || path.includes("index") || path.includes("refs")) {
    attackType = "Git Repository Scraping";
    customRoast = "Mencoba mengorek history git ya? Isinya cuma commit message galau pas ngerjain laprak, gak ada source code rahasia.";
    fakePayload = "[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true\n# Commit terakhir: 'bismillah fix inimah'";
  }
  // 10. Jika mengakses URL lain yang tidak terdaftar
  else {
    attackType = "Directory Scan / Unknown Path";
    customRoast = "Nyari apa bro? Halaman ini kosong, tapi lumayan buat nambah statistik log warkop malam ini.";
    fakePayload = "Status: 123 hahah (Virtual Honeypot Catch-all Active)";
  }

  const responseBody = `
============================================================
[WARKOP VIRTUAL LAB - SIMULATOR SYSTEM]
============================================================
Target URL   : ${request.url}
Attacker IP  : ${clientIP}
Attack Vector: ${attackType}
User-Agent   : ${userAgent}
Timestamp    : ${new Date().toISOString()}
------------------------------------------------------------
${customRoast}

[SIMULATED SERVER RESPONSE]:
${fakePayload}

[LOGGED TO WARKOP DASHBOARD]:
Aktivitas tercatat sebagai: ${attackType}.
Catatan santai: Dicatat sambil nunggu pesanan kopi anda datang ke meja.
HACKER TIDUR, BESOK NYARI TOOL LAGI!
============================================================
`;

  return new Response(responseBody, {
    status: 200, 
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Honeypot-Level": "Fun-Simulation",
      "X-Attacker-IP": clientIP,
      "X-Attack-Vector": attackType
    },
  });
}
