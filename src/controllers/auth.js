// JSON webtoken --------->
// cookie parser --------->

import bcrypt from 'bcryptjs';

// REGISTER --------->
export const regiter = (req, res) => {
  res.send('regiter')
};

export const postRegister = async(req,res)=>{
  const fullName = req.body.fullName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  if(!fullName || !email || !username || !password){
    res.status(400).send('Data empty or invalid!');
  }
  else{
    const salt = await bcrypt.genSalt(2);
    const hash = await bcrypt.hash(password,salt);
    console.log('hash:',hash);
    res.send('Data recived');
  }
}

// LOGIN ---------->
export const login = (req, res) => {
  res.send('login')
};

export const postLogin = (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  if(!username || !password){
      res.status(400).send('Data empty or invalid!');
  }
  else{
      res.send('Data recived');
  }
};

export const profile = (req,res)=>{
  res.send('user profile');
};

export const account = (req,res)=>{
  res.send('accoutn');
};

export const setting = ()=>{
  res.send('setting');
}