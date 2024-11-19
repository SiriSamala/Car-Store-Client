import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const NewCarsCarousel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="h-[75vh] object-cover" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg" />
        </div>
        <div>
          <img className="h-[75vh] object-cover" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar-ROXX/8438/1723692413550/front-view-118.jpg" />
        </div>
        <div>
          <img className="h-[75vh] object-cover" src="https://media.zigcdn.com/media/model/2024/Aug/model-extimg-1475723531_600x400.jpg" />
        </div>
        <div>
          <img className="h-[75vh] object-cover" src="https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-6-1723789715.jpg?width=420&q=60?w=1080&q=60" />
        </div>
      </Carousel>

    </>
  )
}

export default NewCarsCarousel