# Build-a-meetup-tutorial
React-Native &amp; Node Tutorial - Build a Meetup app from EQuimper. It contains 15 parts

## Part 1: set up env and develop basic workflow
- set up env
  - mobile: react native
  - api: node js
  - database: mogodb
- develop api side to have get and post method for api/meetups
- develop basic app frame to get all meetups info in react native.
- Note: the repo has all the code and I ignore the node_modules. SO if you want to run the part 1 project, need to configure node_nodules first
- Problems I met:
  - no mogodb database installed first (i am using mongodb community in macOS [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/])
  - in url request: there should be http rather than http.

- reference [https://www.youtube.com/watch?v=qmNPpoVkY2Y]

## Part 2: set up a new schema and new route relate to group.
- Defintion of group is that meetup is created under the group
- api/groups/:groupId/meetups/new
- Problem I met
  - could not push meetups into group.meetups since push is not supported in the mongodb [https://stackoverflow.com/questions/48607918/mongoerror-unknown-modifier-pushall-in-node-js]
- reference [https://www.youtube.com/watch?v=_Mb-Q_A9ofU]

## Part 3: create basic front end with react native: has one tab only and contains the different cards

- Problem: Network error in axios (I am using android emulator in aprt 3)
  - solution: Basically, Android emulator by default does not allow localhost, so either config it(hard way) or replace localhost wiht your LAN(easy way). And it will work like charm  https://stackoverflow.com/questions/38418998/react-native-fetch-network-request-failed
- rederence for map(meetup, i)=>  https://reactjs.org/docs/lists-and-keys.html
- layout reference : https://facebook.github.io/react-native/docs/layout-props
## part 4-15 coming soon !--

## Api
- create a new meetup without groups | post : localhost:3000/api/meetups
- get all meetups | get  : localhost:3000/api/meetups
- create a new group | post : localhost:3000/api/groups/new
- create a new meetup under groups | post: localhost:3000/api/groups/:groupId/meetups/new
## Any questions, please make a issue for that!


