import React from 'react';

const SerachResult = (props) => {

    const img = `https://source.unsplash.com/400x300/?${props.name}`;
    return (
        <> 
        <div>
            <img src={img} alt="load"  />
        </div>
        </>
    );

};
export default SerachResult;