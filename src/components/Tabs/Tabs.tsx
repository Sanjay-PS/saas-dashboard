import { Tabs as MUITabs, TabPanel } from '@mui/joy';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { ReactNode } from 'react';

export type SubtleTabs = {
    tabs: {
        title: ReactNode,
        panel: ReactNode
    }[] 
}

export function SubtleTabs({ tabs }: SubtleTabs) {
    return (
        <MUITabs defaultValue={0} sx={{ bgcolor: 'transparent', pb: 1 }}>
            <TabList
                disableUnderline
                sx={{
                    gap: 0.5,
                    borderRadius: 'lg',
                    mb: 0.75,
                    fontSize: 14,
                    [`& .${tabClasses.root}[aria-selected="true"]`]: {
                        color: 'neutral.400',
                        bgcolor: 'transparent'
                    },
                    [`& .${tabClasses.root}`]: {
                        color: 'neutral.300',
                        px: 1,
                        py: 0.25,
                        minBlockSize: 28,
                        borderRadius: 'sm',
                    },
                    [`& .${tabClasses.root}:hover`]: {
                        color: 'neutral.700',
                        bgcolor: 'neutral.100'
                    },
                }}
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} disableIndicator>{tab.title}</Tab>
                ))}
            </TabList>
            {tabs.map((tab, index) => (
                <TabPanel key={index} value={index} sx={{ p:0 }}>{tab.panel}</TabPanel>
            ))}
        </MUITabs>
    );
}
