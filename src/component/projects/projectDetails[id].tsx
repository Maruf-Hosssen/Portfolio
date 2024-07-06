import { Box, Typography } from '@mui/material';
import React from 'react';
import { TProject } from './projectCard';

const ProjectDetails = ({ project }: { project: TProject }) => {
  return (
    <Box>
      <Typography>This is details</Typography>
    </Box>
  );
};

export default ProjectDetails;
