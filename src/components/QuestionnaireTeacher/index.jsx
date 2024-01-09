import * as React from "react"
import { Tabs } from '@mui/base';
import { TabPanel } from "@mui/base"
import { Tab, TabsList } from "./styles"
// import EmptyPanel from "../EmptyPanel";
import listLanguage from './language.json'
import { ContentWrapper } from "../../global_styles/styles";
import EmptyPanel from "../Questionnaire/EmptyPanel";

export default function QuestionnaireTeacher() {
  return (
    <ContentWrapper>
      <Tabs defaultValue={0} style={{ width: "100%" }}>
        <TabsList>
          <Tab>{listLanguage.practice['uz']}</Tab>
          <Tab>{listLanguage.Completed['uz']}</Tab>
        </TabsList>
        <TabPanel value={0}>
          <EmptyPanel text={listLanguage.currentQuestionnaires['uz']} />
        </TabPanel>
        <TabPanel value={1}>
          <EmptyPanel text={listLanguage.completedSurveys['uz']} />
        </TabPanel>
      </Tabs>
    </ContentWrapper>
  );
}