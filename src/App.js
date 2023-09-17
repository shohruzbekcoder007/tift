import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom"
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
import CalendarDayWeekWrapper from './components/CalendarDayWeekWrapper'
import MainDekan from './components/MainDekan'
import MainTutor from './components/MainTutor'
import MainDepartment from './components/MainDepartment'
import TeacherSciencesMain from './components/TeacherSciences/TeacherSciencesMain'
import CalendarPlan, { CalendarPlanMain } from './components/TeacherSciences/CalendarPlan'
import CalendarPlans from './components/StatistikaList/CalendarPlan/CalendarPlans'
import CalendarStudent from './components/StudentSciences/CalendarPlan/CalendarPlan'
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
import { getRole } from './components/Login/requests'
import DekanQuestions from './components/DekanQuestions/DekanQuestions'
import Template from './components/DekanQuestions/Template'
import DekanOlympics from './components/DekanOlympics/DekanOlympics'
import { user_me } from './utils/API_urls'
import { setUser } from './redux/action/userActions'
import PageNotFound from './components/PageNotFound'
import Tasks from './components/StudentSciences/Tasks/Tasks'
import TasksTeacher from './components/Tasks/index'
import MainAdmin from './components/MainAdmin'
import Variables from './components/AdminList/Variables'
import Users from './components/AdminList/Users'
import Admin_Attendance from './components/AdminList/Attendance'
import Reference from './components/AdminList/Reference'
import StudentDocuments from './components/AdminList/StudentDocuments'
import Semestr from './components/AdminList/Semestr'
import InterimControl from './components/AdminList/Semestr/InterimControl'
import Streams from './components/AdminList/Streams'
import NBfix from './components/AdminList/NBfix'
import TransferStudents from './components/AdminList/TransferStudents'
import Scholarship from './components/AdminList/Scholarship'
import AddCredit from './components/AdminList/AddCredit'
import Building from './components/AdminList/Building'
import Room from './components/AdminList/Building/Room'
import University from './components/AdminList/University'
import Organizations from './components/AdminList/Organizations'
import Dayoff from './components/AdminList/Dayoff'
import Agreement from './components/AdminList/Agreement'
import Payments from './components/AdminList/Payments'
import Readagain from './components/AdminList/Readagain'
import ContractpricesMarketing from './components/AdminList/Contractprices'
import Sections from './components/AdminList/Sections'
import Faculties from './components/AdminList/Faculties'
import Kafedra from './components/AdminList/Faculties/Kafedra'
import Employees from './components/AdminList/Employees'
import ApplicationsReport from './components/ApplicationsReport'
import Career from './components/AdminList/Employees/Career'
import Show from './components/AdminList/Employees/Show'
import EditEmployees from './components/AdminList/Students/AddStudent'
import Students from './components/AdminList/Students'
import InformationStudent from './components/AdminList/Students/Information'
import Directions from './components/AdminList/Directions'
import ScienesStudent from './components/AdminList/Directions/Scienes'
import Group from './components/AdminList/Group'
import News from './components/AdminList/News'
import Contractprices from './components/AdminList/ContractpricesAdmin'
import SciencesAdmin from './components/AdminList/SciencesAdmin'
import Add from './components/AdminList/SciencesAdmin/Add'
import Edit from './components/AdminList/SciencesAdmin/Edit'
import CalendarPlanAdmin from './components/AdminList/SciencesAdmin/CalendarPlanAdmin'
import Plan from './components/AdminList/Plan'
import Curriculum from './components/AdminList/Plan/Curriculum'
import PlanSciences from './components/AdminList/Plan/PlanSciences'
import AdminUsers from './components/AdminList/AdminUsers'
import AdminUsersAdd from './components/AdminList/AdminUsers/AdminUsersAdd'
import AdminUsersEdit from './components/AdminList/AdminUsers/AdminUsersEdit'
import Roles from './components/AdminList/Roles'
import Server from './components/AdminList/Server'
import CalendarPlanTeacher from './components/CourseManagement/CalendarPlanTeacher'
import Vedomost from './components/Vedomost'
import VedomostKafedra from './components/VedomostKafedra'
import CalendarPlanStudent from "./components/CalendarPlanStudent"
import TutorGroups from './components/AdminList/TutorGroups'
import TutorStudents from './components/TutorStudents'
import SignInSide from './components/SignInSide'
import DekanStudent from './components/DekanStudent'
import IndividualPysical from './components/IndividualPysical'
import TutorSeeSchedule from './components/TutorSeeSchedule'
import MainLawyer from './components/MainLawyer'
import LawyerAllStudents from './components/LawyerAllStudents'
import LawyerDashboard from './components/LawyerDashboard'
import AddEmployees from './components/AdminList/Employees/AddEmployees'
import ScheduleStudy from './components/AdminList/ScheduleStudy'
import ScheduleStudyTwo from './components/AdminList/ScheduleStudyTwo'
import Schedule from './components/AdminList/Streams/Schedule'
import TeacherJournal from './components/TeacherJournal'


