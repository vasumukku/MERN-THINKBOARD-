const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");
require("dotenv").config(); // ⭐ ADD THIS LINE

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 s"),
});

module.exports = ratelimit;