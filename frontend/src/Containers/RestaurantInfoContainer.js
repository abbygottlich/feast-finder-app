import RestaurantInfo from "../components/RestaurantInfo";
import { connect } from 'react-redux';

// this is passing state into RestaurantInfo as props
function mapStateToProps(state) {
    return {
        returnedRestaurant: state.returnedRestaurant,
        inputFail: state.inputFail
    }
}

export default connect(mapStateToProps, null)(RestaurantInfo)