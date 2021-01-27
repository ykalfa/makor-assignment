import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 0,
    margin: 0,
    height: "1px",
    backgroundColor: "#262626",
    color: "#fff",
    fontSize: "1.4vmin",
    padding: "0.5vmin 0.5vmin 0.15vmin",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function CustomizedSelects({ selects, w, paddTop, color="white" }) {
  const classes = useStyles();
  const [rows, setRows] = React.useState("");
  const handleChange = (event) => {
    setRows(event.target.value);
  };
  return (
    <FormControl className={classes.margin} style={{width:w, paddingTop:paddTop}}>
      <Select
        labelId="demo-customized-select-label"
        value={rows}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        {selects.map((select) => (
          <MenuItem  color={color} value={select}>{select}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomizedSelects;
