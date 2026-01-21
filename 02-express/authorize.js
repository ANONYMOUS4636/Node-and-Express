const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "dattatraya") {
    console.log(req.user);
    req.user = { name: "dattatraya", id: 5 };
    console.log(req.user);
    next();
  } else {
    res.status(401).send("unauthorized");
  }
  // console.log('authorize');
  // next()
};

module.exports = authorize;
