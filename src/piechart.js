import React, { useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PieChart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state?.rowData || [];
  console.log(data);
  const optionsSuccess = {
    data: [
      {
        category: "Successful",
        value: data.filter((item) => item.successful).length,
      },
      {
        category: "Failed",
        value: data.filter((item) => !item.successful).length,
      },
    ],
    series: [
      {
        type: "pie",
        legendItemKey: "category",

        angleKey: "value",
        label: { enabled: true },
      },
    ],
  };

  const aggregatedData = data.reduce((accumulator, mission) => {
    const missionYear = new Date(mission.date).getFullYear().toString();
    accumulator[missionYear] = (accumulator[missionYear] || 0) + 1;
    return accumulator;
  }, {});

  // Convert aggregated data to chart data format
  const barData = Object.entries(aggregatedData).map(([year, value]) => ({
    year: parseInt(year), // Convert year to a number if needed
    value: parseInt(value),
  }));

  console.log(barData);

  const optionsDate = {
    data: barData,
    series: [
      {
        type: "bar",
        xKey: "year",
        yKey: "value",
      },
    ],
    xAxis: {
      type: "category",
    },
    yAxis: {
      niceRange: true,
      minInterval: 1,
    },
  };

  console.log(data);
  return (
    <>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",

          marginBottom: "30px",
          marginLeft: "40vw",
        }}
        onClick={() => navigate(`/Dashboard`)}
      >
        Dashboard
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          width: "100%",
          marginTop: "100px",
        }}
      >
        <h1>Successful Rate of Mission</h1>
        <AgChartsReact options={optionsSuccess} data={data} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          width: "100%",
          marginTop: "100px",
        }}
      >
        <h1>Missions Per Year</h1>
        <AgChartsReact options={optionsDate} data={data} />
      </div>
    </>
  );
};

export default PieChart;
