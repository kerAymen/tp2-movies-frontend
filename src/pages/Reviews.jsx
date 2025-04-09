import {useEffect, useRef} from 'react';
import {postReview} from '/src/services/ApiService';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '/src/components/ReviewForm';
import Review from '/src/components/Review'
function Reviews({getMovieData,movie,reviews,setReviews}) {

    const revText = useRef()
    let params = useParams()
    const movieId = params.movieId

    useEffect(()=>{
        getMovieData(movieId)
    },[])

    const addReview = async (e) =>{
        e.preventDefault()

        const rev = revText.current
        const review = await postReview(rev.value, movieId)
        const updatedReviews = [...reviews, {body:rev.value}];
        setReviews(updatedReviews)
        rev.value = ""
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r, index) => <Review key={index} review={r.body} />)
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews