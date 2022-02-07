import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import dateFormat from 'dateformat';

    class DishDetail extends Component {
        constructor(props){
            super(props);
        }
        renderDish(dish){
            if(dish != null){
               
                return (
                    <Card className='col-12 col-md-5 ' >
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
         renderComment(comments){
            if(comments !=null){
                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <div>
                                {comments.map((comment) => {
                                    return (
                                        <div key={comment.id}>
                                            <li>
                                            <p>{comment.comment}</p>
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
        render(){
        return (   
            <div className='container'>
                <div >
                    {this.renderDish(this.props.dish)}
                </div>
                <div >
                    {this.renderComment(this.props.dish.comments)}
                </div>
                
             
            </div>
        );
        }
    }

        export default DishDetail;