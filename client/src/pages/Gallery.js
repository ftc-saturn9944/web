import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryImage from '../components/GalleryImage';
import {Link, animateScroll} from "react-scroll";
import '../scss/Gallery.scss';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageDir: "/images/gallery/",
            imageInfo: null,
            images: {},
            renderLimit: 20,
            renderCount: 0,
            imageLayout: null
        };
    }

    recieveImages() {
        fetch(this.state.imageDir + "index.json").then((res) => {
            return res.json()
        }).then((info)=> {
            if (!info) setTimeout(this.recieveImages.bind(this), 2000);
            this.state.imageInfo = info;
            console.log(info);
            let imgs = [];
            for (let season in info.season) {
                console.log(info.season[season].seasonName);
                console.log(info.season[season].files);
                for (let file in info.season[season].files) {
                    let src = "/images/gallery/" + info.season[season].folderName + "/" + info.season[season].files[file];
                    let imgsTemp = this.state.images;
                    if(imgsTemp[season]){ 
                        imgsTemp[season].push({src: src});
                    } else {
                        imgsTemp[season] = [{src: src}];
                    }
                    this.setState({images: imgsTemp});
                }
            }
            this.setState({imageLayout: this.createImageLayout()});
        });
    }
    totalImageCount() {
        let count = 0;
        console.log(this.state.images)
        for (let season in this.state.images) {
            count += this.state.images[season].length;
        }
        return count;
    }
    onScroll() {
        if (document.querySelector('.gallery').getBoundingClientRect().bottom <= window.innerHeight + 200) {
            if (this.state.renderLimit + 10 <= this.totalImageCount()) {
                this.setState({renderLimit: this.state.renderLimit+10});
            } else {
                this.setState({renderLimit: this.totalImageCount()});
            }
            this.forceUpdate();
            console.log(this.state.renderLimit);
        }
    }

    createSeasonImageLayout(season, imgSeasonKey) {
        
        return <section>
                <div className="row">
                    <div className="col-12 d-flex">
                        <h2 class="display-4 mx-auto text-muted">{season.seasonName}: {season.period}</h2>
                    </div>
                </div>
                { (this.state.images[imgSeasonKey] && this.state.images[imgSeasonKey].length > 0) ?
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                    {this.state.images[imgSeasonKey] ? this.state.images[imgSeasonKey].map((img) => {
                        this.setState({renderCount: this.state.renderCount+1});
                        return <GalleryImage src={img.src} id={this.state.renderCount} renderLimit={this.state.renderLimit}></GalleryImage>
                    }) : null}
                    </div>
                </div> : <div className="row">
                    <div className="col-12 d-flex">
                        <p class="lead mx-auto text-muted">
                            Sorry, there are no images available from this season.
                        </p>
                    </div>
                </div>
                }
                </section>
    }

    createImageLayout() {
        let imageLayoutsPerSeason = [];
        for (let season in this.state.imageInfo.season) {
            imageLayoutsPerSeason.push(this.createSeasonImageLayout(this.state.imageInfo.season[season], season));
        }
        return imageLayoutsPerSeason;
    }

    componentDidMount() { //After component loads, start loading the images (so page doesnt hang)
        this.recieveImages();
        document.addEventListener('scroll', this.onScroll.bind(this));
        
    }

    render() {

        let currentRenderCount = 0;

        let renderThis = <div className="App">
            <Navbar page="gallery"></Navbar>
            <div className="container-fluid gallery">
                <div className="row">
                    <div className="col-12 d-flex">
                        <h1 class="display-2 mx-auto">Gallery</h1>
                    </div>
                </div>
                    <section>
                    <div className="row">
                        <div className="col-12 d-flex">
                            <h2 class="display-4 mx-auto text-muted">{
                            this.state.imageInfo ? this.state.imageInfo.season["skystone"].seasonName : "Loading..."
                            }: {
                            this.state.imageInfo ? this.state.imageInfo.season["skystone"].period : "Loading..."
                            }</h2>
                        </div>
                    </div>
                    { (this.state.images["skystone"] && this.state.images["skystone"].length > 0) ?
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                        {this.state.images["skystone"] ? this.state.images["skystone"].map((img) => {
                            currentRenderCount++;
                            return <GalleryImage src={img.src} id={currentRenderCount} renderLimit={this.state.renderLimit}></GalleryImage>
                        }) : null}
                        </div>
                    </div> : <div className="row">
                        <div className="col-12 d-flex">
                            <p class="lead mx-auto text-muted">
                                Sorry, there are no images available from this season.
                            </p>
                        </div>
                    </div>
                    }
                    </section>
                    <section>
                <div className="row">
                    <div className="col-12 d-flex">
                    <h2 class="display-4 mx-auto text-muted">{
                            this.state.imageInfo ? this.state.imageInfo.season["roverRuckus"].seasonName : "Loading..."
                            }: {
                            this.state.imageInfo ? this.state.imageInfo.season["roverRuckus"].period : "Loading..."
                            }</h2>
                    </div>
                </div>
                { (this.state.images["roverRuckus"] && this.state.images["roverRuckus"].length > 0) ?
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                    {this.state.images["roverRuckus"] ? this.state.images["roverRuckus"].map((img) => {
                        currentRenderCount++;
                        return <GalleryImage src={img.src} id={currentRenderCount} renderLimit={this.state.renderLimit}></GalleryImage>
                    }) : null}
                    </div>
                </div> : <div className="row">
                    <div className="col-12 d-flex">
                        <p class="lead mx-auto text-muted">
                            Sorry, there are no images available from this season.
                        </p>
                    </div>
                </div>
                }
                </section>
                <section>
                <div className="row">
                    <div className="col-12 d-flex">
                    <h2 class="display-4 mx-auto text-muted">{
                            this.state.imageInfo ? this.state.imageInfo.season["relicRecovery"].seasonName : "Loading..."
                            }: {
                            this.state.imageInfo ? this.state.imageInfo.season["relicRecovery"].period : "Loading..."
                            }</h2>
                    </div>
                </div>
                { (this.state.images["relicRecovery"] && this.state.images["relicRecovery"].length > 0) ?
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                    {this.state.images["relicRecovery"] ? this.state.images["relicRecovery"].map((img) => {
                        currentRenderCount++;
                        return <GalleryImage src={img.src} id={currentRenderCount} renderLimit={this.state.renderLimit}></GalleryImage>
                    }) : null}
                    </div>
                </div> : <div className="row">
                    <div className="col-12 d-flex">
                        <p class="lead mx-auto text-muted">
                            Sorry, there are no images available from this season.
                        </p>
                    </div>
                </div>
                }
                </section>
                
            </div>
            <Footer withSaturn={false}></Footer>
        </div>;
        return renderThis;
    }
}

export default Gallery;