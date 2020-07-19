import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get, map, isEmpty } from 'lodash';

class VidSlide extends Component {
    static propTypes = {
        url: PropTypes.string,
        index: PropTypes.number
    };
    render() {
        let className = 'carousel-item';
        if (this.props.index === 0) {
            className = 'carousel-item active';
        }
        return (
            <div className={className}>
                <div className="embed-responsive embed-responsive-16by9">
                    <video autoPlay loop muted playsInline className="embed-responsive-item">
                        <source src={this.props.url} />
                        Your browser does not support HTML5 video tag.
                    </video>
                </div>
            </div>
        );
    }
}

class ImgSlide extends Component {
    static propTypes = {
        url: PropTypes.string,
        index: PropTypes.number
    };
    render() {
        let className = 'carousel-item';
        if (this.props.index === 0) {
            className = 'carousel-item active';
        }
        return (
            <div className={className}>
                <img src={this.props.url} alt="" />
            </div>
        );
    }
}

class Carousel extends Component {
    static propTypes = {
        attachments: PropTypes.array,
        video: PropTypes.string,
        id: PropTypes.string,
        image: PropTypes.string
    };

    render() {
        const { attachments, video, id, image } = this.props;
        const carouselId = `carousel${id}`;
        const carouselIdRef = `#${carouselId}`;

        if (video && !isEmpty(attachments)) {
            return (
                <div className="carousel slide" id={carouselId} data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target={carouselIdRef} data-slide-to="0" className="active"></li>
                        <li data-target={carouselIdRef} data-slide-to="1"></li>
                        {map(attachments, (attachment, index) => {
                            return <li data-target={carouselIdRef} data-slide-to={index + 2}></li>;
                        })}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <VidSlide url={video} index={0} />
                        <ImgSlide url={image} index={1} />
                        {map(attachments, (attachment, index) => {
                            return <ImgSlide key={index} index={index + 2} url={attachment} />;
                        })}
                    </div>
                    <a href={carouselIdRef} className="carousel-control-prev" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a href={carouselIdRef} className="carousel-control-next" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            );
        } else if (video) {
            return (
                <div className="carousel slide" id={carouselId}>
                    <ol className="carousel-indicators">
                        <li data-target={carouselIdRef} data-slide-to="0" className="active"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <VidSlide url={video} index={0} />
                    </div>
                    <a href={carouselIdRef} className="left carousel-control" data-slide="prev">
                        <span className="icon-prev"></span>
                    </a>
                    <a href={carouselIdRef} className="right carousel-control" data-slide="next">
                        <span className="icon-next"></span>
                    </a>
                </div>
            );
        } else if (!isEmpty(attachments)) {
            return (
                <div className="carousel slide" id={carouselId}>
                    <ol className="carousel-indicators">
                        <li data-target={carouselIdRef} data-slide-to="0" className="active"></li>
                        {map(attachments, (attachment, index) => {
                            return (
                                <li
                                    key={index + 1}
                                    data-target={carouselIdRef}
                                    data-slide-to={index + 1}
                                ></li>
                            );
                        })}
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <ImgSlide url={image} index={0} />
                        {map(attachments, (attachment, index) => {
                            return <ImgSlide key={index} index={index + 1} url={attachment} />;
                        })}
                    </div>
                    <a href={carouselIdRef} className="left carousel-control" data-slide="prev">
                        <span className="icon-prev"></span>
                    </a>
                    <a href={carouselIdRef} className="right carousel-control" data-slide="next">
                        <span className="icon-next"></span>
                    </a>
                </div>
            );
        } else {
            return (
                <div className="carousel slide" id={carouselId}>
                    <div className="carousel-inner" role="listbox">
                        <ImgSlide url={image} index={0} />
                    </div>
                </div>
            );
        }
    }
}

class Featured extends Component {
    static propTypes = {
        id: PropTypes.string,
        video: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string
    };
    render() {
        const { id, video, image, title } = this.props;
        if (video) {
            return (
                <figure className="figure">
                    <div className="embed-responsive embed-responsive-16by9">
                        <video
                            className="embed-responsive-item"
                            data-toggle="modal"
                            data-target={`#${id}`}
                            loading="lazy"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={image}
                            alt={`${title} preview`}
                        >
                            <source src={video} />
                            <img
                                className="img-fluid"
                                data-toggle="modal"
                                data-target={`#${id}`}
                                src={image}
                                loading="lazy"
                                alt={`${title} preview`}
                            />
                        </video>
                    </div>
                    <figcaption className="figure-caption">{title}</figcaption>
                </figure>
            );
        } else {
            return (
                <figure className="figure">
                    <img
                        className="img-fluid"
                        data-toggle="modal"
                        data-target={`#${id}`}
                        src={image}
                        loading="lazy"
                        alt={`${title} preview`}
                    />
                    <figcaption className="figure-caption">{title}</figcaption>
                </figure>
            );
        }
    }
}

class DribbleShot extends Component {
    static propTypes = {
        dribbbleShot: PropTypes.any,
        id: PropTypes.number
    };
    render() {
        const id = `shot-${get(this.props, 'id')}`;
        const { title, description, image, video, attachments } = get(this.props, 'dribbbleShot', {});
        return (
            <div className="section shot">
                <Featured id={id} image={image} video={video} title={title} />

                <div
                    className="modal fade "
                    tabIndex="-1"
                    role="dialog"
                    id={id}
                    aria-labelledby={title}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content bg-white">
                            <div className="modal-header">
                                <strong className="modal-title">{title}</strong>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Carousel id={id} attachments={attachments} video={video} image={image} />
                            </div>
                            <div
                                className="modal-body"
                                dangerouslySetInnerHTML={{ __html: description }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Dribbble extends Component {
    static propTypes = {
        dribbbleShots: PropTypes.any,
        isLoading: PropTypes.bool,
        error: PropTypes.any
    };

    render() {
        if (get(this.props, 'isLoading')) {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        } else if (get(this.props, 'dribbbleShots')) {
            return (
                <div className="container section shots">
                    {map(get(this.props, 'dribbbleShots'), (dribbbleShot, index) => {
                        return <DribbleShot key={index} id={index} dribbbleShot={dribbbleShot} />;
                    })}
                </div>
            );
        } else {
            return (
                <div className="alert alert-danger" role="alert">
                    An error occurred: {get(this.props, 'error', 'Unable to determine the state.')}
                </div>
            );
        }
    }
}