function App() {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  
  const successfulFunctionGetRole = (response) => {
    dispatch(setUser(response.data))
  }

  const errorFunctionGetRole = (error) => {
    console.log(error)
  }

  useEffect(() => {
    getRole(user_me, successfulFunctionGetRole, errorFunctionGetRole)
  }, [])

  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {sessionStorage.getItem("access_token") || user ? (
              <>
                <Route path="teacher" element={<Main user={user} />}>
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="nb" element={<Attend />} />
                  <Route path="filingapplication" element={<FilingApplication />} />
                  <Route path="sciences" element={<TeacherSciences />}>
                    <Route index element={<TeacherSciencesMain />} />
                    <Route path='addcalendarplan' element={<CalendarPlanTeacher />} />
                    <Route path="calendarplan" element={<CalendarPlanMain />} >
                      <Route index element={<CalendarPlan />} />
                      <Route path="thematicblock" element={<ThematicBlock />} />
                    </Route>
                    <Route path="vedomost" element={<Vedomost />} />
                    <Route path="tasks" element={<TasksTeacher />} />
                    <Route path="journal" element={<TeacherJournal />} />
                  </Route>
                  <Route path="classschedule" element={<ClassScheduleTeacher />} />
                  <Route path="diploma" element={<Thesis />} />
                  <Route path="diploma/:id" element={<DiplomaTopics />} />
                  <Route path="request" element={<Questionnaire />} />
                  {/* <Route path="coursemanagement" element={<StudentSciences />} >
                    <Route index element={<CourseManagement />} />
                    <Route path='calendarplan' element={<CalendarPlanTeacher />} />
                  </Route> */}
                  <Route path="videoguide" element={<VideoGuide />} />
                  <Route path="dashboard/:id" element={<DashboardDetail />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="details/:id" element={<DashboardDetail />} />
                </Route>

                <Route path="student" element={<MainStudent />}>
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="dashboard/:id" element={<DashboardDetail />} />
                  <Route path="readagain" element={<ReadAgain />} />
                  <Route path="personalplan" element={<PersonalPlan />} />
                  {/* <Route path="olympics" element={<Olympics />} /> */}
                  {/* <Route path="thesisresult" element={<ThesisResult />} /> */}
                  <Route path="information" element={<Information />} />
                  <Route path="request" element={<QuestionnaireTeacher />} />
                  <Route path="sciencescalendar" element={<CalendarDayWeekWrapper />} />
                  <Route path="sciences" element={<StudentSciences />}>
                    <Route index element={<StudentSciencesMain />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="calendarplan" element={<CalendarPlanStudent />} />
                    {/* <Route path="calendarplan" element={<CalendarStudent />} />CalendarPlan */}
                  </Route>
                  <Route path="final" element={<Final />} />
                  <Route path="ScienceSelection" element={<ScienceSelection />} />
                  <Route path="services" element={<Student_services />} />
                  <Route path="videoguide" element={<VideoGuide />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="details/:id" element={<DashboardDetail />} />
                </Route>

                <Route path="dekan" element={<MainDekan />}>
                  <Route path="profile" element={<Profile />} />
                  <Route path="videoguide" element={<VideoGuide />} />
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="dashboard/:id" element={<DashboardDetail />} />
                  <Route path="students" element={<StudentSciences />} >
                    <Route index element={<DekanStudent />} />
                    <Route path='appropriation' element={<Appropriation />} />
                    <Route path='students' element={<DekanStudents />} />
                  </Route>
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
                  <Route path='dekanquestions' element={<StudentSciences />}>
                    <Route index element={<DekanQuestions />} />
                    <Route path='template' element={<Template />} />
                  </Route>
                  <Route path='dekanolympics' element={<StudentSciences />}>
                    <Route index element={<DekanOlympics />} />
                  </Route>
                </Route>

                <Route path="tutor" element={<MainTutor />}>
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="dashboard/:id" element={<DashboardDetail />} />
                  <Route path="groups" element={<StudentSciences />} >
                    <Route index element={<TutorGroups />} />
                    <Route path='students' >
                      <Route index element={<TutorStudents />} />
                      <Route path='individual-pysical' element={<IndividualPysical />} />
                      <Route path='tutor-see-schedule' element={<TutorSeeSchedule />} />
                    </Route>
                  </Route>
                  <Route path="profile" element={<Profile />} />
                </Route>

                <Route path="department" element={<MainDepartment />}>
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="dashboard/:id" element={<DashboardDetail />} />
                  <Route path="Dclassschedule" element={<ClassScheduleTeacher />} />
                  <Route path="classschedule" element={<ClassScheduleTeacher />} />
                  <Route path="filingapplication" element={<FilingApplication />} />
                  <Route path="sciences" element={<TeacherSciences />}>
                    <Route index element={<TeacherSciencesMain />} />
                    <Route path="calendarplan" element={<CalendarPlanMain />} >
                      <Route index element={<CalendarPlan />} />
                      <Route path="thematicblock" element={<ThematicBlock />} />
                    </Route>
                    <Route path="vedomost" element={<Vedomost />} />
                    <Route path="tasks" element={<TasksTeacher />} />
                  </Route>
                  <Route path="Ddiploma" element={<Thesis />} />
                  <Route path="Ddiploma/:id" element={<DiplomaTopics />} />
                  <Route path="diploma" element={<Thesis />} />
                  <Route path="diploma/:id" element={<DiplomaTopics />} />
                  <Route path="request" element={<Questionnaire />} />
                  <Route path="coursemanagement" element={<StudentSciences />} >
                    <Route index element={<CourseManagement />} />
                    <Route path='calendarplan' element={<CalendarPlanTeacher />} />
                  </Route>
                  <Route path="applications" element={<Applications />} />
                  <Route path="patoks" element={<StudentSciences />}>
                    <Route index element={<Patoks />} />
                    <Route path="vedomost" element={<VedomostKafedra />} />
                  </Route>

                  <Route path="nb" element={<Attend />} />
                  <Route path="final" element={<StudentSciences />} >
                    <Route index element={<Final_Dep />} />
                    <Route path='questions' element={<Questions />} />
                  </Route>
                  <Route path="profile" element={<Profile />} />
                </Route>

                <Route path="lawyer" element={<MainLawyer />}>
                  <Route path="dashboard" element={<LawyerDashboard />} />
                  <Route path="students" element={<LawyerAllStudents />} />
                </Route>


                <Route path="admin" element={<MainAdmin />}>
                  <Route path="variables" element={<Variables />} />
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="dashboard/:id" element={<DashboardDetail />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="videoguide" element={<VideoGuide />} />
                  <Route path="users" element={<Users />} />
                  <Route path="attendance" element={<Admin_Attendance />} />
                  <Route path="reference" element={<Reference />} />
                  <Route path="studentdocuments" element={<StudentDocuments />} />
                  <Route path="semester" element={<StudentSciences />} >
                    <Route index element={<Semestr />} />
                    <Route path='control' element={<InterimControl />} />
                  </Route>
                  <Route path="streams" element={<StudentSciences />} >
                    <Route index element={<Streams />} />
                    <Route path='schedule' element={<Schedule />} />
                  </Route>
                  <Route path="NBfix" element={<NBfix />} />
                  <Route path="transferstudents" element={<TransferStudents />} />
                  <Route path="scholarship" element={<Scholarship />} />
                  <Route path="addcredit" element={<AddCredit />} />
                  <Route path="building" element={<StudentSciences />} >
                    <Route index element={<Building />} />
                    <Route path='room' element={<Room />} />
                  </Route>
                  <Route path="university" element={<University />} />
                  <Route path="organizations" element={<Organizations />} />
                  <Route path="dayoff" element={<Dayoff />} />
                  <Route path="agreement" element={<StudentSciences />} >
                    <Route index element={<Agreement />} />
                    <Route path='payments' element={<Payments />} />
                  </Route>
                  <Route path="readagain" element={<Readagain />} />
                  <Route path="contractpricesmarketing" element={<ContractpricesMarketing />} />
                  <Route path="sections" element={<Sections />} />
                  <Route path="faculties" element={<StudentSciences />} >
                    <Route index element={<Faculties />} />
                    <Route path='kafedra' element={<Kafedra />} />
                  </Route>
                  <Route path="employees" element={<StudentSciences />} >
                    <Route index element={<Employees />} />
                    <Route path='career' element={<Career />} />
                    <Route path='show' element={<Show />} />
                    <Route path='edit' element={<EditEmployees />} />
                    <Route path='add' element={<AddEmployees />} />
                  </Route>
                  <Route path="students" element={<StudentSciences />} >
                    <Route index element={<Students />} />
                    <Route path='information' element={<InformationStudent />} />
                    <Route path='add' element={<EditEmployees />} />
                    <Route path='edit' element={<EditEmployees />} />
                  </Route>
                  <Route path="directions" element={<StudentSciences />} >
                    <Route index element={<Directions />} />
                    <Route path='sciences' element={<ScienesStudent />} />
                  </Route>
                  <Route path='group' element={<Group />} />
                  <Route path='news' element={<News />} />
                  <Route path='contractprices' element={<Contractprices />} />

                  <Route path="sciences" element={<StudentSciences />} >
                    <Route index element={<SciencesAdmin />} />
                    <Route path='add' element={<Add />} />
                    <Route path='edit' element={<Edit />} />
                    <Route path='calendarplan' element={<CalendarPlanAdmin />} />
                  </Route>

                  <Route path="plan" element={<StudentSciences />} >
                    <Route index element={<Plan />} />
                    <Route path="curriculum" element={<Outlet />} >
                      <Route index element={<Curriculum />} />
                      <Route path='sciences' element={<PlanSciences />} />
                    </Route>
                  </Route>
                  <Route path="adminusers" element={<StudentSciences />} >
                    <Route index element={<AdminUsers />} />
                    <Route path='add' element={<AdminUsersAdd />} />
                    <Route path='edit' element={<AdminUsersEdit />} />
                  </Route>
                  <Route path='roles' element={<Roles />} />
                  <Route path='server' element={<Server />} />
                  <Route path="students" element={<StudentSciences />} >
                    <Route index element={<Students />} />
                    <Route path='information' element={<InformationStudent />} />
                  </Route>
                  <Route path="directions" element={<StudentSciences />} >
                    <Route index element={<Directions />} />
                    <Route path='sciences' element={<ScienesStudent />} />
                  </Route>
                  <Route path='group' element={<Group />} />
                  <Route path='news' element={<News />} />
                  <Route path='contractprices' element={<Contractprices />} />

                  <Route path="sciences" element={<StudentSciences />} >
                    <Route index element={<SciencesAdmin />} />
                    <Route path='add' element={<Add />} />
                    <Route path='edit' element={<Edit />} />
                    <Route path='calendarplan' element={<CalendarPlanAdmin />} />
                  </Route>

                  <Route path="plan" element={<StudentSciences />} >
                    <Route index element={<Plan />} />
                    <Route path="curriculum" element={<Outlet />} >
                      <Route index element={<Curriculum />} />
                      <Route path='sciences' element={<PlanSciences />} />
                    </Route>
                  </Route>
                  <Route path="adminusers" element={<StudentSciences />} >
                    <Route index element={<AdminUsers />} />
                    <Route path='add' element={<AdminUsersAdd />} />
                    <Route path='edit' element={<AdminUsersEdit />} />
                  </Route>
                  <Route path='roles' element={<Roles />} />
                  <Route path='server' element={<Server />} />
                  <Route path='schedule' element={<ScheduleStudy />} />
                  <Route path='scheduletwo' element={<ScheduleStudyTwo />} />

                </Route>
              </>
            ) : <></>}
            <Route path="pagenotfound" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to={user == null ? "/" : "pagenotfound"} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>

  );
}

export default App;
