import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarBox.css";
let NavbarBox = () => {
    let [WindowHash, setHash] = useState();

    let rout = useLocation().hash;
    useEffect(() => {
        setHash(rout);
    }, [rout]);

    //
    // create fun loop navbar links
    let navTarget = (e) => {
        // remove active class form navbar links
        e.target.parentElement
            .querySelector(".active")
            .classList.remove("active");
        ///
        // add active class form navbar target link

        if (e.target.hash === WindowHash) {
            e.target.classList.add("active");
        }
    };
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#intro">
                        new <span>Event</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link
                                href="#intro"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                                className="active"
                            >
                                intro
                            </Nav.Link>
                            <Nav.Link
                                href="#overview"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                            >
                                overview
                            </Nav.Link>
                            <Nav.Link
                                href="#speakers"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                            >
                                speakers
                            </Nav.Link>
                            <Nav.Link
                                href="#register"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                            >
                                register
                            </Nav.Link>
                            <Nav.Link
                                href="#programs"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                            >
                                programs
                            </Nav.Link>
                            <Nav.Link
                                href="#venue"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                            >
                                venue
                            </Nav.Link>
                            <Nav.Link
                                href="#sponsors"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                            >
                                sponsors
                            </Nav.Link>
                            <Nav.Link
                                href="#contact"
                                onClick={(e) => {
                                    navTarget(e);
                                }}
                            >
                                contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarBox;
