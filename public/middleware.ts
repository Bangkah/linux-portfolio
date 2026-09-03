import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;

  const suspiciousPatterns = [
    '/wp-login.php',
    '/xmlrpc.php',
    '/.env',
    '/config.json',
    '/admin',
    '/backup.zip',
    '/sql',
    '/phpmyadmin'
  ];

  // Cek apakah path yang diakses mencurigakan atau indikasi scanning
  const isScanning = suspiciousPatterns.some(pattern => path.toLowerCase().includes(pattern));

  if (isScanning) {
    // Ambil IP pengunjung dari header Vercel
    const clientIp = request.headers.get('x-forwarded-for') || 'Unknown IP';
    
    // Kirim respons peringatan langsung ke layar pelaku
    return new NextResponse(
      JSON.stringify({
        status: "ACCESS_DENIED",
        message: "Peringatan: Aktivitas scanning / enumerasi Anda terdeteksi dan tercatat!",
        ip_detected: clientIp,
        target_path: path,
        warning: "Hacker jangan hack, masih pemula puh!"
      }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Security-Notice': 'Monitored by Security Middleware'
        }
      }
    );
  }

  return NextResponse.next();
}

// Konfigurasi path mana saja yang dipantau oleh middleware
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};