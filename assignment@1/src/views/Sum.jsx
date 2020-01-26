import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

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

import DataCollectionPanal from "./DataCollectionPanal";
import ResultsRecord from "./ResultsRecord";

let valuesAndResults = [];

class Sum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    getEnteredValues = (x,y)=>{
        valuesAndResults.push(
            {
                'valueOfX':x,
                'valueOfY':y,
                'result': parseInt(x)+parseInt(y)
            }
        );
        this.setState({
            valuesAndResults:valuesAndResults
        });
    };
    render() {
        console.log(this.state.valuesAndResults);
        return (
            <>
                <div className="content">
                    <DataCollectionPanal
                        getEnteredValues={this.getEnteredValues}
                    />
                    <ResultsRecord
                        valuesAndResults={this.state && this.state.valuesAndResults? this.state.valuesAndResults : [{}]}
                    />
                </div>
            </>
        );
    }
}

export default Sum;
