export const getRole = (user) => {
  if(!user){
    return ''
  }
    if (user.role) {
      if (user.role[0] === "student") {
        return 'student'
      }
      if (user.role[0] === "dekan") {
        return 'dekan'
      }
      if (user.role[0] === "kafedra_mudir") {
        return 'department'
      }
      if (user.role[0] === "tyutor") {
        return 'tutor'
      }
      if (user.role[0] === "teacher") {
        return 'teacher'
      }
    } else {
      return ''
    }
  }