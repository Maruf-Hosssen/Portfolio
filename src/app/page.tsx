import About from '@/component/about/About';
import Blog from '@/component/blog/Blog';
import Banner from '@/component/contact/banner/Banner';
import Contact from '@/component/contact/Contact';
import Footer from '@/component/footer/Footer';
import Navbar from '@/component/navbar/Navbar';
import Projects from '@/component/projects/Projects';
import Skills from '@/component/skills/skills';
import { Box, Container } from '@mui/material';
export default function Home() {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Banner></Banner>
        <Projects></Projects>
        <About></About>
        <Skills></Skills>
        <Blog></Blog>
        <Contact></Contact>
      </Container>
      <Footer></Footer>
    </>
  );
}
