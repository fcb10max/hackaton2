import React, { useContext, useState } from "react";
import FilterModal from "./FilterModal";
import { Box, Divider, Icon, IconButton } from "@mui/material";
import CustomDropdown, { IDropdownItem } from "../../CustomDropdown";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";
import { CustomTableContext } from "../CustomTable";

interface ICustomTableToolbarProps {
}


const CustomTableToolbar: React.FC<ICustomTableToolbarProps> = (props) => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const { limit, setLimit } = useContext(CustomTableContext);

    const itemsPerPageVariants: IDropdownItem[] = [
        {
          id: 0,
          title: "10",
          onClick: () => setLimit(10),
        },
        {
          id: 1,
          title: "25",
          onClick: () => setLimit(25),
        },
        {
          id: 2,
          title: "50",
          onClick: () => setLimit(50),
        },
        {
          id: 3,
          title: "100",
          onClick: () => setLimit(100),
        },
        {
          id: 4,
          title: "Show all",
          onClick: () => setLimit(-1),
        },
      ];
    

    return (<>
        <FilterModal open={showFilterModal} handleClose={() => setShowFilterModal(false)} title="Filter modal" />
        <Box sx={{ display: 'flex', alignItems: 'center', borderColor: "divider" }}>
            <IconButton onClick={() => setShowFilterModal(true)}>
                <Icon color="primary">
                    <FilterIcon />
                </Icon>
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: ".4rem" }} />
            <CustomDropdown
                item={{
                    title: `Items per page: ${limit === -1 ? "Show all" : limit}`,
                    id: 0,
                    children: itemsPerPageVariants
                }}
            />
        </Box>
    </>);
}

export default CustomTableToolbar;