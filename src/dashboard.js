// src/components/MissionGrid.js
import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
const MissionGrid = () => {
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setRowData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    rowData.map((data) => setPieData((prev) => [...prev, data.successful]));
  }, [rowData]);

  const columnDefs = [
    {
      headerName: "Mission",
      field: "mission",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Rocket Name",
      field: "rocket",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Company",
      field: "company",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Location",
      field: "location",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Launch Date",
      field: "date",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Launch Time",
      field: "time",
      sortable: true,
      filter: true,
    },

    {
      headerName: "price",
      field: "price",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Successful",
      field: "successful",
      sortable: true,
      filter: true,
    },
  ];

  return (
    <div>
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
        onClick={() => navigate(`/piechart`, { state: { rowData } })}
      >
        Analysis
      </Button>

      <div
        className="ag-theme-alpine grid"
        style={{ height: "80vh", width: "95vw", margin: "30px" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          // paginationPageSize={20}
        />
      </div>
    </div>
  );
};

export default MissionGrid;
