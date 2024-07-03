import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from './projectCard';

const Projects = () => {
  return (
    <Box sx={{ mt: { xs: 2, sm: 4, md: 4, lg: 6 } }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '30px',
          color: 'text.primary',
          textAlign: 'center',
          lineHeight: '45px',
          mt: { xs: 8, sm: 8 },
        }}
      >
        My Projects
      </Typography>
      <Box
        sx={{
          mt: { xs: 2, sm: 4, md: 6, lg: 8 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <ProjectCard></ProjectCard>
          </Grid>
          <Grid item xs={6} md={4}>
            <ProjectCard></ProjectCard>
          </Grid>
          <Grid item xs={6} md={4}>
            <ProjectCard></ProjectCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
