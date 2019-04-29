// increment
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, comment) {
  return {
    type: "REMOVE_COMMENT",
    comment,
    postId
  };
}
