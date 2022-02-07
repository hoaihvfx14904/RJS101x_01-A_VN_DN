import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


    class DishDetail extends Component {
        constructor(props){
            super(props);
        

        }
        renderDish(dish){
            if(dish != null){
                return (
                    <Card>
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
        render(){
        return (
            <div className='container'>
                <div className='row'>
                    {renderDish(this.props.dish)}
                </div>
            </div>
        );
        }
    }

        export default DishDetail;