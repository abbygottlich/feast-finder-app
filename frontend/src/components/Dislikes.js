import React, { Component } from 'react';

class Dislikes extends Component {

    state = {
        dislikes: []
    }

    componentDidMount() {
        this.showRatings('dislike')
    }

    showRatings = (rating) => {
        fetch("http://localhost:5000/restaurants/" + rating)
            .then(res => res.json())
            .then(restaurants => {
                this.setState({
                    dislikes: restaurants
                })
                console.log(restaurants)
            })
    }

    render() {
        return (
            <div>{this.state.dislikes.map(f => <div>{f.name}</div>)}</div>
        );
    }
}

export default Dislikes;