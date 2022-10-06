import React from "react";

const Newsitem= (props)=>{
    let {title, description , imgUrl , newsUrl , author , date , source} = props;
    return (
      <div className="my-3 d-flex justify-content-center">
        <div  className="card" style={{width:"22rem"}}  >
          <img src={imgUrl?imgUrl:"https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png"} style={{height:"12rem",objectFit:"fill"}} className="card-img-top" alt="" />
          <div  className="card-body">
            <h5  className="card-title">{title?title.slice(0,40):""}...</h5>
            <p  className="card-text">
              {description?description.slice(0,60):"description does not exist"}...
            </p>
            <p className="card-text"><small className="text-muted">by {!author?"Unkown User":author} on {new Date(date).getDate()}/{new Date(date).getMonth()}/{new Date(date).getFullYear()}</small></p>                                                                                           
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-main">{source}</span>
            <a href={newsUrl} target= "blank"  className="btn btn-dark">
             Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;
