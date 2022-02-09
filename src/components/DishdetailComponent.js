import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import dateFormat from 'dateformat';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    
     function   RenderDish({dish}){
            if(dish != null){
                return (
                    <Card width='100%'>
                        <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );

            }else{
                return <div></div>;
            }
        }
    function RenderComment({comments}) {
           
            if(comments){
                return (
                    <div >
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <div>
                                {comments.map((comment) => {
                                    return (
                                        <div key={comment.id}>
                                            <li>
                                            <p>test {comment.comment}</p>
                                            <p>-- {comment.author} , {dateFormat(comment.date, "dd,mm,yyyy")}</p>
                                            </li>
                                        </div>
                                    );
                                })}
                            </div>
                        </ul>
                    </div>
                        )
            } else {
                return <div></div>;
            }
    }  
    const DishDetail = (props) =>{
        if(props.dish != null){
    
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }else {
            return <div> </div>
        }
    }

        export default DishDetail;