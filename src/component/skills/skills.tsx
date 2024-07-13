import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import html from '../../../assets/logo/html.png';
import css from '../../../assets/logo/css-3.png';
import bootstrap from '../../../assets/logo/bt.png';
import js from '../../../assets/logo/js.png';
import react from '../../../assets/logo/library (1).png';
import tw from '../../../assets/logo/tw.png';
import next from '../../../assets/logo/nxt.png';
import redux from '../../../assets/logo/redux.jpg';

import node from '../../../assets/logo/node.png';
import mongodb from '../../../assets/logo/mongodb.png';
import express from '../../../assets/logo/express.png';
import postgre from '../../../assets/logo/postgrepng.png';
import prisma from '../../../assets/logo/prisma.png';

import Image from 'next/image';
import SingleSkill, { TSkill } from './singleSkill';
import SingleBackendSkill from './singlebackendSkill';

const Skills = () => {
  const frontendskills: TSkill[] = [
    {
      name: 'HTML-5',
      img: html,
    },
    {
      name: 'CSS-3',
      img: css,
    },
    {
      name: 'Bootstrap',
      img: bootstrap,
    },
    {
      name: 'Tailwind CSS',
      img: tw,
    },
    {
      name: 'Javascript',
      img: js,
    },
    {
      name: 'React',
      img: react,
    },
    {
      name: 'Redux',
      img: redux,
    },
    {
      name: 'Next JS',
      img: next,
    },
  ];
  const backendskills = [
    {
      name: 'Node JS',
      img: node,
    },
    {
      name: 'Express JS',
      img: express,
    },
    {
      name: 'Mongodb',
      img: mongodb,
    },
    {
      name: 'PostgreSQL',
      img: postgre,
    },
    {
      name: 'Prisma',
      img: prisma,
    },
  ];

  return (
    <Box id="skill" sx={{ mt: { xs: 4, sm: 6, md: 10, lg: 12 } }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '30px',
          color: 'text.primary',
          textAlign: 'center',
          lineHeight: '45px',
        }}
      >
        My Skills
      </Typography>
      <Box
        sx={{
          display: { md: 'flex' },
          gap: 8,
          mt: { xs: 2, sm: 4, md: 6, lg: 6 },
        }}
      >
        <Box sx={{ flex: { md: 1 } }}>
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '20px',
              mt: { xs: 6, md: 0 },
            }}
          >
            Frontend
          </Typography>
          <Grid
            container
            sx={{ mt: { xs: 2, sm: 4, md: 4, lg: 4 } }}
            spacing={3}
          >
            {frontendskills.map((skill, index) => {
              return <SingleSkill skill={skill} key={index + 1}></SingleSkill>;
            })}
          </Grid>
        </Box>
        <Box sx={{ flex: { md: 1 } }}>
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '20px',
              mt: { xs: 6, md: 0 },
            }}
          >
            Backend
          </Typography>
          <Grid
            container
            sx={{ mt: { xs: 2, sm: 4, md: 4, lg: 4 } }}
            spacing={3}
          >
            {backendskills.map((skill, index) => {
              return (
                <SingleBackendSkill
                  skill={skill}
                  key={index + 1}
                ></SingleBackendSkill>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
