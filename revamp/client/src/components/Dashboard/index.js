// import React from "react";
// import FlexBetween from "components/Graphs/flexbetween";
// import {
//   DownloadOutlined,
//   Email,
//   PointOfSale,
//   PersonAdd,
//   Traffic,
// } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Typography,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/Charts/breakdownchart";
// import barchart from "components/Charts/barchart";
// import StatBox from "components/Charts/statbox";

// const Dashboard = () => {
//   const theme = useTheme();
//   const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
//   const { data, isLoading } = useGetDashboardQuery();

//   const columns = [
//     {
//       field: "_id",
//       headerName: "ID",
//       flex: 1,
//     },
//     {
//       field: "userId",
//       headerName: "User ID",
//       flex: 1,
//     },
//     {
//       field: "createdAt",
//       headerName: "CreatedAt",
//       flex: 1,
//     },
//     {
//       field: "products",
//       headerName: "# of Products",
//       flex: 0.5,
//       sortable: false,
//       renderCell: (params) => params.value.length,
//     },
//     {
//       field: "cost",
//       headerName: "Cost",
//       flex: 1,
//       renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
//     },
//   ];

//   return (
//     <Box m="1.5rem 2.5rem">
//       <FlexBetween>
//         <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

//         <Box>
//           <Button
//             sx={{
//               backgroundColor: theme.palette.secondary.light,
//               color: theme.palette.background.alt,
//               fontSize: "14px",
//               fontWeight: "bold",
//               padding: "10px 20px",
//             }}
//           >
//             <DownloadOutlined sx={{ mr: "10px" }} />
//             Download Reports
//           </Button>
//         </Box>
//       </FlexBetween>

//       <Box
//         mt="20px"
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="160px"
//         gap="20px"
//         sx={{
//           "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
//         }}
//       >
//         {/* ROW 1 */}
//         <StatBox
//           title="Total Customers"
//           value={data && data.totalCustomers}
//           increase="+14%"
//           description="Since last month"
//           icon={
//             <Email
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           }
//         />
//         <StatBox
//           title="Sales Today"
//           value={data && data.todayStats.totalSales}
//           increase="+21%"
//           description="Since last month"
//           icon={
//             <PointOfSale
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           }
//         />
//         <Box
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={theme.palette.background.alt}
//           p="1rem"
//           borderRadius="0.55rem"
//         >
//           <OverviewChart view="sales" isDashboard={true} />
//         </Box>
//         <StatBox
//           title="Monthly Sales"
//           value={data && data.thisMonthStats.totalSales}
//           increase="+5%"
//           description="Since last month"
//           icon={
//             <PersonAdd
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           }
//         />
//         <StatBox
//           title="Yearly Sales"
//           value={data && data.yearlySalesTotal}
//           increase="+43%"
//           description="Since last month"
//           icon={
//             <Traffic
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           }
//         />

//         {/* ROW 2 */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 3"
//           sx={{
//             "& .MuiDataGrid-root": {
//               border: "none",
//               borderRadius: "5rem",
//             },
//             "& .MuiDataGrid-cell": {
//               borderBottom: "none",
//             },
//             "& .MuiDataGrid-columnHeaders": {
//               backgroundColor: theme.palette.background.alt,
//               color: theme.palette.secondary[100],
//               borderBottom: "none",
//             },
//             "& .MuiDataGrid-virtualScroller": {
//               backgroundColor: theme.palette.background.alt,
//             },
//             "& .MuiDataGrid-footerContainer": {
//               backgroundColor: theme.palette.background.alt,
//               color: theme.palette.secondary[100],
//               borderTop: "none",
//             },
//             "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//               color: `${theme.palette.secondary[200]} !important`,
//             },
//           }}
//         >
//           <DataGrid
//             loading={isLoading || !data}
//             getRowId={(row) => row._id}
//             rows={(data && data.transactions) || []}
//             columns={columns}
//           />
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 3"
//           backgroundColor={theme.palette.background.alt}
//           p="1.5rem"
//           borderRadius="0.55rem"
//         >
//           <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
//             Sales By Category
//           </Typography>
//           <BreakdownChart isDashboard={true} />
//           <Typography
//             p="0 0.6rem"
//             fontSize="0.8rem"
//             sx={{ color: theme.palette.secondary[200] }}
//           >
//             Breakdown of real states and information via category for revenue
//             made for this year and total sales.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FlexBetween from "../Graphs/flexbetween";
// import {Grid} from "@mui/material";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Work,
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
    totalCustomers: 237,
    todayStats: {
      totalSales: 2135,
      totalOrders: 56,
    },
    thisMonthStats: {
      totalSales: 35234,
      totalOrders: 982,
    },
    yearlySalesTotal: 124357,
    transactions: [
      {
        _id: "05432",
        userId: "Afiniti",
        createdAt: "2021-04-01",
        products: [
          {
            _id: "6040a81bfc13ae3fc400fe07",
            name: "Product 1",
            price: 24.99,
          },
          {
            _id: "6040a81bfc13ae3fc400fe08",
            name: "Product 2",
            price: 12.49,
          },
        ],
        cost: 37.48,
      },
      {
        _id: "6065227bfa0d41dfbd3c7931",
        userId: "ftgrd23",
        createdAt: "2021-04-01T12:05:00.000Z",
        products: [
          {
            _id: "6040a81bfc13ae3fc400fe09",
            name: "Product 3",
            price: 39.99,
          },
        ],
        cost: 39.99,
      },
    ],
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
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
          title="Total Customers"
          value={data && data.totalCustomers}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Sales Today"
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <BarChart view="sales" isDashboard={true} />
        </Box>
        <StatBox
          title="Monthly Sales"
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Newly Employed Students "
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description="Since last year"
          icon={
            <Work
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
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
          <DataGrid
            // loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
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
            Sales By Category
          </Typography>
          <BreakdownChart isDashboard={true} />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information via category for revenue
            made for this year and total sales.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
  
export default Dashboard;
