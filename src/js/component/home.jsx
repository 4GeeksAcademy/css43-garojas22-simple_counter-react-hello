import React from "react";
import PropTypes from "prop-types";


//create your first component
const Home = (props) => {

	return (

          <div className="p-4 g-4 ">
            <div  className="card h-50 mb-3 ">
                <div class="counter">
                    <div id="stopwatch">

                      <div class="container text-center ">
                        {props.counter}
                      </div>

                    </div>

                    <div class="buttons">
    
                      <div className="px-2">
                        <button id="start" className="btn btn-outline-dark"> <i class="fa-solid fa-play"></i> </button>
                      </div>
                            
                      <div className="px=2">
                          <button id="stop" className="btn btn-outline-dark"><i class="fa-solid fa-pause"></i></button>
                      </div>

                    </div>
                </div>
            </div>
          </div>
		
	);
};

Home.propTypes = {
	counter: PropTypes.string
};

export default Home;




// //create your first component
// function Cards(props){
//     return (
//         <div className="card">
//             <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
//             <div className="card-body">
//                 <h5 className="card-title">{props.title}</h5>
//                 <p className="card-text">Some quick example text to build on the {props.title} and fill the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     );
// }
// Cards.propTypes = {
// 	imageUrl: PropTypes.string,
// 	title: PropTypes.string
// };

// export default home;
// ReactDOM.render(<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />, document.quertSelector('#root'));

