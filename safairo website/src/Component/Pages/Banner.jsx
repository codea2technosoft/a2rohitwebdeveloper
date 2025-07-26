import React from 'react';
import LightGallery from 'lightgallery/react';

// LightGallery CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// LightGallery Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Image imports
import image1 from '../../assets/images/banner/image1.jpg';
import image2 from '../../assets/images/banner/image2.jpg';
import image3 from '../../assets/images/banner/image3.jpg';
import image4 from '../../assets/images/banner/image4.jpg';
import image5 from '../../assets/images/banner/image5.jpg';
import image6 from '../../assets/images/banner/image6.jpg';

function Banner() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <div className="App">
            <div className="fancygallery py-5">
                <div className="container_custum container">
                    <div className="heading_design text-center mb-4">
                        <h3>Safairo – Where Clean Meets Green</h3>
                        <p>Eco-Friendly Car Washes | Shine with a Clear Conscience</p>
                    </div>

                    <LightGallery
    onInit={onInit}
    speed={500}
    plugins={[lgThumbnail, lgZoom]}
    elementClassNames="row"
    className="row" 
>
    {images.map((img, index) => (
        <a
            href={img}
            key={index}
            className="col-md-4 col-sm-6 col-6 mb-4"
            style={{ display: 'block' }}
        >
            <img
                src={img}
                alt={`img${index + 1}`}
                className="img-fluid rounded shadow-sm w-100"
                style={{ cursor: 'pointer' }}
            />
        </a>
    ))}
</LightGallery>

                </div>
            </div>
        </div>
    );
}

export default Banner;
