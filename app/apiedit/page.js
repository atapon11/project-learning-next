"use client";
// 'use client' เราไม่จำเป็นต้องใช้เพราะเราอยู่ใน React คอมโพเนนต์

import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Apiedit = () => {
  const [editUrl, setEditUrl] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const apiUrl = "https://muddy-dog-bedclothes.cyclic.app/1";
  
useEffect(() => {
  fetch(apiUrl) // แก้ URL ตรงนี้
    .then((response) => response.json())
    .then((data) => {
      setUrl(data.url);
      setEditUrl(data.url);
      console.log(data.url);
    })
    .catch((error) => {
      console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล: ", error);
    });
}, []);

  const handleUrlChange = (event) => {
    setEditUrl(event.target.value);
  };

  const handleSaveClick = () => {
    const updatedData = { url: editUrl };
    fetch(apiUrl, { // ใช้ apiUrl ที่คุณกำหนด
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setUrl(editUrl);
        console.log("บันทึกข้อมูลสำเร็จ");
        openSnackbar("บันทึกข้อมูลสำเร็จ"); // แสดงแจ้งเตือน
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล: ", error);
      });
  };

  const openSnackbar = (message) => {
    setMessage(message);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        หน้าแก้ไข URL
      </Typography>
      <Typography variant="body1" align="center">
        ค่าปัจจุบันของ URL:
      </Typography>
      <Typography variant="body2" align="center">
        {url}
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" gutterBottom>
          แก้ไขค่า URL:
        </Typography>
        <TextField
          type="text"
          value={editUrl}
          onChange={handleUrlChange}
          style={{
            border: "blue",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "white",
          }}
        />

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          บันทึก
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
        <MuiAlert onClose={closeSnackbar} severity="success">
          {message}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Apiedit;
