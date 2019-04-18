import React from 'react';

function RestaurantInfo(props) {

    const result = props.returnedRestaurant[0]
    let content = []

    if (props.returnedRestaurant.length > 0) {
        content = <div className="restaurantInfo">
            <div><img className="resultImage" src={result.image_url} alt={result.categories[0].title} /></div>
            <div className="restaurantTextInfo">
                <div className="resultName">{result.name}</div>
                <div className="resultCategory">{result.categories[0].title}</div>
                <div className="resultPrice">{result.price}</div>
                <div className="resultLocation">{result.location.display_address.join(" ")}</div>
            </div>
        </div>
    }
    return content
}

export default RestaurantInfo;