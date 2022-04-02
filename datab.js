
const users = [
    { username: 'yoyo', password: 'yoyo' },
    { username: 'yasmina', password: 'yasmina' },
    { username: 'kevin', password: 'kevin' },
    { username: 'sam', password: 'sam' },
  ]
  
  
  function getUserByUsername(uname) {
    let matches = users.filter(({username}) => uname === username);
    if (matches.length === 1) {
      return matches[0];
    } else {
      if (matches.length > 1) {
        console.error(` there are ${matches.length} users in the DB with the username ${uname}`)
      }
      return null;
    }
  }
  
  
  module.exports = {
    getUserByUsername,
  }