import { ReactNode } from "react";
import { Stack, Typography } from "@mui/joy";
import { SubtleTabs } from "../Tabs/Tabs";
import { Card } from "../Card/Card";
import IconText from "../IconText/IconText";
import Tree, { TreeProps } from "../Tree/Tree";
import Grid from "@mui/material/Grid2";
import { BookOpen, ChartPieSlice, ChatsTeardrop, Folder, IdentificationBadge, IdentificationCard, Notebook, Package, ShoppingBagOpen, UsersThree } from "@phosphor-icons/react";

type ListItemProps = {
    content: ReactNode
}

const ListItem = ({ content }:ListItemProps) => (
    <Grid container spacing={1} alignItems={"center"} paddingX={1.5} paddingY={0.5}>
        <Grid>
            <Card 
                size='sm' 
                variant='soft'
                sx={{ 
                    "--Card-radius": "50%", 
                    "--Card-padding": "4px",
                }} 
            />
        </Grid>
        <Grid container direction={"column"} spacing={0} size="grow">
            <Grid sx={{ width: "-webkit-fill-available" }}>
                <Typography 
                    level='title-sm' 
                    fontWeight={400}                       
                >
                    {content}
                </Typography>
            </Grid>            
        </Grid>
    </Grid>
)

type ListProps = {
    items: ReactNode[]
}

const List = ({ items }: ListProps) => (
    <Stack spacing={0.5}>
        {items.map((item, index) => <ListItem key={index} content={item}/>)}
    </Stack>
)

const tabs = [
    { title: "Favourites", panel: <List items={["Overview", "Projects"]} /> },
    { title: "Recently", panel: <List items={["Dashboard", "Campaigns", "Account"]} /> },
]

type TreeWithTitleProps = {
    children: ReactNode,
    title: string
}

const TreeWithTitle = ({children, title}:TreeWithTitleProps) => (
    <Stack>
        <Typography 
            level="title-sm" 
            paddingX={1.25} 
            paddingY={0} 
            fontWeight={400}
            sx={{ color: "neutral.400" }} 
        >
            {title}
        </Typography>
        {children}
    </Stack>
)

const SideBar = () => {
    return (
        <Stack spacing={2}>
            <IconText
                avatar={"./images/ByeWind.png"}
                primaryText={"ByeWind"}
            />

            <SubtleTabs tabs={tabs}/>

            <TreeWithTitle title={"Dashboards"}>
                <Tree items={dashboardTreeItems.items} selectedItem={dashboardTreeItems.selectedItem}/>
            </TreeWithTitle>

            <TreeWithTitle title={"Pages"}>
                <Tree items={pagesTreeItems.items} selectedItem={pagesTreeItems.selectedItem}/>
            </TreeWithTitle>
        </Stack>
    );
};

const dashboardTreeItems: TreeProps = {
    items: [
        { 
            icon:  <ChartPieSlice size={20} weight="duotone" />,
            children: "Default",
            link: "./default"
        },
        { 
            icon:  <Package size={20} weight="duotone" />,
            children: "Orders",
            link: "./orders"
        },
        { 
            icon:  <ShoppingBagOpen size={20} weight="duotone" />,
            children: "eCommerce",
            nestedItems: ["Lorem", "Ipsum"]
        },
        { 
            icon:  <Folder size={20} weight="duotone" />,
            children: "Projects",
            nestedItems: ["Lorem", "Ipsum"]
        },
        { 
            icon:  <BookOpen size={20} weight="duotone" />,
            children: "Online Courses",
            nestedItems: ["Lorem", "Ipsum"]
        },
    ],
    // selectedItem: 0
}

const pagesTreeItems: TreeProps = {
    items: [
        { 
            icon:  <IdentificationBadge size={20} weight="duotone" />,
            children: "User Profile",
            nestedItems: ["Overview", "Projects", "Campaigns", "Documents", "Followers"]
        },
        { 
            icon:  <IdentificationCard size={20} weight="duotone" />,
            children: "Account",
            nestedItems: ["Lorem", "Ipsum"]
        },
        { 
            icon:  <UsersThree size={20} weight="duotone" />,
            children: "Corporate",
            nestedItems: ["Lorem", "Ipsum"]
        },
        { 
            icon:  <Notebook size={20} weight="duotone" />,
            children: "Blog",
            nestedItems: ["Lorem", "Ipsum"]
        },
        { 
            icon:  <ChatsTeardrop size={20} weight="duotone" />,
            children: "Blog",
            nestedItems: ["Lorem", "Ipsum"]
        },
    ]
}

export default SideBar;