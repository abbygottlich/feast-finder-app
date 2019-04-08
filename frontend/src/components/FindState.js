
function findState() {
    const stateName = document.getElementById('state-name');
    if (stateName.value) {
        let capitalStateName = stateName.value.toUpperCase();
        return capitalStateName;
    }
}

module.exports = findState;

