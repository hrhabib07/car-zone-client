import * as React from "react";

import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import TopBanner from "../../Home/TopBanner/TopBanner";
import NewCars from "../../Cars/NewCars/NewCars";
import OldCars from "../../Cars/OldCars/OldCars";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: ${blue[500]};
  max-width: "100%";
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const NavigationTab = () => {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Home</Tab>
        <Tab>New Cars</Tab>
        <Tab>Old Cars</Tab>
      </TabsList>
      <TabPanel value={0} SX={{}}>
        <TopBanner></TopBanner>
      </TabPanel>
      <TabPanel value={1}>
        <NewCars></NewCars>
      </TabPanel>
      <TabPanel value={2}>
        <OldCars></OldCars>
      </TabPanel>
    </TabsUnstyled>
  );
};

export default NavigationTab;
