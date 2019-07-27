import React from 'react'
import {Container, Row, Col} from "reactstrap";
import styled from "styled-components";

const HeaderFont = styled.h2`
    font-family: 'Athiti', sans-serif;
    margin-bottom: 3%;
    margin-top: 10%;
    font-size: 55px;
    font-weight: bold;
    line-height: 1.35;
    color: rgb(105, 48, 44);
`;

const Description = styled.p`
    font-family: 'Athiti', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: rgb(105, 48, 44);
`;

const Content = (props) => {
    if (props.context&&props.headers) {
        return (
            <Container>
                <Row>
                    <HeaderFont>{props.headers[0]}<br></br>{props.headers[1]}<br></br>{props.headers[2]}</HeaderFont>
                </Row>
                <Row>
                    <Description>{props.context}</Description>
                </Row>
            </Container>
        )
    } else if (props.contexts) {
        return (
            <Container>
                <Row>
                    <Col xs='2'><Description>{props.contexts[0]}</Description></Col>
                    <a href='/vote'>
                    <Description>{props.contexts[1]}</Description>
                    </a>
                </Row>
            </Container>
        )
    }
}
export default Content