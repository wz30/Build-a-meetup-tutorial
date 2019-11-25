import mongoose, {Schema} from 'mongoose';

const GroupSchema = new Schema({
    name: {
        type: String,
        required:true,
        unique: true,
        minLength: [5, "Name must be 5 characters long"]
    },
    description: {
        type: String,
        required: true,
        minLength: [10, "Name must be 10 characters long"]
    },
    category: {
      type: String
    },
    meetups: [{
      type: Schema.Types.ObjectId,
      ref: 'Meetup',
    }],
}, {timestamps: true});

/* 
 * Create a meetuo and add it to the meetups array in the group
 */
GroupSchema.statics.addMeetup = async function (id, args){
  const Meetup = mongoose.model('Meetup')
  //console.log(id, args)

  //we add the group id to the meetup group element
  //finally this is the author of the meetup
  const meetup = await new Meetup({...args, group : id});

  //find group by id
  const group = await this.findByIdAndUpdate(id, {$push: {meetups: meetup.id}});
  //need to change here from part 3 video
  //const group = await this.findById(id)
  //myArray.push(id); //breaks on DocumentDB with Mongo API because of $pushAll
  //group.meetups.push(meetup);
  //group.meetups.unshift(meetup);
  console.log(group)
  //const result = await Promise.all([meetup.save(), group]);
  //console.log(result)
  //return result;
  return {
    meetup: await meetup.save(),
    group
  };
};
export default mongoose.model('Group', GroupSchema);
