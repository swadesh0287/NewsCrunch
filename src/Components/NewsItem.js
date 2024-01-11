import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="card">
  <img src={!imageUrl?"https://c.ndtvimg.com/2023-01/7sv7pcq4_gunjan-patidar_625x300_02_January_23.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%',zIndex : '1'}}>{source}</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">BY {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem 