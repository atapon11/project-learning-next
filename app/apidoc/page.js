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
              <TableCell>Path</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Go to Page</TableCell>
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

              <TableCell>/apis/patients</TableCell>
              <TableCell>Post</TableCell>
              <TableCell>
                ดึงหน้าแบบฟอร์มมาเพื่อให้ผู้ใช้เพิ่มข้อมูลเข้าไป
              </TableCell>

              <TableCell>
                <Link href="/apidoc/patients">
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      background: "black",
                      border: "1px solid black",
                      color: "black",
                    }}
                  >
                    Patients
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
