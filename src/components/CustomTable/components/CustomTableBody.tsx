import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { ITodo } from "../CustomTable";

interface ICustomTableBodyProps {
    items: ITodo[],
    handleToggleSelect: (id: number) => void,
    selected: number[]
}

const CustomTableBody: React.FC<ICustomTableBodyProps> = ({ items, handleToggleSelect, selected }) => {
    return (
        <TableBody>
            {items.map((item) => (
                <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            checked={selected.indexOf(item.id) !== -1}
                            inputProps={{
                                'aria-labelledby': item.title,
                            }}
                            onChange={() => handleToggleSelect(item.id)}
                        />
                    </TableCell>

                    <TableCell component="th" scope="row">
                        {item.userId}
                    </TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.completed ? "TRUE" : "FALSE"}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default CustomTableBody;