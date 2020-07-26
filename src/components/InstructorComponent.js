import React,{ Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';


class Instructor extends Component {
    render(){
        const teacher = this.props.instructors.map(instructor => {
            return (
                <div key={instructor.id} className="col-md-5 m-1">
                    <Card >
                        <CardImg src={instructor.image }  alt = {instructor.name} width="100%" />
                        <CardBody>
                            <CardTitle><strong>{instructor.name}</strong></CardTitle>
                            <CardText>{instructor.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {teacher}
                </div>
            </div>
        );
    }
}

export default Instructor;