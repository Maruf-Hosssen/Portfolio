import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export type TSkill = {
  name: string;
  img: string | StaticImageData;
};
const SingleSkill = ({ skill }: { skill: TSkill }) => {
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: 180,
          background: 'linear-gradient(145deg, #0E021D, #1C1033)',
          height: 'auto',
        }}
      >
        <CardActionArea>
          <Box
            sx={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Image src={skill?.img} alt="html" height={80}></Image>
            <Typography
              gutterBottom
              color="text.secondary"
              sx={{ fontSize: '18px', fontWeight: 600 }}
            >
              {skill?.name}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleSkill;
