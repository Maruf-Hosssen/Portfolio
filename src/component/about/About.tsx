import { Box, Typography } from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import college from '../../../assets/college.png';
import varsity from '../../../assets/education.png';
import Image from 'next/image';

const About = () => {
  return (
    <Box id="about" sx={{ mt: { xs: 4, sm: 6, md: 10, lg: 12 } }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '30px',
          color: 'text.primary',
          textAlign: 'center',
          lineHeight: '45px',
        }}
      >
        About Me
      </Typography>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
          alignItems: { md: 'center' },
          textAlign: 'justify',
          gap: { xs: 4, sm: 6, md: 10, lg: 12 },
          mt: { xs: 2, sm: 4, md: 6, lg: 6 },
        }}
      >
        <Box sx={{ flex: 1, fontSize: '16px', color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          modi assumenda, laborum beatae repellendus porro. Amet, repellendus
          debitis aliquam quaerat dolorem nostrum id nisi in magnam voluptatum
          sed? Ducimus molestias facilis adipisci, ipsum labore recusandae
          obcaecati aperiam magni fugiat dicta id debitis et porro neque, modi
          unde in, rerum numquam?
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box>
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                fontSize: '20px',
                mt: { xs: 6, md: 0 },
              }}
            >
              Education
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                mt: 2,
                color: 'text.secondary',
              }}
            >
              <Image src={college} alt="college" height={45}></Image>
              <Box>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'text.secondary',
                    textAlign: 'justify',
                  }}
                >
                  Higher Secondary Certificate
                </Typography>
                <Typography sx={{ fontSize: '18px' }}>
                  Mouchak Scout School and College(science)
                </Typography>
                <Typography>2022</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                mt: 2,
                color: 'text.secondary',
              }}
            >
              <Image src={varsity} alt="college" height={45}></Image>
              <Box>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'text.secondary',
                    textAlign: 'justify',
                  }}
                >
                  B.S.c in CSE
                </Typography>
                <Typography sx={{ fontSize: '18px' }}>
                  Eastern University
                </Typography>
                <Typography>2024-2028</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: '' }}>
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                fontSize: '20px',
                mt: 2,
              }}
            >
              Experience
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: 'text.secondary',
                textAlign: 'justify',
                mt: '10px',
              }}
            >
              I have no proffesional working experience right now. This section
              will update very soon.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
