import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, Typography, useTheme } from "@mui/material";

const salesData = {
  salesByCategory: {
    CS: 25,
    CND: 20,
    SDP: 43,
    CE: 12,
  },
  yearlySalesTotal: 100,
};

export function useGetSalesQuery() {
  return { data: salesData, isLoading: false };
}

const BarChart = ({ isDashboard = false }) => {
  const { data = { salesByCategory: {} }, isLoading = false } = useGetSalesQuery();
  const theme = useTheme();

  const colors = [  theme.palette.primary.main[100],
  theme.palette.primary.main[200],
  theme.palette.primary.main[300],
  theme.palette.primary.main[500],
];
  const formattedData = data.salesByCategory
    ? Object.entries(data.salesByCategory).map(([category, sales], i) => ({
        id: category,
        label: category,
        value: sales,
        color: colors[i],
      }))
    : [];

  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ResponsiveBar
          data={formattedData}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.primary.main[200],
                },
              },
              legend: {
                text: {
                  fill: theme.palette.secondary.main[200],
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.secondary.main[200],
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.secondary.main[200],
                },
              },
            },
            legends: {
              text: {
                fill: theme.palette.secondary.main[200],
              },
            },
            tooltip: {
              container: {
                color: theme.palette.primary.main,
              },
            },
          }}
          colors={{ datum: "data.color" }}
          margin={
            isDashboard
              ? { top: 40, right: 80, bottom: 100, left: 50 }
              : { top: 40, right: 80, bottom: 80, left: 80 }
          }
          indexBy="id"
          keys={["value"]}
          layout="vertical"
          labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        //   enableGridY={!isDashboard}
          enableLabel={true}
          labelSkipWidth={12}
          labelSkipHeight={12}
          label={d => `${d.value}`}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: isDashboard ? 20 : 0,
              translateY: isDashboard ? 50 : 56,
              itemsSpacing: 0,
              itemWidth: 85,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape:"square",
              effects: [
              {
              on: "hover",
              style: {
              itemTextColor: theme.palette.primary.main[500],
            },
        },
            ],
             },
             ]}
              enableGridX={true}
              enableGridY={true}
              axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Category",
              legendPosition: "middle",
              legendOffset: 36,
              }}
              axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Students",
              legendPosition: "middle",
              legendOffset: -40,
              }}
            //   labelTextColor={{
            //   from: "color",
            //   modifiers: [["darker", 1.6]],
            //   }}
              motionStiffness={90}
              motionDamping={15}
              />
              )}
              <Box
              position="absolute"
              top="50%"
              left="50%"
              color={theme.palette.secondary[400]}
              textAlign="center"
              pointerEvents="none"
              sx={{
              transform: isDashboard
              ? "translate(-75%, -170%)"
              : "translate(-50%, -100%)",
              }}
              >
              <Typography variant="h6">
              {/* {!isDashboard && "Total Students:"} {data.yearlySalesTotal} */}
              </Typography>
            </Box>
        </Box>
        );
            };
              
export default BarChart;
              
              
              
              
