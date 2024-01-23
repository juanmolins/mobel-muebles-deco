import React from "react";
import { WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";

const Whatsapp = ({ message, phoneNumber }) => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
      target="_blank"
      className="whatsapp"
    >
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "25px",
          padding: "0.5rem",
          minWidth: "0",
        }}
      >
        <WhatsApp fontSize="large" />
      </Button>
    </a>
  );
};

export default Whatsapp;
