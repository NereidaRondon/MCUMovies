
//import Stars from './Stars';
import {useState} from 'react';
import {useRef} from 'react';
import ReactStars from "react-stars";
import React from 'react';
import './App.css';



export default function ReviewForm(props){
    const [addBtn, setAddBtn] = useState(true);
    const [form, setForm]= useState(false);

    const handleClick = event =>{
        setForm(true);
        console.log('Show Form')
        setAddBtn(false);
        console.log('Hide review button')
    }
    const handleClose = event =>{
        setForm(false);
        console.log('Form is hidden')
        setAddBtn(true);
        console.log('review button shown')
        console.log(reviewList);
    } 

    const [reviewList, setReviewList]= useState(
        [
            {
                user: 'Nereida',
                item:'Great movie and awesome movie effects.',
                rating: '5⭐',
            },
             
            {   
                user: 'Jose',
                item:'A thrilling addition to the MCU franchise!',
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
        console.log(`saved!`);
        console.log(starsNum[0]);
        setReviewList(current => [...current, {
                user: user.current.value,
                item: review.current.value, 
                rating: starsNum[0]
            }
        ]);
        user.current.value = '';
        review.current.value = '';
        starsNum=[];
    }
    
    const [allReviews, setAllReviews]= useState(false);

    function readReviews(){
        setAllReviews(true);
        setAddBtn(false);
    }
    function closeReviews(){
        setAllReviews(false);
        setAddBtn(true);
    }

    function ReviewList(){    
        const itemList = reviewList.map((review) => (
            <>
            <hr></hr>
            <li className="review--list">
                <span className="user">{review.user}:</span>
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
    

    return(
        <>
            {addBtn && ( 
                 
                <div className="rev--buttons d-grid gap-2">
                    <button type="button" className="btn btn-outline-danger read--btn" onClick={readReviews}>Read Reviews</button>

                    <button type="button" className="btn btn-outline-light" onClick={handleClick}>Add a Review</button>
                </div>
            )}
            {allReviews && ( 
                <div className="rev--buttons d-grid gap-2">
                    <button type="button" className="btn btn-danger close--reviews" onClick={closeReviews}>Close Reviews</button>
                </div>    
            )}    
                     
            
            {form && ( 
            
                <div className="form">
                    <div className="row">

                    </div>
                    <div className="input-group">
                        <input
                        type="text"
                        ref={user} 
                        className="form-control" 
                        placeholder="Your name"  
                        />
                    </div>
                    <br></br>
                    <div className="input-group">
                        <textarea
                        type="text"
                        ref={review} 
                        className="form-control" 
                        placeholder="Type movie review here" aria-label="With textarea" 
                        ></textarea>
                    </div>
                    <div className="stars" name='newRating'>
                        <ReactStars
                            count={5}
                            color2={'#ffd700'}
                            size={24}
                            onChange={ratingChanged}
                        />
                    </div>
                    <div>              
                        <button type="button" className="btn btn-secondary close" onClick={handleClose}>Close</button>{'\u2003'}

                        <button type="button" className="btn btn-primary save" onClick={clickSave}>Save</button>
                    </div>
                </div>
            )}

            {allReviews && (
                <div>
                  
                    <div>
                        <h5 className="title">Movie Reviews</h5>
                    </div>
                    <div>
                        <ReviewList />
                    </div>

                    
                </div>
            )}                 
            
        </>
    );
}
