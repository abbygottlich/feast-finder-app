import ReturnedRestaurant from "../components/ReturnedRestaurant";
import { connect } from 'react-redux';

// this is passing state into RestaurantInfo as props
function mapStateToProps(state) {
    return {
        returnedRestaurant: state.returnedRestaurant
    }
}

export default connect(mapStateToProps, null)(ReturnedRestaurant)