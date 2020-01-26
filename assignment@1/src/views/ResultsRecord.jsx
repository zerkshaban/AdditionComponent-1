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

class ResultsRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <>
                <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="tools float-right">
                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            caret
                                            className="btn-link btn-icon"
                                            color="default"
                                            data-toggle="dropdown"
                                            type="button"
                                        >
                                            <i className="tim-icons icon-settings-gear-63" />
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Value of X
                                            </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Value of Y
                                            </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Result
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                                <CardTitle tag="h4">Results</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                    <tr>
                                        <th>Value of X</th>
                                        <th>Value of Y</th>
                                        <th>Result</th>
                                    </tr>
                                    </thead>
                                    {this.props.valuesAndResults.map((key) => {
                                        return (
                                            <tbody>
                                                <tr>
                                                    <td>{key.valueOfX}</td>
                                                    <td>{key.valueOfY}</td>
                                                    <td>{key.result}</td>
                                                </tr>
                                            </tbody>
                                        )
                                     })
                                     }
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
            </>
        );
    }
}

export default ResultsRecord;
