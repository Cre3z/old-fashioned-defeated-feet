//  a reducer takes in two things

// 1. the action (info about what happened)
// 2. copy of current state
// never mutate the store but always copy and return a new copy of the store

function comments(state = [], action) {
  console.log("commented on a post");
  return state;
}
export default comments;
