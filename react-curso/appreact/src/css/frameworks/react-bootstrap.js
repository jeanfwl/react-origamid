import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <Card text="primary" bg="light" className="border-primary">
      <Card.Header>
        <Card.Title>Título</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          temporibus ex praesentium ipsam, quo reprehenderit repudiandae natus
          est ut? Voluptas tenetur quibusdam, velit nobis nihil reiciendis sequi
          labore quam aliquid.
        </Card.Text>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  );
};

export default App;
