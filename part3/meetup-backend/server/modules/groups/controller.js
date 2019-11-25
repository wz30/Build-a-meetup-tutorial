import Group from './model';
import {Meetup} from '../meetups';

export const createGroup = async(req, res)=>{
    const {name, description, category} = req.body

    if(!name) {
      return res.status(400).json({error: true, message: "Name must be provided"})
    }else if(typeof name != 'string'){
      return res.status(400).json({error: true, message: "Name must be string"})
    }else if(name.length < 5){
      return res.status(400).json({error: true, message: "Name must have 5 characters longer!"})
    }

    if(!description) {
      return res.status(400).json({error: true, message: "description must be provided"})
    }else if(typeof description != 'string'){
      return res.status(400).json({error: true, message: "description must be string"})
    }else if(description.length < 10){
      return res.status(400).json({error: true, message: "description must have 10 characters longer!"})
    }



    const group = new Group({name, description});

    try {
        return res.status(201).json({groups: await group.save()})
    }catch(e){
        return res.status(400).json({error: true, message:"Error when create group"});
    }
}

// export const getAllMeetUps = async(req, res) => {
//     try {
//         return res.status(200).json({meetups: await Meetup.find({})})
//     } catch(e) {
//         return res.status(e.status).json({error: true, message:"Error with Meetup"});
//     }

// }

export const createGroupMeetup = async (req, res)=>{
  const {title, description} = req.body;
  const {groupId} = req.params;

  if(!title) {
    return res.status(400).json({error: true, message: "title must be provided"})
  }else if(typeof title != 'string'){
    return res.status(400).json({error: true, message: "title must be string"})
  }else if(title.length < 5){
    return res.status(400).json({error: true, message: "title must have 5 characters longer!"})
  }

  if(!description) {
    return res.status(400).json({error: true, message: "description must be provided"})
  }else if(typeof description != 'string'){
    return res.status(400).json({error: true, message: "description must be string"})
  }else if(description.length < 10){
    return res.status(400).json({
      error: true,
      message: "description must have 10 characters longer!"
    })
  }
  if(!groupId){
    return res.status(400).json({error: true, message: "groupId must be provided"})
  }

  try{
    const {meetup, group} = await Group.addMeetup(groupId, {title, description});
    return res.status(201).json({error: false, meetup, group});
    // console.log(result)
    //return result;
  }catch(e){
    return res.status(400).json({error: true, message:"Error when create meetup in group"});
  }
}

export const getGroupMeetups = async (req, res)=>{
  const {groupId} = req.params;

  if(!groupId){
    return res.status(400).json({error:true, message: 'no group Id'})
  }

  //search for see if group exist
  const group = await Group.findById(groupId);
  if(!group){
    return res.status(400).json({error:true, message: 'no such group with corresponding group'})
  }

  try{
    return res.status(200).json({
      error: false,
      meetups: await Meetup.find({group : groupId}).populate('group', 'name'),
    });
  }catch(e){
    console.log(e)
    return res.status(400).json({error : true, message: 'Can not get group messages'})
  }
}