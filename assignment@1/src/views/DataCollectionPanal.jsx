import React from "react";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Progress,
    Table,
    Row,
    Col,
    UncontrolledTooltip, Form
} from "reactstrap";

class DataCollectionPanal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueOfX:'',
            valueOfY:'',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getEnteredValues(this.state.valueOfX, this.state.valueOfY)
    };

    render() {
        return (
            <>
                <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Enter the Values</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form className="form-horizontal">
                                    <Row>
                                        <Label md="3">Value of X</Label>
                                        <Col md="9">
                                            <FormGroup>
                                                <Input type="text" name={'valueOfX'} value={this.state.valueOfX} onChange={e => this.handleChange(e)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label md="3">Value of Y</Label>
                                        <Col md="9">
                                            <FormGroup>
                                                <Input type="text" name={'valueOfY'} value={this.state.valueOfY} onChange={e => this.handleChange(e)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Form className="form-horizontal">
                                    <Row>
                                        <Label md="3" />
                                        <Col md="9">
                                            <Button
                                                className="btn-fill"
                                                color="primary"
                                                type="submit"
                                                onClick={(e) => this.onSubmit(e)}
                                            >
                                                Calculate and Add
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardFooter>
                        </Card>
                    </Col>
            </>
        );
    }
}

export default DataCollectionPanal;
