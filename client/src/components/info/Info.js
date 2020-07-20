import React, { Component } from 'react';

export default class Info extends Component {
    render() {
        return (
            <main role="main" className="inner cover section">
                <div className="row">
                    <div className="col-md-5 text-justify">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat
                            imperdiet sed euismod nisi. Ut faucibus pulvinar elementum integer enim neque
                            volutpat. Aliquam sem et tortor consequat id porta nibh. Lectus quam id leo in
                            vitae turpis massa sed elementum. Felis eget nunc lobortis mattis aliquam. Tellus
                            mauris a diam maecenas sed enim ut. Ridiculus mus mauris vitae ultricies leo
                            integer malesuada. Enim eu turpis egestas pretium aenean. Non curabitur gravida
                            arcu ac tortor dignissim convallis aenean et. Sed odio morbi quis commodo odio
                            aenean sed adipiscing. Nunc lobortis mattis aliquam faucibus purus. Ipsum nunc
                            aliquet bibendum enim facilisis gravida neque convallis. Proin nibh nisl
                            condimentum id venenatis a condimentum vitae. Lorem mollis aliquam ut porttitor.
                            Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Sit
                            amet cursus sit amet dictum sit amet.
                        </p>
                        <p>
                            Leo a diam sollicitudin tempor id eu nisl nunc mi. Id eu nisl nunc mi ipsum
                            faucibus vitae. Velit dignissim sodales ut eu sem integer vitae. Sem viverra
                            aliquet eget sit amet tellus. Nulla porttitor massa id neque aliquam vestibulum
                            morbi blandit cursus. Porttitor eget dolor morbi non arcu risus quis. Turpis
                            egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Arcu felis
                            bibendum ut tristique et egestas quis ipsum. Feugiat in ante metus dictum at
                            tempor commodo ullamcorper a. Id diam maecenas ultricies mi eget mauris pharetra
                            et. Mus mauris vitae ultricies leo integer malesuada. Consectetur adipiscing elit
                            duis tristique sollicitudin nibh sit amet commodo. Viverra suspendisse potenti
                            nullam ac tortor vitae purus faucibus ornare.
                        </p>
                        <p>
                            For freelance enquiries please get in{' '}
                            <a className="text-dark underline" href="mailto:kendall3lane@gmail.com">
                                touch
                            </a>
                            .
                        </p>
                        <div className="paragraph">
                            <strong>Contact</strong>
                        </div>
                        <div className="paragraph">
                            <div>
                                <a className="text-dark underline" href="mailto:kendall3lane@gmail.com">
                                    Email
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.instagram.com/kendallelane/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-dark underline"
                                >
                                    Instagram
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/kendall-lane-a4542a111/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-dark underline"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        <div className="paragraph">
                            <div>
                                <a
                                    href="https://kendall3lane.dribbble.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-dark underline"
                                >
                                    Dribbble
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.behance.net/kendall3lane/moodboards"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-dark underline"
                                >
                                    Behance
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-none d-md-block"></div>
                    <div className="col-md-5 d-none d-md-block">
                        <div className="img">
                            <img src="/images/about-me.gif" className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
