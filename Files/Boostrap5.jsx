import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Boostrap5 = () => {
    return (
        <>
            <div className="container ">
                <h1 className="text-center" > Hello World </h1>
                <br />
                <div className="text-center">
                    <div class="card" >
                        <img src="https://picsum.photos/100/100" height="10%" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://v5.getbootstrap.com/docs/5.0/components/card/" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <button className="btn btn-outline-success">
                        Welcome To Future
        </button>
                </div>

            </div>

        </>

    )
}
export default Boostrap5;