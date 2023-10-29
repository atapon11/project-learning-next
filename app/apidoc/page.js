"use client";
import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";

const ApiDoc = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // ระบุ URL ของ API ที่คุณต้องการใช้
    const apiUrl = 'https://muddy-dog-bedclothes.cyclic.app/1';
  
    fetch(apiUrl)
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
  

  // ตรวจสอบค่า apiLink ในส่วนนี้
  console.log(url);

  const handleLinkClick = () => {
    // ในกรณีที่ค่าถูกต้อง ให้ทำการนำทางหรือดำเนินการตามที่คุณต้องการ
    window.location.href = url;
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        API Documentation
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>API</TableCell>
              <TableCell>Go To API Document</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                style={{ cursor: "pointer", color: "blue" }}
                onClick={handleLinkClick}
              >
                {url}
              </TableCell>
              <TableCell>
                <Link href= {url}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      background: "black",
                      border: "1px solid black",
                      color: "black",
                    }}
                  >
                    API Document
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ApiDoc;
