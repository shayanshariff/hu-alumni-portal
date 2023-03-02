
import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";

const majData = {
  studentsByCategory: {
    CS: 25,
    CND: 20,
    SDP: 43,
    CE: 12,
    EE: 28,
    CH: 22,
  },
  studentsTotal: 150,
};

export function useGetStudentQuery() {
  return { data: majData, isLoading: false };
}

const BreakdownChart = ({ isDashboard = false }) => {
  const { data = { studentsByCategory: {} }, isLoading = false } = useGetStudentQuery();
  const theme = useTheme();

  const colors = [  "#EB73B1",
  "#EBDE7F",
  "#C567EB",
  "#52EB50",
  "#745BEB",
  "#EB504E"
];
const formattedData = Object.entries(data.studentsByCategory).map(
  ([category, major], i) => ({
    id: category,
    label: category,
    value: major,
    color: colors[i],
  })
);


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
        <ResponsivePie
          data={formattedData}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: "#a6a9be",
                },
              },
              legend: {
                text: {
                  fill: "#ffe3a3",
                },
              },
              ticks: {
                line: {
                  stroke: "#ffe3a3",
                  strokeWidth: 1,
                },
                text: {
                  fill: "#ffe3a3",
                },
              },
            },
            legends: {
              text: {
                fill: "#ffe3a3",
              },
            },
            tooltip: {
              container: {
                color: "#4d547d",
              },
            },
          }}
          colors={{ datum: "data.color" }}
          margin={
            isDashboard
              ? { top: 40, right: 80, bottom: 100, left: 50 }
              : { top: 40, right: 80, bottom: 80, left: 80 }
          }
          sortByValue={true}
          innerRadius={0.45}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          enableArcLinkLabels={!isDashboard}
          arcLinkLabelsTextColor={"#ffffff"}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 55,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#ffffff",
                },
              },
            ],
          },
        ]}
      />
      )}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={"#111111"}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <Typography variant="h6">
          {!isDashboard && "Total Alumni:"} {data.studentsTotal}
        </Typography>
      </Box>
    </Box>

  );
};

export default BreakdownChart;

