const express = require("express");
const next = require("next");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors"); // นำเข้า cors

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // ใช้ cors middleware ก่อนการกำหนดเส้นทาง
  server.use(cors());

  // ใช้ body-parser เพื่ออ่าน JSON จากคำขอ POST
  server.use(bodyParser.json());

  // อ่านไฟล์ JSON ในโฟลเดอร์ public
  server.get("/api/data", (req, res) => {
    const jsonData = fs.readFileSync(
      path.join(__dirname, "public/data.json"),
      "utf-8"
    );
    const data = JSON.parse(jsonData);
    res.json(data);
  });

  // แก้ไขและบันทึกไฟล์ JSON ในโฟลเดอร์ public
  server.post("/api/data", (req, res) => {
    try {
      const updatedData = req.body;
      const filePath = path.join(__dirname, "public/data.json");

      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
      res.json({ message: "บันทึกข้อมูลสำเร็จ" });
    } catch (error) {
      res.status(500).json({ message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" });
    }
  });

  server.all('*', (req, res) => {
    // ส่งคำขอที่ไม่ตรงกับ API ไปยัง Next.js
    return handle(req, res);
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log(`> Server is ready on http://localhost:3001`);
  });
});
