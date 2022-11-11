import Form from './ReviewForm';

export default function Movie(props){
       
    return(
        <>     
        <div className="card text-bg-dark">
            <div className="img--box">
                <img className="card-img" src={props.movie.img} alt={props.movie.title}/>
                <p className="card--text">{props.movie.info}</p>
            </div>
            <div className="card-body card--main">
                <h5 className="card-title">{props.movie.title} ({props.movie.year})</h5>

            </div>

            <div className="card-body p-2">
                <Form
                    key={props.movie.id}
                    movieTitle={props.movie.title}
                />
            </div>    
        </div> 
        </>      
    );
}