const Offer = ({offers}) => {
    console.log(offers);

  return (
    <>
      { offers.map((elm, index) => {
          return (
            <article
              key={index}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl w-[100%]"
            >
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img src={elm.content.image.url} alt="Hotel Photo" />
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">
                    {elm.content.location.name}
                  </h2>
           

                  <div className="mt-3 flex justify-between flex-col justify-end">
                    <p>
                      <span className="text-lg font-bold text-blue-500">
                        {elm.content.flightQuotes.cheapest.price}
                      </span>
                      <span className="text-slate-400 text-sm">/cheapest</span>
                    </p>

                   
                  </div>
                </div>
              </a>
            </article>
          );
        })
    } 
    
    </>
  );
};

export default Offer;
