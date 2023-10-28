'use client'
// Import useState from React
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import ApiEditModal from "./ApiEditModal"; // นำเข้าหน้า modal

import styles from './RainbowText.module.css';
const theme = createTheme();

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
        <div className={styles.rainbowText}>
      <h1>Welcome to API Document</h1>
    </div>
        </Typography>
        <Typography variant="h10" gutterBottom>
          Created by ATP_EARTH
        </Typography>
        <Link href="/apidoc">
          <Button
            variant="contained"
            color="primary"
            sx={{ border: "1px solid white", margin: "8px" }}
          >
            ดู API Document
          </Button>
        </Link>
        {/* เปิด modal เมื่อคลิกปุ่ม "แก้ API" */}
        <Button
          variant="contained"
          color="primary"
          sx={{ border: "1px solid white", margin: "8px" }}
          onClick={openModal}
        >
          แก้ API
        </Button>
        <ApiEditModal open={isModalOpen} onClose={closeModal} />
      </Box>
    </ThemeProvider>
  );
}
