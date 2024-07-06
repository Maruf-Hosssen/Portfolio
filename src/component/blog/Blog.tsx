import { Box, Typography } from '@mui/material';
import React from 'react';

const Blog = () => {
  return (
    <Box id="blog">
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '30px',
          fontWeight: 600,
          mt: '40px',
          color: 'text.primary',
        }}
      >
        Blog
      </Typography>
      <Typography
        sx={{ textAlign: 'center', mt: '10px', color: 'text.secondary' }}
      >
        Comming Soon
      </Typography>
    </Box>
  );
};

export default Blog;
