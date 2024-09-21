import { Stack } from "@mui/joy";
import List from "../List/List";
import IconText from "../IconText/IconText";
import { Broadcast, BugBeetle, User } from "@phosphor-icons/react";

const notifications = [
    <IconText
        icon={<BugBeetle size={16} />}
        iconProps={{ color: "primary" }}
        primaryText={"You have a bug that needs to be fixed."}
        secondaryText={"Just now"}
    />,
    <IconText
        icon={<User size={16} />}
        iconProps={{ color: "neutral" }}
        primaryText={"New user registered"}
        secondaryText={"59 minutes ago"}
    />,
    <IconText
        icon={<BugBeetle size={16} />}
        iconProps={{ color: "primary" }}
        primaryText={"You have a bug that needs to be fixed."}
        secondaryText={"12 hours ago"}
    />,
    <IconText
        icon={<Broadcast size={16} />}
        iconProps={{ color: "neutral" }}
        primaryText={"Andi Lane subscribed to you"}
        secondaryText={"Today, 11:59 AM"}
    />
]

const activities = [
    <IconText
        avatar={"./images/avatar-01.png"}
        primaryText={"You have a bug that needs to be fixed."}
        secondaryText={"Just now"}
    />,
    <IconText
        avatar={"./images/avatar-02.png"}
        primaryText={"Released a new version"}
        secondaryText={"59 minutes ago"}
    />,
    <IconText
        avatar={"./images/avatar-03.png"}
        primaryText={"Submitted a bug"}
        secondaryText={"12 hours ago"}
    />,
    <IconText
        avatar={"./images/avatar-04.png"}
        primaryText={"Modified A data in Page X"}
        secondaryText={"Today, 11:59 AM"}
    />,
    <IconText
        avatar={"./images/avatar-05.png"}
        primaryText={"Deleted a page in Project X"}
        secondaryText={"Feb 2, 2023"}
    />,
]

const contacts = [
    <IconText
        avatar={"./images/contact-01.png"}
        primaryText={"Natali Craig"}
    />,
    <IconText
        avatar={"./images/contact-02.png"}
        primaryText={"Drew Cano"}
    />,
    <IconText
        avatar={"./images/contact-03.png"}
        primaryText={"Orlando Diggs"}
    />,
    <IconText
        avatar={"./images/contact-04.png"}
        primaryText={"Andi Lane"}
    />,
    <IconText
        avatar={"./images/contact-05.png"}
        primaryText={"Kate Morrison"}
    />,
    <IconText
        avatar={"./images/contact-06.png"}
        primaryText={"Koray Okumus"}
    />
]

const RightBar = () => {
    return (
        <Stack spacing={3}>
            <List
                title={"Notifications"}
                items={notifications}
            />
            <List
                title={"Activities"}
                items={activities}
            />
            <List
                title={"Contacts"}
                items={contacts}
            />
        </Stack>
    );
};

export default RightBar;