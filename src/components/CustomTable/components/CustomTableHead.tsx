import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React, { useContext } from "react";
import { CustomTableContext } from "../CustomTable";

type ICustomTableHeadProps = {
  numSelected: number,
  rowCount: number,
  onSelectAllClick: () => void
}

const CustomTableHead: React.FC<ICustomTableHeadProps> = ({ numSelected, onSelectAllClick, rowCount }) => {
  const { sort, setSort } = useContext(CustomTableContext);

  const handleSortClick = () => {
    // check is sort is descending if so, make it ascending
    // if sort is not descending check if it is undefined(unsorted)
    // if so, make it descending or disable sort (=undefined)
    setSort(p => ({ ...p, title: p.title === "desc" ? "asc" : p.title === undefined ? "desc" : undefined }))
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all',
            }}
          />
        </TableCell>
        <TableCell>
          UserId
        </TableCell>
        <TableCell>
          Id
        </TableCell>
        <TableCell>
          <TableSortLabel
            active
            direction={sort.title}
            onClick={handleSortClick}
          />
          Title
        </TableCell>
        <TableCell>
          Completed
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default CustomTableHead;