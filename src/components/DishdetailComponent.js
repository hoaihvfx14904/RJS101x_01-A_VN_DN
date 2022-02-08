import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import dateFormat from 'dateformat';

    
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
    function RenderComment({dish}) {
           
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
    const DishDetail = (props) =>{
        if(props.dish != null){
    
        return (   
            <div className='container mt-3'>
               <div className='row'>
               <div className='col-12 col-md-5 m-1'>
                    <RenderDish dish={props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComment dish={props.dish} />
                </div>
               </div>
                
             
            </div>
        );
        }else {
            return <div> </div>
        }
    }

        export default DishDetail;