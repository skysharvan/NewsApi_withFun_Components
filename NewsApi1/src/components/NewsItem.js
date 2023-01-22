import React from 'react'

const NewsItem = (props)=> {
  let {title , description , ImageUrl , NewsUrl , author , date ,source} = props;
  return (
    
      <div>
        <div className="card" >
            <img src={ImageUrl?ImageUrl:"https://techcrunch.com/wp-content/uploads/2022/02/gomechanic-india.jpeg?resize=1200,662"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                 <span className="badge bg-danger">{source}</span>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={NewsUrl} target="_blank" className="btn btn-dark">Read more</a>
            </div>
            </div>
      </div>
      
    )
}
export default NewsItem
