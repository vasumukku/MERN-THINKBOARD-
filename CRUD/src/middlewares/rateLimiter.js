const ratelimit = require("../config/upstash");

const rateLimiter = async (req, res, next) => {
  const { success } = await ratelimit.limit(req.ip);

  if (!success) {
    return res.status(429).send("Too many requests");
  }

  next();
};

module.exports = rateLimiter;