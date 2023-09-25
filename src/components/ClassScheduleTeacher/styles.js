import styled from "styled-components";

export const ClassScheduleTableWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    table {
        width: 100%;
        color: ${props => props.theme.color.text_color};
        font-size: 12px;
        font-weight: 500;
        line-height: 170%;
        border-collapse: collapse;
        thead {
            border-radius: 10px;
            tr {
                background-color: #F6F5F1;
            }
        }
        tr {
            th {
                padding: 12px 16px;
                border: 1px solid #EEE;
                background: rgba(248, 248, 248, 0.10);
                /* width: 152px; */
            }
        }
        tr.hr-tr {
            background-color: ${props => props.theme.color.main_color};
            th {
                margin: 0;
                padding: 0;
                height: 5px;
            }
        }
    }
`

export const TrBox = styled.div`
    width: 100%;
    height: 80%;
    text-align: left;
    /* border: 0.5px solid ${props => props.theme.color.main_color}; */
    border-radius: 5px;
    padding: 1rem 0.5rem;
    background-color: ${props => props.theme.color.frame_color};
    margin: 5px 0;
    cursor: pointer;
`

export const TrBoxActive = styled.div`
    width: 100%;
    height: 80%;
    text-align: left;
    /* border: 0.5px solid ${props => props.theme.color.main_color}; */
    border-radius: 5px;
    padding: 1rem 0.5rem;
    background-color: #24bd70;
    margin: 5px 0;
    cursor: pointer;
    
`

export const TrBoxHeader = styled.div`
    padding-bottom: 8px;
    font-size: 11px;
`

export const TrBoxHeaderActive = styled.div`
    padding-bottom: 8px;
    /* font-size: 11px; */
    color: white;
`


export const TrBoxFooter = styled.div`
    span.group {
        display: inline-block;
        margin-right: 3px;
        border-radius: 4px;
        border: 1px solid #039E51;
        color: #585858;
        font-size: 12px;
        line-height: 170%;
        padding: 2px 4px;
        
    }
    span.room {
        display: inline-block;
        color: #039E51;
        font-size: 12px;
        line-height: 170%;
        width: 100%;
        text-align: end;
        margin: 0.5rem 0 0 0;

    }
`


export const TrBoxFooterActive = styled.div`
    span.group {
        display: inline-block;
        margin-right: 3px;
        border-radius: 4px;
        border: 1px solid white;
        color: yellow;
        font-size: 12px;
        line-height: 170%;
        padding: 2px 4px;
    }
    span.room {
        display: inline-block;
        color: white;
        font-size: 12px;
        line-height: 170%;
        width: 100%;
        text-align: end;
        margin: 0.5rem 0 0 0;
}
`