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
   

    const signups = await user.save();
  
    res.status(200).json(signups);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/login-user", async (req, res) => {
  

  try {
    const user = await Auth.findOne(
      { phone: req.body.phone }
      
    );
   
    !user && res.status(404).json("user not found");
    
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    

    !validPassword && res.status(404).json("wrong password");
    res.status(200).json(user);
    
  } catch (e) {
    res.status(500).json(e);
  }
});





module.exports = router;
