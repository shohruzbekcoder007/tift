import * as React from "react"
import { Tabs } from '@mui/base';
import { TabPanel } from "@mui/base"
import { Tab, TabsList } from "./styles"
import EmptyPanel from "../EmptyPanel";

export default function QuestionnaireTabs() {
    return (
        <Tabs defaultValue={0} style={{ width: "100%" }}>
            <TabsList>
                <Tab>Amaldagi</Tab>
                <Tab>Tugallangan</Tab>
            </TabsList>
            <TabPanel value={0}>
                <EmptyPanel text="Amaldagi so‘rovnomalar mavjud emas"/>
            </TabPanel>
            <TabPanel value={1}>
                <EmptyPanel text="Tugallangan so‘rovnomalar mavjud emas!"/>
            </TabPanel>
        </Tabs>
    );
}