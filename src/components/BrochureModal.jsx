// BrochureModal.jsx
import React, { useImperativeHandle, forwardRef, useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  IconButton,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import './BrochureModal.css';
import brochureImage from './broucher1.jpg';
import brochurePDF from './brochure.pdf';

const BrochureModal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ mobile: '', name: '', email: '' });

  useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
  }));

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const { mobile, name, email } = formData;
    if (mobile && name && email) {
      const link = document.createElement('a');
      link.href = brochurePDF;
      link.download = 'Full_Stack_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      handleClose();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
  <Box className="brochure-modal-box">
    <div className="modal-header">
      <Typography variant="h6" className="modal-heading">
        <DownloadIcon /> Download Brochure
      </Typography>
      <IconButton className="close-button" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </div>

    <img src={brochureImage} alt="Brochure" className="brochure-image" />

    <div className="form-section">
      <TextField
        label="Mobile Number"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        className="form-input"
      />
      <TextField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        className="form-input"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        className="form-input"
      />
      <Button
        className="download-btn"
        fullWidth
        onClick={handleDownload}
        endIcon={<DownloadIcon />}
      >
        Download Brochure
      </Button>
    </div>
  </Box>
</Modal>

  );
});

export default BrochureModal;
