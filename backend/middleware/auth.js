const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("token");
  // Cek apakah tidak ada token
  if (!token) {
    return res.status(401).json({ msg: "Tidak ada token, autorisasi ditolak" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token tidak valid" });
  }
};
