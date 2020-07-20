import React from 'react';

const Footer = () => (
    <footer className="mastfoot mt-auto">
        <div className="row">
            <div className="col-md-4 text-justify">
                <p>Kendall Lane is... For freelance enquiries, please get in touch.</p>
                <div>
                    <div>
                        <a className="text-dark underline" href="mailto:kendall3lane@gmail.com">
                            Email
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/kendall-lane-a4542a111/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.instagram.com/kendallelane/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark underline"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <strong>Selected Clients</strong>
                <div>IBM</div>
                <div>Apple</div>
                <div>Company3</div>
            </div>
            <div className="col-md-4">
                <strong>Features</strong>
                <div>
                    <a href="#" className="text-dark underline">
                        Link1
                    </a>
                </div>
                <div>
                    <a href="#" className="text-dark underline">
                        Link2
                    </a>
                </div>
                <div>
                    <a href="#" className="text-dark underline">
                        Link3
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
