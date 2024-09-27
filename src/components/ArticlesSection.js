import React from 'react';
import { Container, Header, Grid, Button } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';

const articles = [
  { title: 'Introduction to React', description: 'Dive into the basics of React.js', author: 'John Hill', rating: 5 },
  { title: 'Advanced JavaScript', description: 'Explore JavaScript features', author: 'Sam Smith', rating: 4 },
  { title: 'CSS Grid Layout', description: 'Mastering CSS Grid for modern layouts', author: 'Robin Johnson', rating: 4.5 },
];

const ArticlesSection = () => (
  <Container className="container">
    <Header as='h2'>Featured Articles</Header>
    <Grid className="grid">
      {articles.map((article, index) => (
        <Grid.Column key={index} width={4}>
          <ArticleCard {...article} />
        </Grid.Column>
      ))}
    </Grid>
    <Button primary>See all articles</Button>
  </Container>
);

export default ArticlesSection;
