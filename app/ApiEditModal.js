import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';


const ApiEditModal = ({ open, onClose }) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState(''); // เพิ่ม state สำหรับสีของข้อความ


  const handlePasswordSubmit = () => {
    if (password === 'เอิทหล่อมาก') {
      setMessage('รหัสผ่านถูกต้องจ้า');
      setMessageColor('green'); // เปลี่ยนสีของข้อความเป็นสีเขียว
      setTimeout(() => {
        onClose(true);
        window.location.href = '/apiedit';
      }, 1000);
    } else {
      setMessage('รหัสผ่านไม่ถูกต้อง');
      setMessageColor('red'); // เปลี่ยนสีของข้อความเป็นสีแดง
    }
  };

  return (
    <Modal open={open} onClose={() => onClose()}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '16px', borderRadius: '4px' }}>
        <h2 style={{ color: 'black' }}>กรุณาใส่รหัสผ่านเพื่อแก้ไข API</h2>
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handlePasswordSubmit}
          sx={{
            background: "black",
            border: "1px solid black",
            color: "black",
            marginTop: "8px"
          }}
        >
          ยืนยัน
        </Button>
        <p style={{ color: messageColor }}>{message}</p>
      </div>
    </Modal>
  );
};

export default ApiEditModal;
