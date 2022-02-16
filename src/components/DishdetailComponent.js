import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
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
        function RenderComments({comments, addComment, dishId}) {
            if (comments != null)
                return(
                    <div >
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <div>
                                {comments.map((comment) => {
                                    return (
                                        <div key={comment.id}>
                                            <li>
                                            <p> {comment.comment}</p>
                                            <p>{comment.rating} star</p>
                                            <p>-- {comment.author} , {dateFormat(comment.date, "dd,mm,yyyy")}</p>
                                            </li>
                                        </div>
                                    );
                                })}
                            </div>
                        </ul>
                        <CommentForm dishId={dishId} addComment={addComment} />
                    </div>
                );
            else
                return(
                    <div></div>
                );
        }
        class CommentForm extends Component {

            constructor(props) {
                super(props);
        
                this.toggleModal = this.toggleModal.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                
                this.state = {
                  isNavOpen: false,
                  isModalOpen: false
                };
            }
        
            toggleModal() {
                this.setState({
                  isModalOpen: !this.state.isModalOpen
                });
            }
        
            handleSubmit(values) {
                this.toggleModal();
                this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
            }
        
            render() {
                return(
                <div>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment"
                                            rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" className="bg-primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                   </Modal>
                </div>
                );
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
                    <div className="col-12 col-md-6 m-1">
                    <RenderComments comments={props.comments}
                                    addComment={props.addComment}
                                    dishId={props.dish.id}
                    />
                    </div>
                </div>
                </div>
            );
        }else {
            return <div> </div>
        }
    }

        export default DishDetail;