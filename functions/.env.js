export async function onRequest(context) {
  const request = context.request;
  const clientIP = request.headers.get("cf-connecting-ip") || "Unknown IP";
  const userAgent = request.headers.get("user-agent") || "Unknown Scanner";

  // Pesan roasting kreatif buat yang ketahuan scanning
  const roastingMessage = `
============================================================
[SECURITY ALERT] SYSTEM INTRUSION DETECTED & LOGGED
============================================================
Target URL  : ${request.url}
Client IP   : ${clientIP}
User Agent  : ${userAgent}
Timestamp   : ${new Date().toISOString()}
------------------------------------------------------------
[!] PESAN DARI ADMIN (Anak Teknik Informatika):
 
   Waduh, rajin banget mas nge-scan .env portofolio orang? 
   Mau nyari apa? Kunci kosan atau token ngopi di warkop?
   
   Situs ini dilindungi oleh:.
   1. Doa ibu supaya kuliah lancar.
   2. Secangkir kopi pahit biar gak salah jalur.
   3. sebungkus 76 Apel biar gak salah klik.
   
   Udah ah, mending balik kanan, push repo sendiri, 
   atau bantuin tumpahin ide buat nge-golin Barcelona!
============================================================
`;

  // Kirim response dengan status 200 biar scanner ngiranya ini file asli, padahal jebakan
  return new Response(roastingMessage, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Honeypot-Triggered": "true",
      "X-Roast-Level": "Maximum"
    },
  });
}