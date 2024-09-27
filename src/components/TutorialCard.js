import React from 'react';
import { Card, Image, Rating, Label } from 'semantic-ui-react';
import './TutorialCard.css';

const TutorialCard = ({ title, description, username, rating }) => (
  <Card className="tutorial-card">
    <div className="image">
      <Image src={`https://picsum.photos/300?random=${Math.random()}`} wrapped ui={false} />
    </div>
    <Card.Content className="content">
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
      {rating === 5 && <Label color='yellow' ribbon>Top Rated</Label>}
    </Card.Content>
    <Card.Content extra>
      <Rating icon='star' defaultRating={rating} maxRating={5} disabled /> {username}
    </Card.Content>
  </Card>
);

export default TutorialCard;
