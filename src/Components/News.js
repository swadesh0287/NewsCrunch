import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
              country  : 'in',
              pageSize : 8,
              category : 'general',
  }
  static propTypes = {
    country  : PropTypes.string,
    pageSize :  PropTypes.number,
    category :  PropTypes.string,
  }
  capitalizeFirstLetter =(string) =>{
              return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props){
    super(props);
    console.log("Hello I am a constructor from News Componenet")
    this.state = {
      articles:[],
      loading: false,
      page:1
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsCrunch`;
  }
  async updateNews(pageNo) {
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3ca826a7c0c404aa38d189119d2fa18&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
    this.setState({articles : parsedData.articles,totalResults : parsedData.totalResults,loading:false})
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3ca826a7c0c404aa38d189119d2fa18&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData =await data.json()
    // console.log(parsedData);
    // this.setState({articles : parsedData.articles,totalResults : parsedData.totalResults,loading:false})
    this.updateNews();
  }
  handlePrevClick= async() =>{
  //   if(this.state.page-1>Math.ceil(this.state.totalResults/this.props.pageSize)){

  //   }
  //   else{
  //     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3ca826a7c0c404aa38d189119d2fa18&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading : true});
  //     let data = await fetch(url);
  //   let parsedData =await data.json()
  //   console.log(parsedData);
  //   this.setState({
  //     page:this.state.page-1,
  //     articles : parsedData.articles,
  //     loading:false,
  //     })
  // }
    await this.setState({page:this.state.page-1})
    this.updateNews();

    
    
  }

  handleNextClick= async() =>{
    // console.log("next");
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

    //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3ca826a7c0c404aa38d189119d2fa18&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : true});
    //   let data = await fetch(url);
    // let parsedData =await data.json()
    // console.log(parsedData);
    // this.setState({
    //   page:this.state.page+1,
    //   articles : parsedData.articles,
    //   loading:false,
    //   })

    // }
    await this.setState({page:this.state.page+1})
    this.updateNews();
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}}>NewsCrunch - Top {this.capitalizeFirstLetter(this.props.category)}  Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>
          <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} description ={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
        </div>
          )}

          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>  
             
        </div>
        
        

      </div>
    )
  }
}

export default News
