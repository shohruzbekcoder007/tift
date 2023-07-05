import * as React from "react"
import { Tabs } from '@mui/base';
import { TabPanel } from "@mui/base"
import { Tab, TabsList } from "./styles"
import EmptyPanel from "../EmptyPanel";
import listLanguage from './language.json'
export default function QuestionnaireTabs() {
    return (
        <Tabs defaultValue={0} style={{ width: "100%" }}>
            <TabsList>
                <Tab>{listLanguage.practice['ru']}</Tab>
                <Tab>{listLanguage.Completed['ru']}</Tab>
            </TabsList>
            <TabPanel value={0}>
                <EmptyPanel text={listLanguage.currentQuestionnaires['ru']}/>
            </TabPanel>
            <TabPanel value={1}>
                <EmptyPanel text={listLanguage.completedSurveys['ru']}/>
            </TabPanel>
        </Tabs>
    );
}