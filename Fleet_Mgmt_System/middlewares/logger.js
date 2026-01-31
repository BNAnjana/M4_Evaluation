import { appendFileSync } from 'fs';
import { join } from 'path';

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.originalUrl}\n`;
  appendFileSync(join(__dirname, '../logs.txt'), log);
  next();
};

export default logger;