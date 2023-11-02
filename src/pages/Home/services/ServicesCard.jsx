import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa6"

const ServicesCard = ({ service }) => {
  const { img, title, price } = service || {};
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="w-full h-60"/>
      </figure>
      <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="text-orange-500 font-semibold text-lg inline-flex items-center justify-between">Price: ${ price} <span><FaArrowRight/></span></p>
      </div>
    </div>
  );
};

export default ServicesCard;
ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
};
