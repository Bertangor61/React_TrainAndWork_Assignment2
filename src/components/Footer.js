import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer-area">
                    <div className="footer-copyright-area footer-copyright-area--two">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="copyright-text copyright-text--two text-center text-md-start">
                                        © BT by <a href="#">Architecht</a>. All Right Reserved 2023
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-widget text-center text-md-end mb-0">
                                        <ul className="footer-widget__social-links footer-widget__social-links--dark">
                                            <li><a href="/" title="Facebook"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="/" title="Twitter"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="/" title="LinkedIn"><i className="fa fa-linkedin" /></a></li>
                                            <li><a href="/" title="Youtube"><i className="fa fa-youtube-play" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Footer