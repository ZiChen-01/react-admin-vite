
const defaultState = {
    reload: false,
    count: 0
}

const reducer = (preState = defaultState, action) => {
    const { type, data } = action
    switch (type) {
        case 'reload':
            return {
                reload: data
            }
        case 'reduce':
            return {
                count: preState.count - data
            }
        default:
            return defaultState
    }
}

export default reducer