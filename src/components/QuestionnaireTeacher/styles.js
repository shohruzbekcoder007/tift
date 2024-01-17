import { styled } from "@mui/system"
import { TabsList as TabsListUnstyled } from "@mui/base"
import { buttonClasses as buttonUnstyledClasses } from "@mui/base"
import { Tab as TabUnstyled, tabClasses as tabUnstyledClasses } from "@mui/base"

export const Tab = styled(TabUnstyled)`
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  background-color: transparent;
  width: 180px;
  padding: 6px 8px;
  border: none;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  color: #4A5568;
  &:hover {
    color: #039E51;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    box-shadow: 0px 0px 40px rgba(227, 234, 255, 0.67);
    border-radius: 100px;
    margin: 4px;
    font-weight: 600;
    color: #202327;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabsList = styled(TabsListUnstyled)`
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  background: #7676801F;
  border-radius: 100px;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;