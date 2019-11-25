import axios from 'axios'

axios.defaults.baseURL = "http://192.168.56.1:3000/api";

const fakeGroupId = "5dd9fe1958b1d67b30150579";

class MeetupApi {
    constructor(){
        this.groupId = fakeGroupId
        
        this.path = `/groups/${this.groupId}/meetups`;
        
    }
    async fetchGroupMeetups() {
        
       
        const {data} = await axios.get(this.path);
        
        console.log(typeof(data.meetups))
        return data.meetups;
    }
}

export {
    MeetupApi
}

//fetch method: fetch api data 
//not work with android simulator
// export const fetchMeetups = () => 
//     fetch("https://localhost:3000/api/meetups")
//     .then(res => res.json())
//     .catch(error => { throw error});