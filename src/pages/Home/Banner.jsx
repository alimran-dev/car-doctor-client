import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
// import img5 from "../../assets/images/banner/5.jpg";
// import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[550px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute bg-black bg-opacity-30 w-full h-full rounded-lg">
          <div className="absolute text-white w-1/2 transform -translate-y-1/2 top-1/2 left-10 space-y-4">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-orange-500 text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-orange-500 mr-5">Discover More</button>
            <button className="text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
              <img src={img2} className="w-full rounded-lg" />
              <div className="absolute bg-black bg-opacity-30 w-full h-full rounded-lg">
          <div className="absolute text-white w-1/2 transform -translate-y-1/2 top-1/2 left-10 space-y-4">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-orange-500 text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-orange-500 mr-5">Discover More</button>
            <button className="text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
              <img src={img3} className="w-full rounded-lg" />
              <div className="absolute bg-black bg-opacity-30 w-full h-full rounded-lg">
          <div className="absolute text-white w-1/2 transform -translate-y-1/2 top-1/2 left-10 space-y-4">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-orange-500 text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-orange-500 mr-5">Discover More</button>
            <button className="text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
              <img src={img4} className="w-full rounded-lg" />
              <div className="absolute bg-black bg-opacity-30 w-full h-full rounded-lg">
          <div className="absolute text-white w-1/2 transform -translate-y-1/2 top-1/2 left-10 space-y-4">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-orange-500 text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-orange-500 mr-5">Discover More</button>
            <button className="text-lg font-semibold py-1.5 px-3 rounded-md border-2 border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
