import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { CaretRight, ChartPieSlice } from '@phosphor-icons/react';
import { ListItemContent } from '@mui/joy';
import { ReactNode, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


type TreeItemProps = {
    arrow?: 'open' | 'close' | 'hidden',
    icon?: ReactNode,
    children: ReactNode,
    selected?: boolean,
    link?: string,
    onClick?: () => void
}

const TreeItem = ({ arrow, icon, children, selected, link, onClick }: TreeItemProps) => {
    const navigate = useNavigate();
    
    const handleTreeItemClick = useCallback(() => {
        if(onClick) onClick();
        else navigate(link ?? "")
    }, [link, onClick])

    return (
        <ListItem>
            <ListItemButton selected={selected} variant="plain" onClick={handleTreeItemClick}>        
                {(arrow) && (
                    <CaretRight 
                        size={16}
                        style={{ opacity: 0.4, transform: `rotate(${arrow === "open" ? "90DEG" : "0DEG"})`, transition: 'transform 200ms' }}
                    />            
                )} 
                {(!arrow || arrow === "hidden") && (
                    <CaretRight size={16} style={{ visibility: "hidden" }} />            
                )} 
                {(icon) ? (
                    <>{icon}</>
                ): (
                    <ChartPieSlice size={20} weight='duotone' style={{ visibility: "hidden" }} />
                )}
                <ListItemContent sx={{ fontSize: "14px" }}>{children}</ListItemContent>
            </ListItemButton>
        </ListItem>
    )
}

type NestedTreeItemProps = Omit<TreeItemProps, 'arrow' | 'onClick'> & {
    nestedItems?: ReactNode[]
}

const NestedTreeItem = ({ icon, children, nestedItems, selected, link }: NestedTreeItemProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleTreeOpen = () => {
        setOpen(prev => !prev);
    }
    
    return (
        <ListItem sx={{ gap: "0px", }} nested>
            <TreeItem 
                arrow={open ? "open" : "close"} 
                onClick={handleTreeOpen} 
                icon={icon}
                selected={selected}
                link={link}
                >
                {children}
            </TreeItem>
            {/* <Slide show={open} direction={open ? 'down' : 'up'} duration={200}>
                {nestedItems?.map((nestedItem, index) => (
                    <TreeItem key={index}>{nestedItem}</TreeItem>
                ))}
            </Slide> */}
            {(open) && (
                <Fade reverse={!open} direction={open ? 'down' : 'up'} duration={200} cascade>
                    {nestedItems?.map((nestedItem, index) => (
                        <TreeItem key={index}>{nestedItem}</TreeItem>
                    ))}
                </Fade>
            )}
        </ListItem>
    )
}

export type TreeProps = {
    items: (TreeItemProps | NestedTreeItemProps)[],
    selectedItem?: number,
}

export default function Tree({ items, selectedItem }: TreeProps) {
    return (
        <List color="primary" sx={{
            "--ListItem-paddingLeft": "6px",
            "--ListItem-paddingRight": "6px",
            "--ListItem-paddingY": "0px",
            '--ListItem-minHeight': '28px',
            "--ListItem-gap": "6px",
            "--List-gap": "4px",
            '& [role="button"]': {
                borderRadius: "8px",
            },
        }}>
            {items.map((item, index) => {
                if ('nestedItems' in item) {
                    return (
                        <NestedTreeItem key={index} icon={item.icon} nestedItems={item.nestedItems} selected={index === selectedItem} link={item.link}>
                            {item.children}
                        </NestedTreeItem>
                    );
                } else {
                    return (
                        <TreeItem key={index} icon={item.icon} selected={index === selectedItem} link={item.link}>
                            {item.children}
                        </TreeItem>
                    );
                }
            })}
        </List>
    )
}
