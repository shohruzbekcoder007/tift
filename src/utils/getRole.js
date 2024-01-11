export const getRole = (user) => {
  if (user?.role) {
    if (user.role[0] === "student") {
      return 'student'
    }
    if (user?.role[0] === "archive") {
      return 'archive'
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
    if (user?.role[0] === "hr") {
      return 'hr'
    }
    if (user?.role[0] === "accountant") {
      return 'accountant'
    }
    if (user?.role[0] === "rector") {
      return 'rector'
    }
    if (user?.role[0] === "stylist") {
      return 'stylist'
    }
  } else {
    return ''
  }
}