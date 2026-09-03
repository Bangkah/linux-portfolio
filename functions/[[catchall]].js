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

  // Deteksi SQL Injection (misal ada tanda kutip atau union select)
  if (path.includes("union") || path.includes("select") || searchParams.toString().includes("'") || searchParams.toString().includes("OR 1=1")) {
    attackType = "SQL Injection (SQLi) Attempt";
    customRoast = "[!] Wah, mau nyoba SQL Injection ya? Tenang, database portofolio ini cuma nyimpen daftar warkop favorit, gak ada data sensitif. Aman bosku!";
    fakePayload = "ql_syntax_error: unexpected token near 'UNION SELECT' at line 1";
  } 
  // Deteksi Path Traversal / LFI (misal nyari ../etc/passwd)
  else if (path.includes("..") || path.includes("passwd") || path.includes("win.ini")) {
    attackType = "Path Traversal / LFI Attempt";
    customRoast = "[!] Nyari file sistem ya? Nih bonus file rahasia: resep kopi tubruk paling mantap di kantin kampus.";
    fakePayload = "root:x:0:0:root:/root:/bin/bash\ncoffee:x:1001:1001:Warkop Local User,,,:/home/coffee:/bin/sh";
  } 
  // Deteksi XSS atau Script Injection
  else if (path.includes("<script>") || searchParams.toString().includes("<script>")) {
    attackType = "Cross-Site Scripting (XSS)";
    customRoast = "[!] Mainan alert(1) ya? Kurang-kurangin bang, udah basi. Mending ngopi dulu biar gak inject kode mulu.";
    fakePayload = "<script>alert('Tertangkap basah sedang gabut di warkop!');</script>";
  } 
  // Standar Directory Scan
  else {
    customRoast = "[!] Direktori ini kosong beneran, tapi semangat nge-scan mu patut diacungi jempol. Lanjut terus sampai magrib!";
    fakePayload = "HACKER TIDUR, BESOK NYARI TOOL LAGI!";
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