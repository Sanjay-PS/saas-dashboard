import { Breadcrumbs as MUIBreadcrumbs, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/joy';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export type BreadcrumbItem = {
    label: string,
    link?: string
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[]
} & MUIBreadcrumbsProps

function Breadcrumbs({ items, ...props }: BreadcrumbsProps) {
    const links = items.slice(0, -1);
    const activeItem = items.slice(-1)[0]?.label;

    return (items.length) ? (
        <MUIBreadcrumbs 
        aria-label="breadcrumbs" 
        size={props?.size || "sm"}
        sx={{ 
            paddingY: 0.25, 
            "--Breadcrumbs-gap": "16px",
            ...props?.sx 
        }}>
            {links.map((item: BreadcrumbItem, index) => (
                <Link key={index} color="neutral" href={item?.link ?? ""}>
                    {item.label}
                </Link>
            ))}
            <Typography>{activeItem}</Typography>
        </MUIBreadcrumbs>
    ):(<></>);
}

export default Breadcrumbs;
