import React from 'react'
import { useSelector } from "react-redux"
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
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
import CalendarPlan, { CalendarPlanMain } from './components/TeacherSciences/CalendarPlan'
import CalendarPlans from './components/StatistikaList/CalendarPlan/CalendarPlans'
import Applications from './components/Applications/applications'
import Patoks from './components/Patoks/Patoks'
import Final_Dep from './components/Final_Dep/Final_Dep'
import Questions from './components/Questions/Questions'
import ThematicBlock from './components/TeacherSciences/ThematicBlock'
import DekanGroups from './components/DekanGroups/DekanGroups'
import Appropriation from './components/Appropriation/Appropriation'
import DekanStudents from './components/DekanStudents/DekanStudents'
import DekanStatistic from './components/DekanStatistic/DekanStatistic'
import Kontingent from './components/StatistikaList/Kontingent/Kontingent'
import FinalQuestion from './components/StatistikaList/FinalQuestion/FinalQuestion'
import FinalResults from './components/StatistikaList/FinalResults/FinalResults'
import ExportGrades from './components/StatistikaList/ExportGrades/ExportGrades'
import Materials from './components/StatistikaList/Materials/Materials'
import Intermediate from './components/StatistikaList/Intermediate/Intermediate'
import IntermediateResult from './components/StatistikaList/IntermediateResult/IntermediateResult'
import UngradedTasks from './components/StatistikaList/UngradedTasks/UngradedTasks'
import VideoLessons from './components/StatistikaList/VideoLessons/VideoLessons'
import DTechers from './components/StatistikaList/DTechers/DTechers'
import Outlet from './components/StatistikaList/Outlet/Outlet'
import MyLessons from './components/StatistikaList/DTechers/MyLessons'
import LessonTable from './components/StatistikaList/LessonTable/LessonTable'
import MissedClasses from './components/StatistikaList/MissedClasses/MissedClasses'
import { getRole } from './utils/getRole'
import DekanQuestions from './components/DekanQuestions/DekanQuestions'
import Template from './components/DekanQuestions/Template'
import DekanOlympics from './components/DekanOlympics/DekanOlympics'

function App() {

  const user = useSelector((state) => state.user);

  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {sessionStorage.getItem("access_token") || user ? (
              <>
                {user && getRole(user) === "teacher" &&
                  <Route path="teacher" element={<Main />}>
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="nb" element={<Attend />} />
                    <Route path="filingapplication" element={<FilingApplication />} />
                    <Route path="sciences" element={<TeacherSciences />}>
                      <Route index element={<TeacherSciencesMain />} />
                      <Route path="calendarplan" element={<CalendarPlanMain />} >
                        <Route index element={<CalendarPlan />} />
                        <Route path="thematicblock" element={<ThematicBlock />} />
                      </Route>
                    </Route>
                    <Route path="classschedule" element={<ClassScheduleTeacher />} />
                    <Route path="diploma" element={<Thesis />} />
                    <Route path="diploma/:id" element={<DiplomaTopics />} />
                    <Route path="request" element={<Questionnaire />} />
                    <Route path="coursemanagement" element={<CourseManagement />} />
                    <Route path="videoguide" element={<VideoGuide />} />
                    <Route path="dashboard/:id" element={<DashboardDetail />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="details/:id" element={<DashboardDetail />} />
                  </Route>}

                {user && getRole(user) === "student" &&
                  <Route path="student" element={<MainStudent />}>
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="dashboard/:id" element={<DashboardDetail />} />
                    <Route path="readagain" element={<ReadAgain />} />
                    <Route path="personalplan" element={<PersonalPlan />} />
                    <Route path="olympics" element={<Olympics />} />
                    <Route path="thesisresult" element={<ThesisResult />} />
                    <Route path="information" element={<Information />} />
                    <Route path="request" element={<QuestionnaireTeacher />} />
                    <Route path="sciencescalendar" element={<CalendarDayWeek />} />
                    <Route path="sciences" element={<StudentSciences />}>
                      <Route index element={<StudentSciencesMain />} />
                      <Route path="attendance" element={<Attendance />} />
                    </Route>
                    <Route path="final" element={<Final />} />
                    <Route path="ScienceSelection" element={<ScienceSelection />} />
                    <Route path="services" element={<Student_services />} />
                    <Route path="videoguide" element={<VideoGuide />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="details/:id" element={<DashboardDetail />} />
                  </Route>}

                {user && getRole(user) === "dekan" &&
                  <Route path="dekan" element={<MainDekan />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="videoguide" element={<VideoGuide />} />
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="dashboard/:id" element={<DashboardDetail />} />
                    <Route path="groups" element={<StudentSciences />} >
                      <Route index element={<DekanGroups />} />
                      <Route path='appropriation' element={<Appropriation />} />
                      <Route path='students' element={<DekanStudents />} />
                    </Route>
                    <Route path='statistika' element={<StudentSciences />}>
                      <Route index element={<DekanStatistic />} />
                      <Route path='kontingent' element={<Kontingent />} />
                      <Route path='finalquestion' element={<FinalQuestion />} />
                      <Route path='finalresult' element={<FinalResults />} />
                      <Route path='exportgrades' element={<ExportGrades />} />
                      <Route path='materials' element={<Materials />} />
                      <Route path='calendarplans' element={<CalendarPlans />} />
                      <Route path='intermediate' element={<Intermediate />} />
                      <Route path='intermediateresult' element={<IntermediateResult />} />
                      <Route path='ungradedtasks' element={<UngradedTasks />} />
                      <Route path='videolessons' element={<VideoLessons />} />
                      <Route path='teachers' element={<Outlet />}>
                        <Route index element={<DTechers />} />
                        <Route path='mylessons' element={<MyLessons />} />
                      </Route>
                      <Route path='lessontable' element={<LessonTable />} />
                      <Route path='missedclasses' element={<MissedClasses />} />
                    </Route>
                    <Route path='dekanquestions' element={<StudentSciences/>}>
                     <Route index element={<DekanQuestions />} />
                     <Route path='template' element={<Template />} />
                    </Route>
                    <Route path='dekanolympics' element={<StudentSciences/>}>
                     <Route index element={<DekanOlympics />} />
                    </Route>
                  </Route>}

                {user && getRole(user) === "tutor" &&
                  <Route path="tutor" element={<MainTutor />}>
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="dashboard/:id" element={<DashboardDetail />} />
                  </Route>}

                {user && getRole(user) === "department" &&
                  <Route path="department" element={<MainDepartment />}>
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="dashboard/:id" element={<DashboardDetail />} />
                    <Route path="Dclassschedule" element={<ClassScheduleTeacher />} />
                    <Route path="classschedule" element={<ClassScheduleTeacher />} />
                    <Route path="filingapplication" element={<FilingApplication />} />
                    <Route path="sciences" element={<TeacherSciences />} />
                    <Route path="Ddiploma" element={<Thesis />} />
                    <Route path="Ddiploma/:id" element={<DiplomaTopics />} />
                    <Route path="diploma" element={<Thesis />} />
                    <Route path="diploma/:id" element={<DiplomaTopics />} />
                    <Route path="request" element={<Questionnaire />} />
                    <Route path="coursemanagement" element={<CourseManagement />} />
                    <Route path="applications" element={<Applications />} />
                    <Route path="patoks" element={<Patoks />} />
                    <Route path="final" element={<StudentSciences />} >
                      <Route index element={<Final_Dep />} />
                      <Route path='questions' element={<Questions />} />
                    </Route>
                  </Route>}
              </>
            ) : <></>}
            <Route path="*" element={<Navigate to={user ? "/" : "/"} />} />

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
