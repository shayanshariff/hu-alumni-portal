import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";




export const signin = async (req, res) => {
    const {email, password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message: "User doesn't exist"});

        const isPasswordCorrect = await bcrypt.compare(password.toString(), existingUser.password);

        if(!isPasswordCorrect) return res.status(400),json({message: "Invalid Credentials"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"});
        res.status(200).json({result: existingUser, token});

    }
    catch(error){
        res.status(500).json({message: "Something went wrong"});
    }
};

export const signup = async (req, res) => {
    const {email, password, firstName, lastName, batch, major} = req.body;

    try{
        const existingUser = await User.findOne({email});
        
        if(existingUser) return res.status(400).json({message: "User already exists"});
        
        const hashedPassword = await bcrypt.hash(password.toString(), 12);

        const result = await User.create({name: `${firstName.toString()} ${lastName.toString()}`, email: email.toString(), password: hashedPassword, batch: batch.toString(), major: major.toString()});
        
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"});
        
   

        res.status(200).json({result, token});
        
    }
    catch(error){
        res.status(500).json({message: "Something went wrong"});
    }

};

export const fetchUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }

};

// controllers/users.js

export const followUser = async (req, res) => {
    if (!req.userId) {
      return res.status(401).json({ message: 'Unauthenticated' });
    }
  
    const userToFollow = await User.findById(req.params.id);
    const currentUser = await User.findById(req.userId);
    console.log('userToFollow:', userToFollow);
  console.log('currentUser:', currentUser);
  
    if (!userToFollow || !currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    if (userToFollow.followers.includes(req.userId)) {
      return res.status(400).json({ message: 'You already follow this user' });
    }
  
    userToFollow.followers.push(req.userId);
    currentUser.following.push(req.params.id);
  
    await userToFollow.save();
    await currentUser.save();
  
    res.status(200).json({ message: 'User followed successfully' });
  };
  
  export const unfollowUser = async (req, res) => {
    if (!req.userId) {
      return res.status(401).json({ message: 'Unauthenticated' });
    }
  
    const userToUnfollow = await User.findById(req.params.id);
    const currentUser = await User.findById(req.userId);
  
    if (!userToUnfollow || !currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    if (!userToUnfollow.followers.includes(req.userId)) {
      return res.status(400).json({ message: 'You do not follow this user' });
    }
  
    userToUnfollow.followers.pull(req.userId);
    currentUser.following.pull(req.params.id);
  
    await userToUnfollow.save();
    await currentUser.save();
  
    res.status(200).json({ message: 'User unfollowed successfully' });
  };
  