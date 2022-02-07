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
         renderComment(dish){
           
            if(dish){
                console.log('comments', dish);
                return (
                    <div >
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <div>
                                {dish.comments.map((comment) => {
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
        render(){
        return (   
            <div className='container mt-3'>
               <div className='row'>
               <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    { this.props.dish && this.renderComment(this.props.dish)}
                </div>
               </div>
                
             
            </div>
        );
        }
    }

        export default DishDetail;