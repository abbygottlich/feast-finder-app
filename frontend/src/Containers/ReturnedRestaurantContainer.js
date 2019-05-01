import ReturnedRestaurant from "../components/ReturnedRestaurant";
import { connect } from 'react-redux';

// this is passing state into ReturnedRestaurant as props
function mapStateToProps(state) {
    return {
        returnedRestaurant: state.returnedRestaurant,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, null)(ReturnedRestaurant)