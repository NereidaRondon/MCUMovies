import {useState} from 'react';
import {useRef} from 'react';
import ReactStars from "react-stars";
import React from 'react';
import star from '../images/star.svg';
import './App.css';

export default function ReviewForm(props){
    const [warning, setWarning] = useState(false);
    const [modal, setModal]= useState(false);
    //const body = document.querySelector("body");

    // const handleClickAddReview = event =>{
    //     //setForm(true);
    //     //console.log('Show Form')
    //     //setAddBtn(false);
    //     console.log('Hide review button')
    // }
    const handleCloseModal = event =>{
        setModal(false);
        setWarning(false);
        //console.log('Form is hidden')
        //setAddBtn(true);
        console.log('review button shown')
        console.log(reviewList);
        //body.style.overflow = "auto";
    } 

    const [reviewList, setReviewList]= useState(
        [
            {
                user: 'Nereida',
                item:'A thrilling addition to the MCU franchise!',
                rating: '5⭐',
            },
             
            {   
                user: 'Jose',
                item:'Great movie and awesome movie effects.',
                rating: '4.5⭐'
            }
        ]
        );
        
    const user = useRef(null);  
    const review = useRef(null);     
    let starsNum=[];

    const ratingChanged = (newRating) => {
        console.log(`rating: ${newRating}⭐`);
        let myRating = `${newRating}⭐`;
        starsNum.push(myRating);
    }
    
    function clickSave(){
        if(starsNum.length===0){
            console.log("No star rating! Throw warning.")
            setWarning(true);
        }else{
            setReviewList(current => [...current, {
                    user: user.current.value,
                    item: review.current.value, 
                    rating: starsNum[starsNum.length-1]
                }
            ]);
            setWarning(false);
            console.log(`saved!`);
            console.log(starsNum[starsNum.length-1]);
            user.current.value = '';
            review.current.value = '';
            starsNum=[];
        }
    }
    
    function ReviewList(){    
        const itemList = reviewList.map((review) => (
            <>
            <hr></hr>
            <li className="review--list">
                <span className="user">{review.user}</span>
                <br></br>
                {review.item} 
                <br></br>
                <span className="rating">Rating:</span> {review.rating}</li>
            </>
        ));
        
        return(
            <div>
                <ul>{itemList}</ul>
            </div>
        );
    }   
    const handleClickOpenModal = event =>{
        // body.style.overflow = "hidden";
        console.log("open reviews modal");
        setModal(true);
    }
    function ModalForReviews(){
        return(
            
            <div className='reviews-modal'>   
                <div className="form container flex">
                    <div className="row g-2 m-auto"> 
                        <div className="col-md-12 mb-3"> 
                            <h4>Reviews for "{props.movieTitle}"</h4>
                        </div>
                    </div>        
                    <div className="row g-1 mb-3  ">    
                        <div className="col-md-12">
                            <div className="input-group">
                                <input
                                type="text"
                                ref={user} 
                                className="form-control name-input" 
                                placeholder="Your name"  
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row g-1 m-auto">       
                        <div className="col-md-12">
                            <div className="input-group">
                                <textarea
                                type="text"
                                ref={review} 
                                className="form-control" 
                                placeholder="Type movie review here" aria-label="With textarea" 
                                ></textarea>
                            </div>
                        </div>
                    </div> 
                    <div className="row g-1 m-auto">
                        <div className="col-md-6">
                            <div className="stars" name='newRating'>
                                <ReactStars
                                    count={5}
                                    color2={'#ffd700'}
                                    size={24}
                                    onChange={ratingChanged}
                                    />
                            </div>
                        </div>    
                                {warning && (<div className="warning">Must select a star rating...</div>)}    
                    </div>
                    <div className="row g-2"> 
                        <div className="d-grid gap-1 col-6"></div>                                       
                        <div className="d-grid gap-1 col-3 ">
                            <button type="button" className="btn btn-danger close" onClick={handleCloseModal}>Close</button>
                        </div>
                        <div className="d-grid gap-1 col-3 ">
                            <button type="button" className="btn btn-primary save" onClick={clickSave}>Save</button>
                        </div>    
                    </div>
                </div>
                <br></br>     
                <div className="container flex">   
                    <div className="row g-1"> 
                        <div className="col-lg-12">
                                <ReviewList />
                        </div>
                    </div>
                </div>    
            </div>


                // {/* <div className="row g-3">
                // {addBtn && ( 
                    
                //     <div className="rev--buttons d-grid gap-2">
                //         <button type="button" className="btn btn-outline-danger read--btn" onClick={readReviews}>Read Reviews</button>

                //         <button type="button" className="btn btn-outline-light" onClick={handleClickAddReview}>Add a Review</button>
                //     </div>
                // )}
                // </div>  */}


            
        );
    }

    return(
        <>
            {modal && <ModalForReviews />}
            
            <div className="d-grid">
                <button type="button" className="btn btn-outline-light reviews-btn" onClick={handleClickOpenModal}>
                    Reviews<img className="star" src={star} alt="star" ></img>
                </button>
            </div> 

{/* 
            {allReviews && ( 
                <div className="rev--buttons d-grid gap-2">
                    <button type="button" className="btn btn-danger close--reviews" onClick={closeReviews}>Close Reviews</button>
                </div>    
            )}     */}

            {/* {allReviews && (
                <div>    
                    <div>
                        <h5 className="title">Movie Reviews</h5>
                    </div>
                    <div>
                        <ReviewList />
                    </div>
                </div>
            )}                        */}
            
        </>
    );
}
