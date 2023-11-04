const express = require("express");
const client = require("../redis");
const { AuthorizeUser } = require("../controllers/login");
var router = express.Router();

// client
//   .connect()
//   .then(() => {
//     console.log("connected to redis");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

router.get("/", async function (req, res, next) {
  // const auth = await client.get("key");
  // if (auth) {
  //   try {
  //     var loginCredentials = await AuthorizeUser(auth);
  //     if (loginCredentials === false) {
  //       res.status(200).send("Invalid token");
  //     } else {
  //       res.json(loginCredentials);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     res.status(400).send("Server Busy");
  //   }
  // } else {
    const auth_token = await req.headers.authorization;
    try {
      loginCredentials = await AuthorizeUser(auth_token);
      if (loginCredentials === false) { 
        res.status(200).send("Invalid token"); 
      } else {
        res.json(loginCredentials);
      }
    } catch (e) {
      console.log(e);
      res.status(400).send("Server Busy");
    }
  }
//}
);
router.post("/logout", async (req, res) => {
  const {email}=req.body
  await client.del(`key-${email}`);
  res.send("cleared from redis,session expired");
});

module.exports = router;