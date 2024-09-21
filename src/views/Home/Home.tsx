import { topSellingProducts } from '../../data/data';
import { CardWithTitle } from '../../components/Card/Card';
import { Box, Typography } from '@mui/joy'
import NumberCard from '../../components/Card/NumberCard';
import Table from '../../components/Table/Table';
import Grid from '@mui/material/Grid2';

const borderStyle = "1px solid rgba(28,28,28,0.2)";

function Home() {

	return (
		<Grid container spacing={2}>
			<Grid size={12}>
				<Typography level="title-sm" fontWeight={600}>eCommerce</Typography>			
			</Grid>
			<Grid container spacing={3.5}>

				<Grid container size={12} spacing={3.5}>
					<Grid container size={6} flexGrow={1} spacing={3.5}>
						<Grid size={6}> 
							<NumberCard
								label='Customers'
								value='3,781'
								trend={{ direction: 'up', value: 11.01 }}
								color='primary'
								variant='soft'
							/>
						</Grid>
						<Grid size={6}>
							<NumberCard
								label='Orders'
								value='1,219'
								trend={{ direction: 'down', value: 0.03 }}
								color='neutral'
								variant='plain'
							/>
						</Grid>
						<Grid size={6}>
							<NumberCard
								label='Revenue'
								value='$695'
								trend={{ direction: 'up', value: 15.03 }}
								color='neutral'
								variant='plain'
							/>
						</Grid>
						<Grid size={6}>
							<NumberCard
								label='Growth'
								value='30.1%'
								trend={{ direction: 'up', value: 6.08 }}
								color='neutral'
								variant='soft'
							/>
						</Grid>
					</Grid>
					<Grid height={"100%"}>
						<CardWithTitle 
							title="Projections vs Actuals"
							color='neutral'
							variant='plain'
							spacing={2}
							sx={{ height: "100%" }}
						>
							<Box display={"flex"} alignItems={"center"} gap={2} maxHeight={"100%"}>
								<img src='./images/chart-01-a.png' style={{ height: "10rem" }}/>
								<img src='./images/chart-01-b.png' style={{ height: "10rem" }}/>						
							</Box>
						</CardWithTitle>
					</Grid>
				</Grid>

				<Grid container size={12} spacing={3.5}>
					<Grid size={9}>
						<CardWithTitle 
							title="Revenue"
							color='neutral'
							variant='plain'
							spacing={2}
							sx={{ height: "100%" }}
						>
							<Box display={"flex"} alignItems={"center"} gap={2} maxHeight={"100%"}>
								<img src='./images/chart-02-a.png' style={{ height: "15rem" }}/>
								<img src='./images/chart-02-b.png' style={{ height: "15rem" }}/>						
							</Box>
						</CardWithTitle>
					</Grid>
					<Grid size={3} height={"100%"}>				
						<CardWithTitle 
							title="Revenue by Location"
							color='neutral'
							variant='plain'
							spacing={2}
							sx={{ height: "100%" }}
						>
							<Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2} maxHeight={"100%"}>
								<img src='./images/chart-03-e.png' style={{ width: "10rem" }}/>
								<img src='./images/chart-03-a.png' style={{ width: "10rem" }}/>						
								<img src='./images/chart-03-b.png' style={{ width: "10rem" }}/>						
								<img src='./images/chart-03-c.png' style={{ width: "10rem" }}/>						
								<img src='./images/chart-03-d.png' style={{ width: "10rem" }}/>						
							</Box>
						</CardWithTitle>
					</Grid>						
				</Grid>

				<Grid container size={12} spacing={3.5}>
					<Grid size={9}>
						<CardWithTitle 
							title="Top Selling Products"
							color='neutral'
							variant='plain'
						>
							<Table 
								size='md'
								headers={topSellingProducts.headers.map((header, index) => (
									<Typography 
									key={index} 
									level='body-xs' 
									color='neutral'
									fontWeight={400}>
										{header}
									</Typography>
								))}
								rows={topSellingProducts.rows.map((row) => {
									return row.map((cell, index) => (
										<Typography 
										key={index} 
										level='body-xs' 
										fontWeight={500}>
											{cell}
										</Typography>
									))
								})}
								columnStyles={[
									{paddingBlock: "12px", height: 0, borderBottom: borderStyle, width: "40%"},
									{paddingBlock: "12px", height: 0, borderBottom: borderStyle},
									{paddingBlock: "12px", height: 0, borderBottom: borderStyle},
									{paddingBlock: "12px", height: 0, borderBottom: borderStyle}
								]}
								borderAxis='none'
								sx={{
									"--TableCell-headBackground": "none"
								}}
							/>
						</CardWithTitle>
					</Grid>
					<Grid size={3} height={"100%"}>
						<CardWithTitle 
							title="Total Sales"
							color='neutral'
							variant='plain'
							spacing={2}
							sx={{ height: "100%" }}
						>
							<Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2} maxHeight={"100%"}>
								<img src='./images/chart-04-a.png' style={{ width: "7rem" }}/>						
								<img src='./images/chart-04-b.png' style={{ width: "10rem" }}/>						
							</Box>
						</CardWithTitle>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Home;
