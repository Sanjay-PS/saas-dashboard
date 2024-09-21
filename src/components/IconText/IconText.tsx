import { ReactNode } from 'react';
import { Avatar, Typography } from '@mui/joy';
import Grid from '@mui/material/Grid2';
import { Card, CardProps } from '../Card/Card';

export type IconTextProps = {
    icon?: ReactNode,
    iconProps?: CardProps,
    avatar?: string,
    primaryText: ReactNode,
    secondaryText?: ReactNode,
    padding?: number
}

const IconText = ({ icon, iconProps, avatar, primaryText, secondaryText, padding }: IconTextProps) => {
    return (
        <Grid container spacing={1} alignItems={(secondaryText) ? "start" : "center"} padding={padding ?? 0.5}>
            {(icon) && (
                <Grid>
                    <Card 
                        size='sm' 
                        variant='soft'
                        sx={{ 
                            "--Card-radius": "8px", 
                            "--Card-padding": "4px", 
                            width: "fit-content", 
                            ...iconProps?.sx 
                        }} 
                        {...iconProps}
                    >
                        {icon}
                    </Card>
                </Grid>
            )}
            {(avatar) && (
                <Grid>
                    <Avatar src={avatar} alt='Unknown' sx={{ "--Avatar-size": "24px" }} />
                </Grid>
            )}
            <Grid container direction={"column"} spacing={0} size="grow">
                <Grid sx={{ width: "-webkit-fill-available" }}>
                    <Typography 
                        level='title-sm' 
                        fontWeight={400} 
                        sx={{
                            overflow: "hidden",
                            textWrap: "nowrap",
                            textOverflow: "ellipsis",
                            width: "-webkit-fill-available"
                        }}                       
                    >
                        {primaryText}
                    </Typography>
                </Grid>
                {(secondaryText) && (
                    <Grid><Typography level='body-xs' fontWeight={400} color='neutral'>{secondaryText}</Typography></Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default IconText;