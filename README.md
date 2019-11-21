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

## part 3-15 coming soon !--

## Any questions, please make a issue for that!


