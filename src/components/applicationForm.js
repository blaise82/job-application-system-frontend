import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const RequestsTable = () => {
  const jobs = useSelector((state) => state.jobs);
  let rows = {};
  try {
    if (jobs.loading == "none") {
      rows = jobs.requests.data.data;
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(rows);

  return <div>
       <FormControl >
       <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
            <MenuItem value={0}>Select Job</MenuItem>
        {rows.length > 1 ? ( rows.map((el) => (
             <MenuItem value={el.id}>{el.title}</MenuItem>
        ))): <MenuItem value={0}>No Jobs</MenuItem> }
        </Select>
       </FormControl>
  </div>;
};

export default RequestsTable;
