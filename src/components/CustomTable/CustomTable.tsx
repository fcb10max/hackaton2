/**
 * 
 * TODO:
 * 
 * 1. Create table +
 * 2. Add pagination +
 * 3. Add items per page control +
 * 4. Add filter 
 * 5. Add sort +
 * 6. Add column show/hide
 * 7. Add search
 * 8. Add dense/undense
 * 9. Add data visualization
 */

import {
  Container,
  Pagination,
  PaginationProps,
  Paper,
  Table,
  TableContainer,
} from "@mui/material";
import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import dataForTable from "../../config/dataForTable.json";
import CustomTableHead from "./components/CustomTableHead";
import CustomTableBody from "./components/CustomTableBody";
import CustomTableToolbar from "./components/CustomTableToolbar";

export interface ITodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}


interface ISortObj {
  [key: string]: "asc" | "desc" | undefined,
}

const todos: ITodo[] = dataForTable.todos;

interface ICustomTableContext {
  sort: ISortObj,
  setSort: React.Dispatch<React.SetStateAction<ISortObj>>
  limit: number,
  setLimit: React.Dispatch<React.SetStateAction<number>>
}

export const CustomTableContext = createContext<ICustomTableContext>({
  sort: {},
  setSort: () => { },
  limit: 10,
  setLimit: () => { }
})

const CustomTable: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<ITodo[]>(todos.slice(0, limit));
  const [selected, setSelected] = useState<number[]>([]);
  const [sort, setSort] = useState<ISortObj>({
    title: "desc",
  });

  const onSelectAllClick = () => {
    if (selected.length >= items.length) {
      setSelected([]);
    } else {
      setSelected(items.map(i => i.id));
    }
  }

  const handleToggleSelect = (id: number) => {
    setSelected(prev => {
      if (selected.includes(id)) return prev.filter(i => i !== id);
      return [...prev, id];
    })
  }

  const compareFn = useCallback((a: ITodo, b: ITodo): number => {
    const titleSort = sort.title ? a.title.localeCompare(b.title) * (sort.title === "desc" ? 1 : -1) : 0;
    // const idSort = (b.id - a.id) * (sort.id === "desc" ? 1 : -1);
    return titleSort;
  }, [sort]);

  useEffect(() => {
    const startPos = limit * (page - 1);
    const endPos = startPos + limit;
    setItems(todos.slice().sort(compareFn).slice(startPos, endPos));
    setSelected([]);
  }, [limit, page, compareFn]);

  const totalPages = useMemo(() => Math.floor(todos.length / limit), [limit]);

  const paginationProps: PaginationProps = useMemo(() => ({
    count: totalPages,
    page: page,
    variant: "outlined",
    onChange: (_, np) => setPage(np),
    defaultPage: page,
    sx: { ".MuiPagination-ul": { justifyContent: "center" }, my: "1rem" },
  }), [page, totalPages]);

  return (
    <CustomTableContext.Provider value={{ sort, setSort, limit, setLimit }}>
      <Container sx={{ py: "1rem" }}>
        <CustomTableToolbar />
        {totalPages > 1 && <Pagination {...paginationProps} />}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <CustomTableHead
              numSelected={selected.length}
              onSelectAllClick={onSelectAllClick}
              rowCount={items.length}
            />
            <CustomTableBody
              handleToggleSelect={handleToggleSelect}
              items={items}
              selected={selected}
            />
          </Table>
        </TableContainer>
        {totalPages > 1 && <Pagination {...paginationProps} />}
      </Container>
    </CustomTableContext.Provider>
  )
}

export default CustomTable;