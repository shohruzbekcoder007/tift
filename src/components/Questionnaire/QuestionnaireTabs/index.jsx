import * as React from "react"
import { Tabs } from '@mui/base';
import { TabPanel } from "@mui/base"
import { Tab, TabsList } from "./styles"
import EmptyPanel from "../EmptyPanel";
import listLanguage from './language.json'
import { useSelector } from "react-redux";

export default function QuestionnaireTabs() {

    // lang
    const language = useSelector(state => state.language)

    return (
        <Tabs defaultValue={0} style={{ width: "100%" }}>
            <TabsList>
                <Tab>{listLanguage.practice[language]}</Tab>
                <Tab>{listLanguage.Completed[language]}</Tab>
            </TabsList>
            <TabPanel value={0}>
                <EmptyPanel text={listLanguage.currentQuestionnaires[language]}/>
            </TabPanel>
            <TabPanel value={1}>
                <EmptyPanel text={listLanguage.completedSurveys[language]}/>
            </TabPanel>
        </Tabs>
    );
}