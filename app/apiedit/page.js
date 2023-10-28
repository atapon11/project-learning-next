"use client";
// 'use client' เราไม่จำเป็นต้องใช้เพราะเราอยู่ใน React คอมโพเนนต์

import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Apiedit = () => {
  const [editUrl, setEditUrl] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    // โหลดข้อมูลจากไฟล์ JSON ในโฟลเดอร์ public
    fetch("/data.json")
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
    setEditUrl(event.target.value); // แก้ชื่อตัวแปรจาก setEditApiLink เป็น setEditUrl
  };

  const handleSaveClick = () => {
    // บันทึกค่าที่แก้ไขลงในไฟล์ JSON
    const updatedData = { url: editUrl };
    fetch("/api/data", { // เปลี่ยน URL จาก "/data.json" เป็น "/api/data"
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      setUrl(editUrl);
      console.log("บันทึกข้อมูลสำเร็จ");
    })
    .catch((error) => {
      console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล: ", error);
    });
    
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
            backgroundColor: "white", // กำหนดสีพื้นหลังเป็นขาว
            color: "white", // กำหนดสีตัวอักษรเป็นขาว
          }}
        />

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          บันทึก
        </Button>
      </div>
    </Container>
  );
};

export default Apiedit;
