import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="mastfoot mt-auto">
        <div className="row">
            <div className="col-md-4 text-justify">
                <p>Kendall Lane is... For freelane enquiries, please get in touch.</p>
                <div>
                    <div>
                        <Link className="text-dark underline" to="mailto:kendall3lane@gmail.com">
                            kendall3lane@gmail.com
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className="text-dark underline">
                            LinkedIn
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className="text-dark underline">
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <strong>Selected Clients</strong>
                <div>IBM</div>
                <div>Apple</div>
            </div>
            <div className="col-md-4">
                <strong>Features</strong>
                <div>
                    <Link to="#" className="text-dark underline">
                        Link1
                    </Link>
                </div>
                <div>
                    <Link to="#" className="text-dark underline">
                        Link2
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
