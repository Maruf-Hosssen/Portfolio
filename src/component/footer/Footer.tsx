import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(145deg, #0E021D, #1C1033)', // 3D background effect
        color: 'text.primary',
        p: { xs: 3, md: 6 },
        mt: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Section 1
          </Typography>
          <Typography variant="body2">Content for section 1.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Section 2
          </Typography>
          <Typography variant="body2">Content for section 2.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Section 3
          </Typography>
          <Typography variant="body2">Content for section 3.</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          mb: 2,
        }}
      >
        <IconButton
          color="inherit"
          href="https://www.facebook.com"
          target="_blank"
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.twitter.com"
          target="_blank"
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.instagram.com"
          target="_blank"
        >
          <Instagram />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
}
