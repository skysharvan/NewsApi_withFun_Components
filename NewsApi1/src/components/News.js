import React, { useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles , setArticles] = useState([])
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1)
  const [totalResults , setTotalResults] = useState(0)
  
      const updatenews  = async()=>{
        props.setProgress(10);
        console.log(process.env.REACT_APP_NEWS_API);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        console.log(url);
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
      }
      const captalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      useEffect(()=>{
        document.title = `${captalizeFirstLetter(props.category)} - NewsMonkey`;
        updatenews();
      },[])

    const fetchMoreData = async()=>{
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)   
    };

    return (
      <div className='container  mx-3'>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'95px'}}>NewsMonkey - Top {captalizeFirstLetter(props.category)} Headlines</h1>
    
        <InfiniteScroll
                dataLength={articles&&articles.length}
                next={fetchMoreData}
                hasMore={articles && articles.length !== totalResults}
                loader={<Spinner/>}
                >
                <div className="row" >
                    { articles.map((element,index)=>{
                    return  <div key={index} className="col-md-3 my-3">
                        <NewsItem  title={element.title ?element.title.slice(0,45):""} description={element.description?element.description.slice(0,95):""} NewsUrl={element.url} ImageUrl={element.urlToImage} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
        </InfiniteScroll>
      </div>
    )
  
}

News.defaultProps = {
  country:'in',
  pageSize:8,
  category:'general'
}
News.propTypes = {
 country:PropTypes.string.isRequired,
 pageSize:PropTypes.number,
 category:PropTypes.string

}

export default News
