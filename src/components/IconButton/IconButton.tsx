import { ReactNode } from 'react';
import { IconButton as MUIIconButton } from '@mui/joy';
import { type IconButtonProps as MUIIconButtonProps } from '@mui/joy';

export type IconButtonProps = {
    children?: ReactNode,
} & MUIIconButtonProps

const IconButton = ({ children, ...props }: IconButtonProps) => {
    return (
        <MUIIconButton 
        variant={props?.variant || "plain"} 
        color={props?.color || "neutral"} 
        sx={{ 
            "--IconButton-size": "28px",
            ...props?.sx
        }}
        {...props}>
            {children}
        </MUIIconButton>
    );
};

export default IconButton;