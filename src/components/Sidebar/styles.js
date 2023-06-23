import styled from "styled-components";

export const SidebarWrapper = styled.div`
    width: 272px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    border-right: 1px solid ${props => props.theme.color.stroke_color};
`

export const SidebarHeader = styled.div`
    width: 100%;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SidebarLinkList = styled.ul`
    padding: 20px;
`

export const SidebarLinkListItem = styled.li`
    .active {
        background-color: ${props => props.theme.color.main_color} !important;
    }
    svg {
        color: #6A6A6A
    }

    .active span {
        color: #FFF;
    }
    .active svg {
        color: #FFF
    }
    margin-bottom: 10px;
    a {
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        border-radius: 10px;
        color: #FFF;
    }
    a:hover {
        background-color: ${props => props.theme.color.secondary_color}; 
    }
`

export const SidebarLinkListItemImg = styled.div`
    padding-right: 10px;
    display: inline-block;
`

export const SidebarLinkListItemText = styled.span`
    font-weight: ${props => props.theme.text.subtitle1.font_weight};
    font-size: ${props => props.theme.text.subtitle1.font_size};
    color: ${props => props.theme.color.secondary_text_color};
    padding-bottom: 5px;

    .active {
        color: #FFF
    }
`