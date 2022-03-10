/**
 * flle for validating username and password
 */

 const users = {
    1: {
      id: 1,
      uname: 'alice',
      password: 'password',
    },
    2: {
      id: 2,
      uname: 'bob',
      password: 'password',
    },
    3: {
      id: 3,
      uname: 'carol',
      password: 'password',
    },
    4: {
      id: 4,
      uname: 'dave',
      password: 'password',
    },
  };


function isPwdRightFormat(password){
    const validLength = password.length >= 8;
    
    let hasLetter = /[a-zA-Z]/g.test(password)
    let hasNumber =/[0-9]/g.test(password)


    return hasNumber && hasLetter && validLength
}




module.exports = isPwdRightFormat