export const getRole = (user) => {
  if (user?.role) {
    if (user.role[0] === "student") {
      return 'student'
    }
    if (user?.role[0] === "dekan") {
      return 'dekan'
    }
    if (user?.role[0] === "department_user") {
      return 'department'
    }
    if (user?.role[0] === "tutor") {
      return 'tutor'
    }
    if (user?.role[0] === "teacher") {
      return 'teacher'
    }
    if (user?.role[0] === "admin") {
      return 'admin'
    }
  } else {
    return ''
  }
}