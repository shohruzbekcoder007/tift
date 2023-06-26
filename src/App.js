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
// import {TabsUnstyled} from "@mui/base"

function App() {
  return (
    <MuiTheme theme={muiTheme}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<p>login</p>}/>
            <Route path="teacher" element={<Main />}>
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="nb" element={<p>NB larni tugirlash</p>} />
              <Route path="filingapplication" element={<FilingApplication/>} />
              <Route path="sciences" element={<p>sciences</p>} />
              <Route path="classschedule" element={<ClassScheduleTeacher />} />
              <Route path="diploma" element={<Thesis />} />
              <Route path="request" element={<Questionnaire/>} />
              <Route path="coursemanagement" element={<p>coursemanagement</p>} />
              <Route path="videoguide" element={<VideoGuide />} />
              <Route path="dashboard/:id" element={<DashboardDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
