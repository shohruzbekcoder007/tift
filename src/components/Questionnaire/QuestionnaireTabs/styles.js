import { styled } from "@mui/system"
import { TabsList as TabsListUnstyled } from "@mui/base"
import { buttonClasses as buttonUnstyledClasses } from "@mui/base"
import { Tab as TabUnstyled, tabClasses as tabUnstyledClasses } from "@mui/base"

export const Tab = styled(TabUnstyled)`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 25px;
  background-color: transparent;
  width: 100%;
  padding: 18px 22px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  color: #a5a5a5;
  &:hover {
    color: #768fdb;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    box-shadow: 0px 0px 40px rgba(227, 234, 255, 0.67);
    border-radius: 10px;
    color: #4364cc;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabsList = styled(TabsListUnstyled)`
  width: 100%;
  background: #f7f9ff;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;