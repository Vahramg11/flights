import React from "react";

const Map = ({className}) => {
  console.log(className);
  
  return (
    <div className="flex justify-center items-start flex-col w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9977014.13946947!2d17.686900697142086!3d46.62070362918176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1738072515320!5m2!1sen!2sam"
        width="600"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}

      ></iframe>
    </div>
  );
};

export default Map;
