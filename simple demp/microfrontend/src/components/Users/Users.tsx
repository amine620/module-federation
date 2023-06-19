import React, { useEffect, useState } from "react";
import axios from "container/axios";
import { Grid } from "container/@mui/material";
import { DataGrid, GridColDef } from "container/@mui/x-data-grid";
const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res?.data));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "username name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
  ];

  return (
    <Grid container spacing={2} style={{ margin: '30px' }}>
      <Grid md={8}>

      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </Grid>
    </Grid>
  );
};

export default Users;
