import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        mt: { xs: 4, sm: 6, md: 10, lg: 12 },
        display: { md: 'block', lg: 'flex' },

        gap: 4,
      }}
    >
      {/* contact box */}
      <Box sx={{ flex: 1 }}>
        <Box>
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            Send a message
          </Typography>
          <Typography
            sx={{
              mt: '15px',
              fontWeight: 700,
              fontSize: { xs: '20px', md: '30px', lg: '50px' },
              color: 'text.primary',
            }}
          >
            Get in{' '}
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '20px', md: '30px', lg: '50px' },
                backgroundColor: 'primary.main',
                px: '15px',
                py: '10px',
                borderRadius: '10px',
                color: 'text.primary',
              }}
            >
              Touch
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              mt: { xs: 1, sm: 2, md: 2 },
              fontSize: '16px',
            }}
          >
            We will respond to your message as soon as possible.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            mt: { xs: 2, sm: 4, md: 6, lg: 8 },
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: 'primary.main', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main', // Border color when focused
                },
              },
              '& .MuiInputLabel-root': {
                color: 'text.secondary', // Label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'text.secondary', // Label color when focused
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: 'primary.main', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main', // Border color when focused
                },
              },
              '& .MuiInputLabel-root': {
                color: 'text.secondary', // Label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'text.secondary', // Label color when focused
              },
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue="Hi Maruf,"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: 'primary.main', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main', // Border color when focused
                },
              },
              '& .MuiInputLabel-root': {
                color: 'text.secondary', // Label color
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'text.secondary', // Label color when focused
              },
            }}
          />
          <Button
            sx={{
              backgroundColor: 'primary.main',
              color: 'text.primary',
              fontWeight: 600,
              px: '20px',
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
      {/* location box */}
      <Box
        sx={{
          flex: 1,
          ml: { md: '0px', lg: '50px' },

          mt: '30px',
          padding: '20px',
        }}
      >
        <Typography
          sx={{
            color: 'text.primary',
            fontWeight: 600,
            fontSize: '25px',
          }}
        >
          Contact With Me
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',

            fontSize: '16px',
            mt: 2,
          }}
        >
          {' '}
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',

            fontSize: '16px',
            mt: 2,
          }}
        >
          {' '}
          Feel free to contact me following these media!
        </Typography>
        <Box sx={{ mt: '30px' }}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              color: 'primary.main',
            }}
          >
            <AddIcCallIcon
              sx={{
                fontSize: '35px',
                background: '#DDEDF0',
                padding: '5px',
                borderRadius: '50%',
              }}
            ></AddIcCallIcon>
            <Typography sx={{ fontSize: '20px' }}>+8801780527702</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              color: 'primary.main',
              mt: '20px',
            }}
          >
            <EmailIcon
              sx={{
                fontSize: '35px',
                background: '#DDEDF0',
                padding: '5px',
                borderRadius: '50%',
              }}
            ></EmailIcon>
            <Typography sx={{ fontSize: '20px' }}>
              maruf@programming@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              color: 'primary.main',
              mt: '20px',
            }}
          >
            <AddLocationIcon
              sx={{
                fontSize: '35px',
                background: '#DDEDF0',
                padding: '5px',
                borderRadius: '50%',
              }}
            ></AddLocationIcon>
            <Typography sx={{ fontSize: '20px' }}>Dhaka,Bangladesh</Typography>
          </Box>
          <Button
            component="a"
            href="https://drive.google.com/file/d/13g31JYXVzrpbPqAL87Y1-tg9aqu8MGzF/view?usp=drive_link"
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security measure for opening new tabs
            sx={{
              backgroundColor: 'primary.main',
              color: 'text.primary',
              fontWeight: 600,
              px: '20px',
              mt: '30px',
            }}
          >
            View Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
