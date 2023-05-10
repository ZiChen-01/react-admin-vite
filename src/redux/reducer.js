
const defaultState = {
    reload: false,
    darkTheme: false,//深夜模式
    weakOrGray: false,//色弱/灰色
}

const reducer = (preState = defaultState, action) => {
    const { type, data } = action

    switch (type) {
        case 'reload':
            return {
                reload: data
            }
        case "darkTheme":
            return {
                darkTheme: data
            }
        case 'weakOrGray':
            return {
                weakOrGray: data
            }
        default:
            return defaultState
    }
}

export default reducer