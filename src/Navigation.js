import {NavLink} from "react-router-dom";
import {useState} from "react";


const Navigation = () => {
    const [expanded, setExpanded] = useState("");

    return (
        <nav className={`${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'navbar-dark' : 'navbar-light'} navbar navbar-expand-lg fixed-top fs-5`} id={'navbar'}>
            <div className={'container-fluid'}>
                <NavLink to={'/'} className={'navbar-brand fw-bold fs-4'}>
                    GEORGE
                </NavLink>
                <button
                    className={"navbar-toggler collapsed" + expanded}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setExpanded(expanded ? "" : " expanded")}
                >
                    <span className="navbar-toggler-icon"/>
                    {/*Aria expanded was just = "false"*/}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>
                        <li className={'nav-item'}>
                            <NavLink to='/' className={'nav-link'} activeClassName={'active'}>
                                Home
                            </NavLink>
                        </li>
                        <li className={'nav-item'}>
                            <NavLink to='/projects' className={'nav-link'}>
                                Projects
                            </NavLink>
                        </li>
                        <li className={'nav-item'}>
                            <NavLink to='/photography' className={'nav-link'}>
                                Photography
                            </NavLink>
                        </li>
                        <li className={'nav-item'}>
                            <a href={process.env.PUBLIC_URL + 'cv.pdf'} className={'nav-link'} target={'_blank'} rel={'noreferrer'}>Résumé</a>
                        </li>
                    </ul>
                    <div className={'d-flex navbar-nav'}>
                        <a
                            href={'https://www.twitter.com/gsbaker_'}
                            target={'_blank'}
                            rel={'noreferrer'}
                            className={'nav-link'}
                        >
                            <i className="bi bi-twitter"/>
                        </a>
                        <a
                            href={'https://www.linkedin.com/in/georgestephenbaker'}
                            target={'_blank'}
                            rel={'noreferrer'}
                            className={'nav-link'}
                        >
                            <i className="bi bi-linkedin"/>
                        </a>
                        <a
                            href={'https://www.github.com/gsbaker'}
                            target={'_blank'}
                            rel={'noreferrer'}
                            className={'nav-link'}
                        >
                            <i className="bi bi-github"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navigation