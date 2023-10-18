import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css"
function Home() {
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/the-bmw-i5-m60-xdriv.jpg" />
      <Card.Body>
        <Card.Title className='title'>bmw</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">acheter</Button><br/><span>prix:150000 DTN</span>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.mercedes-benz.ie/content/ireland/en/passengercars/_jcr_content/root/responsivegrid/simple_stage.component.damq1.3385018336166.jpg/mercedes-amg-gt-c192-pad-stage-3840x3840-06-2023.jpg" />
      <Card.Body>
        <Card.Title className='title'>mercedes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">acheter</Button><br/><span>prix:100000 DTN</span>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'280px'}}  variant="top" src="https://cdn.motor1.com/images/mgl/mMP1PB/482:0:2900:2175/2023-range-rover-velar.webp" />
      <Card.Body>
        <Card.Title className='title'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">acheter</Button><br/><span>prix:200000 DTN</span>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home