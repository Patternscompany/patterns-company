import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');

    };

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <NavLink to={"/"}>Home</NavLink>
                       
                    </li>
                    <li><NavLink to={"about-2"}>About us</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to={""}>Services</NavLink>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to={"/services-1"}>Web Developemnt</NavLink>
                                <NavLink to={"/services-2"}>App Development</NavLink>
                                <NavLink to={"/services-detail"}>SMM (Social Media Maerketing)</NavLink>
                              
                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Projects</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={""}>Project Grid Type</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-grid-3-columns"}>3 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-3-columns-no-gap"}>3 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-grid-4-columns"}>4 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-4-columns-no-gap"}>4 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-grid-5-columns"}>5 Columns</NavLink></li>
                                    <li><NavLink to={"/project-grid-5-columns-no-gap"}>5 Columns No Gutter</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={""}>Project Masonry Type</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-masonry-3-columns"}>3 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-3-columns-no-gap"}>3 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-masonry-4-columns"}>4 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-4-columns-no-gap"}>4 Columns No Gutter</NavLink></li>
                                    <li><NavLink to={"/project-masonry-5-columns"}>5 Columns</NavLink></li>
                                    <li><NavLink to={"/project-masonry-5-columns-no-gap"}>5 Columns No Gutter</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={"/project-carousel"}>Project Carousel</NavLink></li>
                            <li><NavLink to={""}>Project Detail</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={"/project-detail1"}>Project Detail 1</NavLink></li>
                                    <li><NavLink to={"/project-detail2"}>Project Detail 2</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={""}>Blog</NavLink>
                        <ul className="sub-menu">
                            <li><NavLink to={"/blog-grid"}>Blog Grid</NavLink></li>
                            <li><NavLink to={"/blog-listing"}>Blog Listing</NavLink></li>
                            <li><NavLink to={"/blog-masonry"}>Blog Masonry</NavLink></li>
                            <li><NavLink to={"/blog-single"}>Blog Single</NavLink></li>
                            <li><NavLink to={"/post-right-sidebar"}>Post Right Sidebar</NavLink></li>
                        </ul>
                    </li>
                  
                    <li><NavLink to={"/contact-us"}>Contact us</NavLink></li>
                </ul>
            </>
        );
    };
};

export default Navigation;