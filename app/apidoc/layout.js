'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline'; // เพิ่มการอ้างอิง CssBaseline
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" className="ingredient-background">
        <Toolbar>
          <Image
            src="/images/mke-logo.png"
            alt="Your Logo"
            width={50}
            height={50}
          />
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            My API Document
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={2}>{children}</Box>
    </ThemeProvider>
  );
}
