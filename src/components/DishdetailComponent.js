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
                console.log(this.props.dish.id);
            const cmt = comments.map((comment) =>{
                console.log(comment.dishId === this.props.dish.id);
                if(comment.dishId === this.props.dish.id ){
                    return (
                        <div key={comment.id} className='col-12 col-md-5 m-1' >
                        <p>{comment.comment}</p>
                        <p>--{comment.author + " " + (dateFormat(comment.date, "dd,mm,yyyy"))}</p>
                        </div>
                    )
                }
               

            });
            return (
                <div >
                    <h4>Comment</h4>
                    <p>{cmt}</p>
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
                    {this.renderComment(this.props.comment)}
                </div>
             
            </div>
        );
        }
    }

        export default DishDetail;