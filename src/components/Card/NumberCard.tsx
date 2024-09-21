import { Box, Stack, Typography } from "@mui/joy";
import { CardProps, CardWithTitle } from "./Card";
import { TrendUp as PhosphorTrendUp } from "@phosphor-icons/react";

type NumberCardProps = CardProps & {
    label: string,
    value: string,
    trend: {
        direction: 'up' | 'down',
        value: number
     }
};

const TrendUp = () => (
    <PhosphorTrendUp size={16} weight="fill" />
);

const TrendDown = () => (
    <PhosphorTrendUp size={16} weight="fill" style={{ transform: "rotate(180DEG)" }}/>
);

const NumberCard = ({ label, value, trend, ...props }: NumberCardProps) => {
    return (
        <CardWithTitle size="lg" title={label} sx={{ minWidth: "fit-content" }} {...props}>
            <Stack 
            direction="row" 
            spacing={2}
            sx={{ 
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography level="h3">{value}</Typography>
                <Box display={"flex"} alignItems={"center"} gap={0.5} marginBlockStart={0.5}>
                    <Typography level="body-xs">
                        {(trend.direction === "up") ? (<>+</>) : (<>-</>)}
                        {trend.value.toFixed(2)}%
                    </Typography>
                    {(trend.direction === "up") ? <TrendUp/> : <TrendDown/>}
                </Box>
            </Stack>
        </CardWithTitle>
    );
};

export default NumberCard;