import * as React from "react"
import { Tabs } from '@mui/base';
import { TabPanel } from "@mui/base"
import { Tab, TabsList } from "./styles"
import { ContentWrapper } from "../../global_styles/styles";
import { Paper } from "@mui/material";
import CalendarStudent from '../StudentSciences/CalendarPlan/CalendarPlan'

export default function CalendarPlanStudent() {
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
            <Tab>Ma’ruza</Tab>
            <Tab>Amaliyot</Tab>
          </TabsList>
          <TabPanel value={0}>
            <CalendarStudent/>
          </TabPanel>
          <TabPanel value={1}>
            <CalendarStudent/>
          </TabPanel>
        </Tabs>
      </ContentWrapper>
    </Paper>
  );
}