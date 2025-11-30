import React from "react";

const Card = (props) => {    // in Aoo.jsx we call Card and there we add a Props parameter 
                            // to accessthe properties we write when we call card
  return (
      <div className="container">
        <div className="top">
          <img src={props.logo} alt="Logo"/>
          <h2 id="id1">Save<i class="fa-regular fa-bookmark"></i></h2>
        </div>
        <div className="middle">
          <h3>{props.companyName} <span id="spn">{props.postDate} </span></h3>
          <h2 id="ui">{props.post}</h2>
          <div className="part">
            <span className="cls2">{props.tag1}</span>
            <span className="cls2">{props.tag2}</span>
          </div>
        </div>
        <div className="footer">
          <div>
            <h3>{props.pay}</h3>
            <span>{props.location}</span>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  );
};

export default Card;
