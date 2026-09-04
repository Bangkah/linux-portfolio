export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const clientIP = request.headers.get("cf-connecting-ip") || "Unknown IP";
  const userAgent = request.headers.get("user-agent") || "Unknown Scanner";
  const fullUrlString = request.url;
  const lowerUrl = fullUrlString.toLowerCase();

  let attackType = "";
  let customRoast = "";
  let fakePayload = "";
  let isAttack = false;

  // Deteksi Pola Serangan & Fuzzing
  if (lowerUrl.includes("cat%20") || lowerUrl.includes("wget") || lowerUrl.includes("curl") || lowerUrl.includes("bash") || lowerUrl.includes("sh") || lowerUrl.includes("uname") || lowerUrl.includes("id;") || lowerUrl.includes("nc%20") || lowerUrl.includes("exec") || lowerUrl.includes("system")) {
    isAttack = true;
    attackType = "Remote Code Execution (RCE)";
    customRoast = "Wah wah wah, gelooo mau remote server pakai command-line! Tenang bang, ini Cloudflare Pages, bukan VPS kenalanmu. Mending istirahat sambil nunggu warkop buka.";
    fakePayload = "uid=0(root) gid=0(root) groups=0(root)\n[INFO]: Server aman terkendali, silakan lanjut ngopi lagi.";
  }
  else if (lowerUrl.includes("169.254.169.254") || lowerUrl.includes("localhost") || lowerUrl.includes("127.0.0.1") || lowerUrl.includes("file://") || lowerUrl.includes("gopher://") || lowerUrl.includes("dict://")) {
    isAttack = true;
    attackType = "Server-Side Request Forgery (SSRF)";
    customRoast = "Lagi cari IP internal atau metadata cloud ya? Sayang sekali, di sini isinya cuma portofolio maba IT yang lagi hobi ngevalo, gak ada rahasia negara.";
    fakePayload = "{\"status\": \"ok\", \"message\": \"Internal network is cozy and filled with warm coffee aroma.\"}";
  }
  else if (lowerUrl.includes("<!entity") || lowerUrl.includes("system") || lowerUrl.includes("dtd") || lowerUrl.includes("serialization") || lowerUrl.includes("objectinputstream")) {
    isAttack = true;
    attackType = "XML External Entity (XXE)";
    customRoast = "Mainan XML entity lama nih ye! Parser di sini udah kebal karena pagi ngopi, siang ngopi, malam ngopi. bukan lambung aja yang kebal, tapi parser juga.";
    fakePayload = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root>\n  <status>fun_mode_on</status>\n  <pesan>Kurang-kurangin begadang, banyakin ngopi bareng kating.</pesan>\n</root>";
  }
  else if (url.search.includes("union") || url.search.includes("select") || url.search.includes("'") || url.search.includes("OR") || fullUrlString.includes("OR") || lowerUrl.includes("drop") || lowerUrl.includes("insert")) {
    isAttack = true;
    attackType = "SQL Injection (SQLi)";
    customRoast = "Asyik banget nyoba injeksi SQL! Disini databasenya cuma nyimpen list menu warkop dan rating kopi terenak awokwok.";
    fakePayload = "1. SELECT * FROM menu_warkop WHERE kategori='kopi_tubruk';\n2. INSERT INTO catatan_gabut (aktivitas) VALUES ('Nge-test SQLi tengah malem');\n-- Status: Aman, gak ada data penting yang terluka jadi gak perlu di suntik hahahahah!";
  }
  else if (fullUrlString.includes("..") || fullUrlString.includes("passwd") || fullUrlString.includes("win.ini") || fullUrlString.includes("shadow") || fullUrlString.includes("hosts")) {
    isAttack = true;
    attackType = "Path Traversal / LFI";
    customRoast = "Nyari file sistem ya? Nih bonus file rahasia paling berharga buat anak kos: panduan menyeduh mie instan agar kuahnya pas.";
    fakePayload = "1. Didihkan air secukupnya.\n2. Masukkan mie dan bumbu sesuai takaran.\n3. Jangan lupa pakai telur setengah matang biar hidup lebih tenang.\n4. Tidur besok nebak path lagi wkwkwk";
  }  
  else if (fullUrlString.includes("<script>") || fullUrlString.includes("onerror") || fullUrlString.includes("onload") || lowerUrl.includes("alert(")) {
    isAttack = true;
    attackType = "Cross-Site Scripting (XSS)";
    customRoast = "Dikit-dikit alert(1), kurang kreatif nih bos! Coba sesekali nulis kode yang beneran bisa bikin web-nya interaktif.";
    fakePayload = "<script>alert('Halo bang, semalem tidurnya nyenyak? Yuk ngopi yuk!');</script>";
  }
  else if (path.includes(".env") || path.includes(".git") || path.includes("config") || path.includes("admin") || path.includes("backup") || path.includes("db") || path.includes("sql") || path.includes("secret") || path.includes("wp-login") || path.includes("xmlrpc")) {
    isAttack = true;
    attackType = "Directory Fuzzing / Reconnaissance";
    customRoast = "Rajin banget nge-scan direktori tersembunyi! Semangatnya patut diacungi jempol buat tugas praktikum besok pagi.";
    fakePayload = "APP_NAME=WarkopHoneypot\nDB_HOST=localhost\nNOTE=Semangat ya nge-scan-nya, semoga lekas dapat cache berharga!";
  }
  else if (path.includes("token") || path.includes("auth") || path.includes("graphql") || path.includes("swagger")) {
    isAttack = true;
    attackType = "API & Endpoint Enumeration";
    customRoast = "Wah, lagi berburu endpoint API ya? Sayang sekali dokumentasinya sebelum nya ada saya dan allah yang tau tapi sekarang hanya allah yang tau wkwkwkk";
    fakePayload = "{\n  \"endpoints\": [\n    {\n    \"path\": \"/api/kopi\",\n    \"status\": \"Available (Hot & Fresh)\"\n  },\n  {\n    \"path\": \"/api/gorengan\",\n    \"status\": \"Habis, sisa bakwan doang\"\n  }\n  ]\n}";
  }
  else if (path.includes("HEAD") || path.includes("refs")) {
    isAttack = true;
    attackType = "Git Repository Scraping";
    customRoast = "Mencoba mengorek history git ya? Isinya cuma commit message stresss pas ngerjain laprak, gak ada source code rahasia.";
    fakePayload = "[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true\n# Commit terakhir: 'bismillah fix inimah'";
  }

  // Jika terdeteksi sebagai serangan, tampilkan Honeypot Warkop
  if (isAttack) {
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

  // Jika bukan serangan (misal: rute valid React SPA seperti /contact, /projects), teruskan ke index.html
  return env.ASSETS.fetch(new Request(new URL("/", request.url), request));
}