import React from 'react';

function Form(props) {
    return (
        <form className="form" onSubmit={props.handleSubmit} autoComplete="off">
            <div className="formFields">
                <input name="city" value={props.city} placeholder="City" onChange={props.handleChange} className="city-name"></input>
                <input name="USstate" value={props.USstate} placeholder="State" onChange={props.handleChange} className="state-name" maxLength="2"></input>
                <button className="submitButton" type="submit">Find a Feast!</button>
            </div>
        </form>
    )
}

export default Form;