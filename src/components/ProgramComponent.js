import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBody} from 'reactstrap';


const Program = (props) => {
    return (
        <div className="container mt-4" >
                <CardGroup className="row" >
                    <Card className="col-sm-12 col-md-6" >
                        <CardImg top height="300" width="300" src="assets/images/maths.png" alt="Card Image" />
                        <CardBody >
                            <CardTitle><strong>Terminale Sciences Maths</strong></CardTitle>
                            <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button color ="primary">Read more ...</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-sm-12 col-md-6">
                        <CardImg top height="300" width="300" src="assets/images/experimentale.png" alt="Card Image" />
                        <CardBody>
                            <CardTitle><strong>Terminale Sciences Exp</strong></CardTitle>
                            <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button color="primary">Read more ...</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-sm-12 col-md-6">
                        <CardImg top height="300" width="300" src="assets/images/sociale.png" alt="Card Image" />
                        <CardBody>
                            <CardTitle><strong>Terminale Sc Sociales</strong></CardTitle>
                            <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button color ='primary'>Read more ...</Button>
                        </CardBody>
                    </Card>
                    <Card className="col-sm-12 col-md-6">
                        <CardImg top height="300" width="300" src="assets/images/bepc.png" alt="Card Image" />
                        <CardBody>
                            <CardTitle><strong>BEPC</strong></CardTitle>
                            <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button color="primary">Read more ...</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
        </div>
    );
};

export default Program;