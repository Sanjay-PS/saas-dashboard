import { CSSProperties, ReactNode } from 'react';
import { Table as MUITable, TableProps as MUITableProps } from '@mui/joy';

type TableProps = {
    headers: ReactNode[],
    rows: ReactNode[][],
    columnStyles: CSSProperties[]
} & MUITableProps;

export default function Table({ headers, rows, columnStyles, ...props }: TableProps) {
    return (
        <MUITable {...props} sx={{ overflow: 'scroll', ...props.sx }}>
            <thead>
                <tr>
                    {headers.map((header, index) => <th style={columnStyles[index]} key={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, index) => <td style={columnStyles[index]} key={index}>{cell}</td>)}
                    </tr>
                ))}                
            </tbody>
        </MUITable>
    );
}
