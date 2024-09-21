import { Box } from '@mui/joy';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import IconButton from '../IconButton/IconButton';

type PaginationProps = {
	pages: number,
    activePage?: number
}

function Pagination({ pages, activePage }: PaginationProps) {
    return (
        <Box gap={1} display={"flex"} alignItems={"center"}>
            <IconButton><CaretLeft size={20}/></IconButton>
            {Array.from({ length: pages }, (_, index) => index + 1).map((page) => (
                <IconButton key={page} variant={page === activePage ? "soft" : "plain"}>{page}</IconButton>
            ))}
            <IconButton><CaretRight size={20}/></IconButton>
        </Box>
	);
}

export default Pagination;