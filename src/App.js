import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import Content from "./component/index/Content";
import SubmitButton from './component/core/SubmitButton';

const HeaderText =[
    "ถ้าพูดเยอะอาจจะเจ็บคอ",
    "แต่ถ้ามา Talk Chip 2019",
    "แล้วพูดไม่พอจะเสียใจ"];
    ;

const FirstDescription = '23 กุมพาพันธ์ 2019 ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี อาคารเรียนรวม 2 ชั้น 4 ห้อง 2401 และ 2402';

const FirstSubmitText = "ส่งหัวข้อที่จะไปพูดกันเลย !";
const Temp = ['หรือ',"ดูหัวข้อที่สนใจ>"];

class App extends Component{
    render(){
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Content context={FirstDescription} headers={HeaderText}/>
                    </Row>
                    <Row>
                        <Col xs='5'>
                            <SubmitButton submit={FirstSubmitText}/>
                        </Col>
                        <Col>
                            <Content contexts={Temp} />
                        </Col>    
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
