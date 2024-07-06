import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';

export type TProject = {
  title: string;
  description: string;
  technologies: string[];
  img: string;
  link: string;
  githubClient: string;
  githubServer: string;
  features: string;
};

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: 'linear-gradient(145deg, #0E021D, #1C1033)',
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 200 }}
          component="img"
          height="50px"
          image={project?.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.primary"
          >
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href={project?.githubClient}>Github client side</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href={project?.githubServer}>Github server side</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href={project?.link}>Live link</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{
            backgroundColor: 'primary.main',
            color: 'text.primary',
            fontWeight: 600,
            px: '20px',
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
