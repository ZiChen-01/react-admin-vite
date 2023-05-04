import React, { Component } from 'react';
import './index.less'
import home from "@/assets/images/home.png"

class Home extends Component {

    render() {
        const title = window._CONFIG.ROOT_APP_NAME

        return (
            <main>

                <div className='imgbox'> <img src={home} alt="" /></div>

                <p>欢迎登录{title}</p>
            </main>
        );
    }
}

export default Home;