export default function handler(req: any, res: any) {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown IP';
  const userAgent = req.headers['user-agent'] || 'Unknown Agent';

  return res.status(403).setHeader('Content-Type', 'application/json').json({
    status: "ACCESS_DENIED",
    warning: "Hacker jangan hack, situs anak teknik nih bos!",
    message: "Aktivitas scanning atau enumerasi Anda terdeteksi dan tercatat secara permanen.",
    attacker_info: {
      ip: clientIp,
      agent: userAgent,
      timestamp: new Date().toISOString()
    }
  });
}