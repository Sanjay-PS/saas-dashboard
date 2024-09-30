import { Fragment, ReactNode } from "react";
import { Stack, Typography, TypographyProps } from "@mui/joy";
import { Slide } from "react-awesome-reveal";

type ListProps = {
    title?: ReactNode,
    titleProps?: TypographyProps,
    items: ReactNode[],
    spacing?: number,
}

export const List = ({ title, titleProps, items, spacing }: ListProps) => {
    return (
        <Stack spacing={spacing ?? 1}>
            {(title) && (
                <Typography 
                    level="title-sm" 
                    paddingX={0.5} 
                    paddingY={1} 
                    fontWeight={600} 
                    {...titleProps}
                >
                    {title}
                </Typography>
            )}
            {items.map((item, index) => (
                <Fragment key={index}>{item}</Fragment>
            ))}
        </Stack>
    );
};

export default List;