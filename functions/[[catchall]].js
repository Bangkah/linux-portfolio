export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const path = url.pathname;
  const searchParams = url.searchParams;
  const clientIP = request.headers.get("cf-connecting-ip") || "Unknown IP";
  const userAgent = request.headers.get("user-agent") || "Unknown Scanner";

  let attackType = "Directory Scan / Reconnaissance";
  let customRoast = "";
  let fakePayload = "";

const fullUrlString = request.url;

  // Deteksi SQL Injection (Cek parameter query atau string URL mentah)
  if (url.search.includes("union") || url.search.includes("select") || url.search.includes("'") || url.search.includes("OR") || fullUrlString.includes("OR")) {
    attackType = "SQL Injection (SQLi) Attempt";
    customRoast = "[!] Wah, mau nyoba SQL Injection ya? Tenang, database portofolio ini cuma nyimpen daftar warkop favorit, gak ada data sensitif. Aman bosku!";
    fakePayload = "1. SELECT * FROM warkop_favorit WHERE kopi='tubruk';\n2. INSERT INTO warkop_favorit (nama, rating) VALUES ('Warkop Mantap', 5);\n3. UPDATE warkop_favorit SET rating=5 WHERE nama='Warkop Mantap';\n4. DELETE FROM warkop_favorit WHERE nama='Warkop Mantap';\n5. DROP TABLE warkop_favorit; -- just kidding!";
  }
  // Deteksi Path Traversal / LFI
  else if (fullUrlString.includes("..") || fullUrlString.includes("passwd") || fullUrlString.includes("win.ini")) {
    attackType = "Path Traversal / LFI Attempt";
    customRoast = "[!] Nyari file sistem ya? Nih bonus file rahasia: resep kopi tubruk paling mantap di kantin kampus.";
    fakePayload = "1. beli kopi tubruk di kantin kampus\n2. tambahkan gula secukupnya\n3. aduk rata dan nikmati\n4. Lanjut nge hack lagi AWOKWOK";
  } 
  // Deteksi XSS
  else if (fullUrlString.includes("<script>")) {
    attackType = "Cross-Site Scripting (XSS)";
    customRoast = "[!] Mainan alert(1) ya? Kurang-kurangin bang, udah basi. Mending ngopi dulu biar gak inject kode mulu.";
    fakePayload = "<script>alert('Tertangkap basah, lAGI APA KAU HAH???');</script>";
  } 
  // Standar Directory Scan
  else {
    customRoast = "[!] Direktori ini kosong beneran, tapi semangat nge-scan mu patut diacungi jempol. Lanjut terus sampai magrib!";
    fakePayload = "Mau nyari apa sih bro?";
  }

  const responseBody = `
============================================================
[ADVANCED HONEYPOT TRAP TRIGGERED]
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
IP ${clientIP} terdeteksi melakukan simulasi serangan tingkat lanjut.
Denda: 1 mangkuk indomie goreng + telur setengah matang + 1 cup kopi hitam + 1 bungkus rokok.
HACKER TIDUR, BESOK NYARI TOOL LAGI!
============================================================
`;

  return new Response(responseBody, {
    status: 200, 
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Honeypot-Level": "Advanced-Matrix",
      "X-Attacker-IP": clientIP,
      "X-Attack-Vector": attackType
    },
  });
}