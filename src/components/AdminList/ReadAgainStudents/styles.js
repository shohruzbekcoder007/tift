import styled from 'styled-components'

export const AttendSearchButton = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const BuildingModalLang = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    margin: 1rem 0;
    `

export const BuildingModalLangText = styled.p`
    font-size: 17px;
    cursor: pointer;
    color: ${props => props.theme.color.secondary_text_color};
    :hover {
        color: ${props => props.theme.color.main_color};
    }
    font-weight: 400;
    border-right: 2px solid ${props => props.theme.color.secondary_color};
    padding: 0 1.5rem ;
    `

export const ModalBoxAddintional = styled.div`
    border-radius: 10px;
    width: 1260px;
    height: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;

    @media (max-width: 576px) {
        width: 350px;
}
`