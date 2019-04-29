//  a reducer takes in two things

// 1. the action (info about what happened)
// 2. copy of current state
// never mutate the store but always copy and return a new copy of the store

function posts(state = [], action) {
  console.log("the post gets updated");
  return state;
}
export default posts;
