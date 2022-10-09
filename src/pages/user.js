import React from 'react'
import data from './data'
import "../assets/styles.css"

function User() {
  return (
    
    <div className="grid-container">
            {/* <header className="row">
                <div>
                    <a className="brand" href="/">NFT Certificate</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header> */}
        <main>
            <div className="row center">
                {
                    data.certificates.map((certificate) =>(
                        <div key={certificate._id} className="card">
                            <div>
                            <img className="cer-img" src={certificate.image}  alt={certificate.name}/>
                            {/* <a href={`/product/${product._id}`}>
                                <img className="medium" src={product.image}  alt={product.name}/>
                            </a> */}
                            </div>
                            <div className="card-body">
                            <h2>{certificate.name}</h2>
                                {/* <a href="{product.name}.html">
                                    <h2>{product.name}</h2>
                                </a> */}
                            {/* <div className="rating">
                                <span> <i className="fa fa-star"></i></span>
                                <span> <i className="fa fa-star"></i></span> 
                                <span> <i className="fa fa-star"></i></span>
                                <span> <i className="fa fa-star"></i></span>
                                <span> <i className="fa fa-star"></i></span>
                            </div> */}
                            <div className="price">{certificate.degree}</div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </main>
        <footer className="row center">All right reserved</footer>
    </div>
    
  )
}

export default User