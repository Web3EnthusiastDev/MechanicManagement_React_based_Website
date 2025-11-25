import image1 from '../Photos/image1.jpg';
import image2 from '../Photos/image2.jpg';
import image3 from '../Photos/image3.jpg';
import image4 from '../Photos/image4.jpg';
import image5 from '../Photos/image5.jpg';
import image6 from '../Photos/image6.jpg';
import image7 from '../Photos/image7.jpg';
import image8 from '../Photos/image8.jpg';
import image9 from '../Photos/image9.jpg';

import '../styles/Fordashboard.css';

const Fordashboard = () => (
  <>
    <h1 style={{ textAlign: 'center'  }}>Admin Dashboard</h1>

    <div className="dashboard-metrics">
      <div id="main-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {[image1, image2, image3].map((img, index) => (
                <div className="col" key={index}>
                  <img src={img} alt={`Image ${index + 1}`} className="carousel-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {[image4, image5, image6].map((img, index) => (
                <div className="col" key={index}>
                  <img src={img} alt={`Image ${index + 4}`} className="carousel-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {[image7, image8, image9].map((img, index) => (
                <div className="col" key={index}>
                  <img src={img} alt={`Image ${index + 7}`} className="carousel-img" />
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </div>
  </>
);

export default Fordashboard;
