import RestaurantInfo from "../components/RestaurantInfo";
import { connect } from 'react-redux';

// this is passing state into RestaurantInfo as props
function mapStateToProps(state) {
    return {
        returnedRestaurant: state.returnedRestaurant
    }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfo)