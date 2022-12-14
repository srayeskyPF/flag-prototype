import Head from "next/head";
import Image from "next/image";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Hero from "../components/Hero/Hero";
import studentsImage from "/public/students.jpg";
import { useFlags } from 'launchdarkly-react-client-sdk';
import { OptimizelyFeature, withOptimizely } from '@optimizely/react-sdk'

interface homeProps {
  optimizely: any,
}

function Home(props: homeProps) {
  const { ctaText } = useFlags() || 'Learn More';
  const handleContentClick = () => {
    const { optimizely } = props;
    optimizely.track('content click');
  } 
   
  
  return (
    <>
      <Hero />
      <Box>
        <>
        <OptimizelyFeature feature="content_toggle">
          {(enabled, variables) => (
            <>
              {enabled &&
              <>
                <Typography variant="h2">Amazing fresh content</Typography>
                  <Button variant="contained" color="primary" onClick={handleContentClick}>
                    Get Content
                  </Button>
              </>
              }
            </>
          )}
          </OptimizelyFeature>
        </>
      </Box>
      <Container>
        <Grid container spacing={8} padding={4}>
          <Grid item xs={12} md={4} padding={2}>
            <Paper elevation={3}>
              <Box padding={3}>
                <Typography variant="h6">Achieve your dreams</Typography>
                <Typography variant="body1" paddingY={3}>
                  Airplanes are beautiful cursed dreams that are swallowed by the sky.
                </Typography>
                <Button variant="contained" color="primary">
                  {ctaText}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} padding={2}>
            <Paper elevation={3}>
              <Box padding={3}>
                <Typography variant="h6">Empower your dreams</Typography>
                <Typography variant="body1" paddingY={3}>
                  Empower your future by achieving results today that will affect the rest of your life.
                </Typography>
                <Button variant="contained" color="primary">
                  {ctaText}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} padding={2}>
            <Paper elevation={3}>
              <Box padding={3}>
                <Typography variant="h6">Live your dreams</Typography>
                <Typography variant="body1" paddingY={3}>
                  Getting to where you want to be is where start, and we don&apos;t stop until you get there.
                </Typography>
                <Button variant="contained" color="primary">
                  {ctaText}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Container>
          <Grid container paddingY={8} spacing={8} sx={{position: 'relative'}}>
            <Box>
              <Image src={studentsImage} alt="students" />
            </Box>
            <Box
              marginY={5}
              sx={{
                position: "absolute",
                bottom: "10%",
                right: '25px',
                padding: "25px",
                width: '350px',
                borderRadius: "5px",
                backgroundColor: "black",
              }}
            >
              <Typography paddingBottom={3} color="white" variant="h3">
                Launch the next stage of your life
              </Typography>
              <Button variant="contained" color="primary">
                {ctaText}
              </Button>
            </Box>
          </Grid>
        </Container>
        <Container>
          <Typography variant="h3">Start something new</Typography>
          <Typography variant="body1" paddingY={3}>
            This is another block of text.
          </Typography>
        </Container>
      </Container>
    </>
  );
}

export default withOptimizely(Home);