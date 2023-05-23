import { Navigate } from 'react-router-dom';
function AutnToken({ children }) {
    const token = localStorage.getItem(window.envConfig['ROOT_APP_TOKEN'])
    if (token) {
        return <>{children}</>
        // 如果token存在，则返回传入的组件
    } else {
        // 否则重定向到登录组件
        // react路由有个重定向的组件叫Navgite
        return <Navigate to="/login" replace></Navigate>
    }
}

export default AutnToken