import React, { Component } from 'react';

class Dislikes extends Component {

    state = {
        dislikes: []
    }

    componentDidMount() {
        this.showRatings('dislike')
    }

    showRatings = (rating) => {
        fetch("/restaurants/" + rating)
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
            <div>{this.state.dislikes.map(f => <div>{f.name}
                <button>Remove</button>
                <button>Move to Favorites</button>
            </div>)}
            </div>
        );
    }
}

export default Dislikes;