import { ReactNode } from 'react';
import { Card as MUICard, Stack, Typography } from '@mui/joy';
import { type CardProps as MUICardProps } from '@mui/joy';

export type CardProps = {
    children?: ReactNode,
} & MUICardProps

export const Card = ({ children, ...props }: CardProps) => {
    return (
        <MUICard {...props} sx={{ "--Card-radius": "16px", ...props?.sx }}>
            {children}
        </MUICard>
    );
};

export type CardWithTitleProps = {
    title: string,
    spacing?: number,
} & CardProps

export const CardWithTitle = ({ children, title, spacing, ...props }: CardWithTitleProps) => {
    return (
        <Card size="lg" {...props}>
            <Stack spacing={spacing ?? 1}>
                <Typography level="title-sm" fontWeight={600}>{title}</Typography>
                {children}
            </Stack>
        </Card>
    );
};