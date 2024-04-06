import styles from "../../styles/SubHeader.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function SubHeader({ data }) {
  const [category, setCategory] = useState("All Categories");
  const categories = Object.keys(data[1]);
  categories.push("All Categories");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className={styles.subHeader}>
      <div>
        <h1>PopShop</h1>
        <p>{data[0].length} Results</p>
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Sort by"
            onChange={handleChange}
          >
            {categories.map((category, idx) => {
              return (
                <MenuItem key={idx} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
