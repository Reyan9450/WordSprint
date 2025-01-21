import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TypeTextPresenter = ({ timer, inputValue, handleChange, handlePress }) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 1000,
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
       
        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handlePress}
          placeholder="Type the text here..."
          aria-label="Typing input box"
          disabled={timer === 0} // Disable input when timer is 0
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "16px",
              fontFamily: "monospace",
              padding: "10px",
              lineHeight: 1.5,
              backgroundColor: timer === 0 ? "#e0e0e0" : "#f9f9f9", // Change background color when disabled
              "& fieldset": {
                borderColor: "white", // Default outline color
              },
              "&:hover fieldset": {
                borderColor: "white", // Outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "grey", // Outline color when focused
              },
            },
          }}
        />
      </Box>
    </>
  );
};

export default TypeTextPresenter;
