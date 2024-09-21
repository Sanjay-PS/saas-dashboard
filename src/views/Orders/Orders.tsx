import { orders } from '../../data/data';
import { Card } from '../../components/Card/Card';
import { Box, Typography } from '@mui/joy'
import Table from '../../components/Table/Table';
import Grid from '@mui/material/Grid2';
import { ArrowsDownUp, CalendarBlank, FunnelSimple, Plus } from '@phosphor-icons/react';
import IconText from '../../components/IconText/IconText';
import IconButton from '../../components/IconButton/IconButton';
import SearchInput from '../../components/Input/SearchInput';
import { Checkbox as MUICheckbox } from '@mui/joy';
import Pagination from '../../components/Pagination/Pagination';

const borderStyle = "0.5px solid neutral.300";

export type Status = 'in-progress' | 'completed' | 'pending' | 'approved' | 'rejected';
type StatusProps = {
	status: Status 
}

const Status = ({ status }: StatusProps) => {
	const statusMap: Record<Status, { label: string, color: string }> = {
		"in-progress": { label: "In Progress", color: "#8A8CD9" },
		"completed": { label: "Completed", color: "#4AA785" },
		"pending": { label: "Pending", color: "#59A8D4" },
		"approved": { label: "Approved", color: "#FFC555" },
		"rejected": { label: "Rejected", color: "neutral.400" },
	}

	return (
		<Grid container spacing={1} alignItems={"center"} paddingX={1.5} paddingY={0.5}>
			<Grid>
				<Card 
					size='sm' 
					variant='soft'
					sx={{ 
						"--Card-radius": "50%", 
						"--Card-padding": "4px",
						bgcolor: statusMap[status].color
					}} 
				/>
			</Grid>
			<Grid container direction={"column"} spacing={0} size="grow">
				<Grid sx={{ width: "-webkit-fill-available" }}>
					<Typography 
						level='title-sm' 
						fontWeight={400}  
						sx={{ color: statusMap[status].color }}                     
					>
						{statusMap[status].label}
					</Typography>
				</Grid>            
			</Grid>
		</Grid>
	);
}

const Checkbox = () => (
	<MUICheckbox
		color="neutral"
		size="sm"
		variant="outlined"
		sx={{ verticalAlign: "middle" }}
	/>
)

function Orders() {

	return (
		<Grid container spacing={2}>
			<Grid size={12}>
				<Typography level="title-sm" fontWeight={600}>Orders</Typography>			
			</Grid>
			<Grid size={12}>
				<Card size="sm" sx={{ "--Card-radius": "8px" }}>
					<Box gap={1} display={"flex"} alignItems={"center"}>
						<IconButton><Plus size={20} /></IconButton>
						<IconButton><FunnelSimple size={20} /></IconButton>						
						<IconButton><ArrowsDownUp size={20} /></IconButton>
						<Box flexGrow={1}/>
						<SearchInput variant='outlined' showEndDecorator={false}/>
					</Box>
				</Card>
			</Grid>
			<Grid>
				<Table 
					size='lg'
					headers={[<Checkbox/>,...orders.headers].map((header, index) => (
						<Typography 
						key={index} 
						level='body-xs' 
						color='neutral'
						fontWeight={400}>
							{header}
						</Typography>
					))}
					rows={orders.rows.map((row) => {
						const TextContent = ({text}:{text: string}) => (
							<Typography 
							level='body-xs' 
							fontWeight={500}>
								{text}
							</Typography>
						)

						const cells = [
							<Checkbox/>,
							<TextContent text={row.orderId}/>,
							<IconText
								avatar={row.avatar}
								primaryText={row.fullName}	
								padding={0}					
							/>,
							<TextContent text={row.project}/>,
							<TextContent text={row.address}/>,
							<Box display={"flex"} alignItems={"center"} gap={0.5}>
								<CalendarBlank size={20} weight='duotone'/>
								<TextContent text={row.date}/>
							</Box>,
							<Status status={row.status}/>,
						];

						return cells;
					})}
					columnStyles={[
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle, width: "3%"},
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle, width: "7.5%"},
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle},
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle},
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle},
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle, width: "12.5%"},
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle, width: "12.5%"},
						{paddingBlock: "12px", height: 0, borderBottom: borderStyle},
					]}
					// borderAxis='none'
					sx={{
						"--TableCell-headBackground": "none",
						"--Table-headerUnderlineThickness": 0.5
					}}
				/>
			</Grid>
			<Grid size={12} display={"flex"} justifyContent={"end"}>
				<Pagination pages={5} activePage={1}/>
			</Grid>
		</Grid>
	)
}

export default Orders;
