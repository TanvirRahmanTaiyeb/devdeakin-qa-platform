import React from 'react';
import { Container, Header, Grid, Button } from 'semantic-ui-react';
import TutorialCard from './TutorialCard';

const tutorials = [
  { 
    title: 'Mastering React Navigation', 
    description: 'Comprehensive guide to setting up navigation in React using React Router.', 
    username: 'rakin008', 
    rating: 4.2 
  },
  { 
    title: 'Advanced State Management in React', 
    description: 'Unlock the full potential of Redux for managing complex state in your React applications.', 
    username: 'Peter Parker', 
    rating: 4.7 
  },
  { 
    title: 'Optimizing React App Deployment', 
    description: 'Step-by-step tutorial on deploying your React applications for optimal performance.', 
    username: 'tanvir241', 
    rating: 4.1 
  },
];


const TutorialsSection = () => (
  <Container className="container">
    <Header as='h2'>Featured Tutorials</Header>
    <Grid className="grid">
      {tutorials.map((tutorial, index) => (
        <Grid.Column key={index} width={4}>
          <TutorialCard {...tutorial} />
        </Grid.Column>
      ))}
    </Grid>
    <Button primary>See all tutorials</Button>
  </Container>
);

export default TutorialsSection;
