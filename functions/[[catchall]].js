export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const path = url.pathname;
  const clientIP = request.headers.get("cf-connecting-ip") || "Unknown IP";
  const userAgent = request.headers.get("user-agent") || "Unknown Scanner";

  let customRoast = "";

  if (path.includes("admin") || path.includes("login") || path.includes("dashboard")) {
    customRoast = "[!] Waduh, nyari panel admin ya? Form login-nya ada di mimpi, mas. Silakan bangun tidur dulu.";
  } else if (path.includes("backup") || path.includes("zip") || path.includes("tar.gz")) {
    customRoast = "[!] Mau nyari file backup? Isinya cuma folder node_modules AWOKWOKWOK";
  } else if (path.includes("id_rsa") || path.includes("ssh") || path.includes("config")) {
    customRoast = "[!] Nekat amat nyari kunci SSH. Mau minjam server buat mining kripto atau mau numpang ngerjain tugas kuliah?";
  } else {
    customRoast = "[!] Ups, direktori ini kosong, tapi semangat nge-scan mu patut diacungi jempol. Hacker tidur, besok nyari tool lagi";
  }

  const responseBody = `
============================================================
[HONEYPOT MATRIX TRIGGERED] - STEP CAUGHT: ${path}
============================================================
Target URL  : ${request.url}
Attacker IP : ${clientIP}
User-Agent  : ${userAgent}
HTTP Status : 200 OK (Virtual Status: 123)
Timestamp   : ${new Date().toISOString()}
------------------------------------------------------------
${customRoast}

[LOGGED DATA]:
IP kamu sudah masuk radar dashboard warkop lokal. 
Jangan macem-macem atau traktiran kopi denda 2 gelas!
HACKER TIDUR, BESOK NYARI TOOL LAGI!
============================================================
`;

  return new Response(responseBody, {
    status: 200, 
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Honeypot-Level": "Maximum-Troll",
      "X-Attacker-IP": clientIP,
      "X-Custom-Status": "123"
    },
  });
}