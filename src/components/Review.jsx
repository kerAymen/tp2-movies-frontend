import {Row, Col} from 'react-bootstrap';


function Review({review}) {
    return (
        <>
            <Row>
                <Col>{review}</Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>                                
        </>
    )
}

export default Review