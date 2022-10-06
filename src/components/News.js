import React, { useEffect , useState } from "react";
import Newitem from "./Newsitem";
import Spinner  from "./Spinner";
import  PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  


  const updatePage = async() =>{
    props.setProgress(10) 
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
   
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url)
    props.setProgress(50)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }


  useEffect(() => {
    props.setProgress(10)
    updatePage();
    // eslint-disable-next-line
  },[]);



  const fetchMoreData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`
    setPage(page+1)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
  }
    return (
      <div>
        <h2 className="text-center my-4">TechisheavenNews - Top headings</h2>
        {loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
          <div className="row">
          {articles?.map((element, index)=>{
              return <div className="col-md-4" key={index}>
                <Newitem  title={element.title} description={element.description} source= {element.source.name} imgUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date= {element.publishedAt}/>
          </div>
        })}
        </div>
        </div>

        </InfiniteScroll>
        
      </div>
    );
}

News.defaultProps = {
  country:'in',
  pageSize : 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize : PropTypes.number,
  category: PropTypes.string,
};

export default News;
