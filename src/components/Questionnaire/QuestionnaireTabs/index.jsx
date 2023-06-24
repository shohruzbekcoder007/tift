import * as React from "react"
import { Tabs } from '@mui/base';
import { TabPanel } from "@mui/base"
import { Tab, TabsList } from "./styles"


export default function QuestionnaireTabs() {
    return (
        <Tabs defaultValue={0}>
            <TabsList>
                <Tab>Telefon/Pochta</Tab>
                <Tab>ERI orqali</Tab>
            </TabsList>
            <TabPanel value={0}>
                ERI orqali
            </TabPanel>
            <TabPanel value={1}>ERI orqali</TabPanel>
        </Tabs>
    );
}