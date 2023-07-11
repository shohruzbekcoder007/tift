import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './components/Main'
import TeacherDashboard from './components/TeacherDashboard'
import VideoGuide from './components/VideoGuide'
import ClassScheduleTeacher from './components/ClassScheduleTeacher'
import DashboardDetail from './components/TeacherDashboard/DashboardDetail'
import Thesis from "./components/Thesis"
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import muiTheme from './theme/muiTheme'
import Questionnaire from './components/Questionnaire'
import FilingApplication from './components/FilingApplication'
import Attend from './components/Attend'
import TeacherSciences from './components/TeacherSciences'
import CourseManagement from './components/CourseManagement'
import Login from './components/Login'
import DiplomaTopics from './components/DiplomaTopics'
import MainStudent from './components/MainStudent'
import Profile from './components/Profile'
import ReadAgain from './components/ReadAgain'
import PersonalPlan from './components/PersonalPlan'
import Olympics from './components/Olympics'
import ThesisResult from './components/ThesisResult'
import Information from './components/Information'
import QuestionnaireTeacher from './components/QuestionnaireTeacher'
import StudentSciences from './components/StudentSciences'
import StudentSciencesMain from './components/StudentSciences/StudentSciencesMain'
import Attendance from './components/StudentSciences/Attendance'
import Final from './components/Final/Final'
import ScienceSelection from './components/ScienceSelection/ScienceSelection'
import Student_services from './components/Student_services/Student_services'
import CalendarDayWeek from './components/CalendarDayWeek'
import MainDekan from './components/MainDekan'
import MainTutor from './components/MainTutor'
import MainDepartment from './components/MainDepartment'
import TeacherSciencesMain from './components/TeacherSciences/TeacherSciencesMain'
import CalendarPlan from './components/TeacherSciences/CalendarPlan'
import ThematicBlock from './components/TeacherSciences/ThematicBlock'

function App() {
  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            
            <Route path="teacher" element={<Main />}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="nb" element={<Attend/>} />
              <Route path="filingapplication" element={<FilingApplication/>} />
              <Route path="sciences" element={<TeacherSciences />}>
                <Route index element={<TeacherSciencesMain />} />
                <Route path="calendarplan" element={<CalendarPlan />} />
                <Route path="thematicblock" element={<ThematicBlock />} />
              </Route>
              <Route path="classschedule" element={<ClassScheduleTeacher />} />
              <Route path="diploma" element={<Thesis />} />
              <Route path="diploma/:id" element={<DiplomaTopics />} />
              <Route path="request" element={<Questionnaire/>} />
              <Route path="coursemanagement" element={<CourseManagement/>} />
              <Route path="videoguide" element={<VideoGuide />} />
              <Route path="dashboard/:id" element={<DashboardDetail />} />
              <Route path="profile" element={<Profile />} />
              <Route path="details/:id" element={<DashboardDetail />} />
            </Route>

            <Route path="student" element={<MainStudent />}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="dashboard/:id" element={<DashboardDetail />} />
              <Route path="readagain" element={<ReadAgain/>} />
              <Route path="personalplan" element={<PersonalPlan/>} />
              <Route path="olympics" element={<Olympics />} />
              <Route path="thesisresult" element={<ThesisResult />} />
              <Route path="information" element={<Information />} />
              <Route path="request" element={<QuestionnaireTeacher/>} />
              <Route path="sciencescalendar" element={<CalendarDayWeek/>} />
              <Route path="sciences" element={<StudentSciences />}>
                <Route index element={<StudentSciencesMain />} />
                <Route path="attendance" element={<Attendance />} />
              </Route>
              <Route path="final" element={<Final/>} />
              <Route path="ScienceSelection" element={<ScienceSelection/>} />
              <Route path="services" element={<Student_services/>} />
              {/* <Route path="Information" element={<Thesis />} />
              <Route path="request" element={<Questionnaire/>} />
              <Route path="coursemanagement" element={<CourseManagement/>} />
              <Route path="videoguide" element={<VideoGuide />} />
              <Route path="dashboard/:id" element={<DashboardDetail />} />
              <Route path="diploma/:id" element={<DiplomaTopics />} /> */}
              <Route path="profile" element={<Profile />} />
              <Route path="details/:id" element={<DashboardDetail />} />
            </Route>

            <Route path="dekan" element={<MainDekan/>}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="dashboard/:id" element={<DashboardDetail />} />
            </Route>

            <Route path="tutor" element={<MainTutor/>}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="dashboard/:id" element={<DashboardDetail />} />
            </Route>

            <Route path="department" element={<MainDepartment/>}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="dashboard/:id" element={<DashboardDetail />} />
              <Route path="classschedule" element={<ClassScheduleTeacher />} />
              <Route path="filingapplication" element={<FilingApplication/>} />
              <Route path="sciences" element={<TeacherSciences />} />
              <Route path="diploma" element={<Thesis />} />
              <Route path="diploma/:id" element={<DiplomaTopics />} />
              <Route path="request" element={<Questionnaire/>} />
              <Route path="coursemanagement" element={<CourseManagement/>} />
            </Route>

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
