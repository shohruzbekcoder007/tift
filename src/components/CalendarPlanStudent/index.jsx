import * as React from "react"
import { Tabs } from '@mui/base';
import { TabPanel } from "@mui/base"
import { Tab, TabsList } from "./styles"
import { ContentWrapper } from "../../global_styles/styles";
import { Paper } from "@mui/material";
import CalendarStudent from '../StudentSciences/CalendarPlan/CalendarPlan'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getStudentLesson } from "./requests";
import { my_scince_lessons } from "../../utils/API_urls";

export default function CalendarPlanStudent() {
  const [lessonsType, setlessonsType] = useState([]);
  const [lessonsTypeSource, setlessonsTypeSource] = useState([]);
  const {state} = useLocation()


  useEffect(() => {
    getStudentLesson(`${my_scince_lessons}?patok=${state.data}`, (response) => {
      setlessonsType(response.data.types)
      setlessonsTypeSource(response.data.results)
  }, (error) => {
      console.log(error)
    })
  } , [])
 
  return (
    <Paper
      sx={{
        width: "100%",
        boxShadow: "none",
        borderRadius: "10px"
      }}
    >
      <ContentWrapper>
        <Tabs defaultValue={0} style={{ width: "100%" }}>
          <TabsList>
            {
              lessonsType?.map((elem, index) => {
                return (
                  
                    elem === 'lecture' ? <Tab key={index} >Ma'ruza</Tab> :
                    elem === 'practical' ? <Tab key={index} >Amalyot</Tab> :
                    elem === 'lab' ? <Tab key={index} >Labaratoriya</Tab> :
                    <></>
                )
              })
            }
          </TabsList>
          {
            lessonsTypeSource?.map((elem, index) => {
              return(
                <TabPanel value={index}>
                  <CalendarStudent data = {elem} />
                </TabPanel>
              )
            })
          }
          
          
        </Tabs>
      </ContentWrapper>
    </Paper>
  );
}