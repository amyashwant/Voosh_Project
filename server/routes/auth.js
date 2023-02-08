const router = require("express").Router();
const Auth = require("../models/Auth");

const bcrypt = require("bcrypt");

router.post("/add-user", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new Auth({
      username: req.body.username,
      phone: req.body.phone,
      password: hashedPassword,
    });
    console.log(req.body.phone)

    const signups = await user.save();
    console.log(signups)
    res.status(200).json(signups);
  } catch (e) {
    res.status(500).json(e);
  }
});

// router.use(cors())
// login

router.post("/login-user", async (req, res) => {
  // console.log("hfudhgbubgfbgfjbbffguguvbfubg fvgv");

  try {
    const user = await Auth.findOne(
      { phone: req.body.phone }
      // (e, data) => {
      //   console.log(e);
      //   console.log(data);
      // }
    );
   
    !user && res.status(404).json("user not found");
    // console.log(user.password)
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if(!user || !validPassword)
    // {
    //     res.status(404).json("enter correct")
    // }


    !validPassword && res.status(404).json("wrong password");
    res.status(200).json(user);
    // console.log(`finding ${req.body.username}`);
    // if (!users) {
    //   res.status(404).json("user not found");
    // } else {
    //   res.status(200).json("success");
    // }
  } catch (e) {
    res.status(500).json(e);
  }
});





module.exports = router;
