// 'use client';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectCard, { TProject } from './projectCard';

const Projects = async () => {
  const data = await fetch(
    'https://portfoliodashboard-kohl.vercel.app/project',
  );

  const res = await data.json();
  return (
    <Box id="project" sx={{ mt: { xs: 2, sm: 4, md: 4, lg: 6 } }}>
      <time dateTime="2016-10-25" suppressHydrationWarning />
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
            {res?.data?.map((project: TProject, index: number) => (
              <ProjectCard key={index + 1} project={project}></ProjectCard>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
