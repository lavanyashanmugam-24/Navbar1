import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup } from "react-bootstrap";

class Cards extends Component{
    render(){
        return(
        <div>
     <CardGroup variant="success" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQRXWBKMqCQ4zssn7Ik5PI7IY0gZwih_i_g&usqp=CAU")` }}>
            <Card  style={{ width: '18rem' }} width="100" height="100" border="dark">
            <Card.Img variant="top"width="300" height="300" src="https://eecsnews.engin.umich.edu/wp-content/uploads/sites/2/2018/12/data-science-header-featured-1.jpg" />
            <Card.Body>
                <Card.Title >Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body> </Card>
            <Card style={{ width: '18rem' }} width="100" height="100" border="dark">
            <Card.Img variant="top" width="300" height="300" src="http://getwallpapers.com/wallpaper/full/b/9/4/444409.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} width="100" height="100" border="dark">
            <Card.Img variant="top" width="300" height="300" src="https://wallpapertag.com/wallpaper/middle/8/9/3/225313-computer-science-wallpaper-2560x1440-for-iphone-5.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </CardGroup>
  
        </div>)
    }
}
export default Cards;