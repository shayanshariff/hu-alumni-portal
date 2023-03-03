
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FlexBetween from "../Graphs/flexbetween";
// import {Grid} from "@mui/material";
import {
  DownloadOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import BreakdownChart from "../Charts/breakdownchart";
import StatBox from "../Charts/statbox";
import { ResponsiveBar } from "@nivo/bar";
import BarChart from "../Charts/barchart";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const data = {
    students: 548,
    higherStudies: 115,
   alumni: 376,
    employed: 182,
    updates: [
      {
        _id: "05432",
        name: "Ali Adnan",
        employed: "Afiniti",
        grad: "",
        major: "CS",
        batch: "2023",
      },
      {
        _id: "04161",
        name: "Faiz Haseeb",
        employed: "Microsoft",
        grad: "Yale",
        major: "CE",
        batch: "2022",
      },
      {
        _id: "05582",
        name: "Shayan Shariff",
        employed: "",
        grad: "Trinity College",
        major: "CH",
        batch: "2023",
      },
      {
        _id: "0312",
        name: "Khubaib Sattar",
        employed: "Ibex",
        grad: "IBA",
        major: "SDP",
        batch: "2020",
      },

    ],
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.75,
    },
    {
      field: "employed",
      headerName: "Works At",
      flex: 0.75,
    },
    {
      field: "grad",
      headerName: "Studies At",
      flex: 0.75,
    },
    {
      field: "batch",
      headerName: "Batch",
      flex: 0.5,
    },
    {
      field: "major",
      headerName: "Major",
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

        <Box>
          <Button
            sx={{
              backgroundColor: "#EB73B1",
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        
        {/* ROW 1 */}
        <StatBox
          title="Students"
          value={data && data.students}
          increase="+14%"
 
        />
        <StatBox
          title="Alumni"
          value={data && data.alumni}
          increase="+21%"
          
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Alumni by location
          </Typography>
          <BarChart view="sales" isDashboard={true} />
        </Box>
        <StatBox
          title="Higher Studies"
          value={data && data.higherStudies}
          increase="+5%"

        />
        <StatBox
          title="Employed"
          value={data && data.employed}
          increase="+43%"

        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            New Updates
          </Typography>
          <DataGrid
            // loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.updates) || []}
            columns={columns}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Alumni by major
          </Typography>
          <BreakdownChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};
  
export default Dashboard;