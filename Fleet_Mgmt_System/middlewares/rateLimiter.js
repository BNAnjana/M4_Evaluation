const rateLimit = {};
const WINDOW = 60000; // 1 min
const LIMIT = 3;

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!rateLimit[ip]) rateLimit[ip] = [];

  rateLimit[ip] = rateLimit[ip].filter(ts => now - ts < WINDOW);

  if (rateLimit[ip].length >= LIMIT) {
    return res.status(429).json({ message: 'Too many requests' });
  }

  rateLimit[ip].push(now);
  next();
};

export default rateLimiter;