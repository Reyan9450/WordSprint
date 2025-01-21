import React from "react";
import { Typography, Box } from "@mui/material";

const ShowTextPresenter = ({ text, loading, error }) => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 2,
        border: "5px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        textAlign: "center", // Keeps the container content centered
      }}
    >
      {error && (
        <Typography variant="body1" color="error" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}
      <Typography
        variant="body1"
        sx={{
          fontSize: "18px",
          fontFamily: "monospace",
          color: "#333",
          textAlign: "left", // Ensures the text inside Typography is left-aligned
        }}
      >
        {loading ? "Loading..." : text}
      </Typography>
    </Box>
  );
};

export default ShowTextPresenter;
