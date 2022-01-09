import React from "react";

function DeliverySmCard({ image, title }) {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-40">
        <div className="w-full h-24 rounded-full">
          <img
            className="w-full h-full object-cover object-center rounded-t-md"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-semibold md:text-lg">{title}</h3>
        </div>
      </div>
    </>
  );
}

function DeliveryLgCard({ image, title }) {
  return (
    <>
      <div className="hidden lg:block w-64 px-9">
        <div className="w-full h-52 rounded-3xl">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-xl my-1 text-center font-semibold">{title}</h3>
        </div>
      </div>
    </>
  );
}

function DeliveryCategory(props) {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
}

export default DeliveryCategory;

// {"_id":
// {"$oid":"61619f4fa8bb5a753a157e5c"},
// "name":"Lazeez Affaire",
// "city":"NCR",
// "address":"Chanakyapuri, New Delhi",
// "mapLocation":"28.6581637791,77.1935084090",
// "cuisine":["North Indian","Mughlai"],
// "restaurantTimings":"12noon - 10pm",
// "contactNumber":{"$numberLong":["+919899330055", +919999123404]},
// "website":"dominos.com",
// "popularDishes":["Farmhouse","Veg Extravaganza","Garlic Breadsticks"],
// "averageCost":{"$numberInt":"300"},
// "amenties":["Parking","AC","Rest Room","Free WIFI"],
// "menuImages":{"$oid":"61c2379dbeec652ad4fddb8f"},
// "menu":{"$oid":"6166f8b0db8b2b72dd9de1d4"},
// "reviews":{"$oid":"61619f4fa8bb5a753a157e5c"},
// "photos":{"$oid":"61c2379dbeec652ad4fddb8f"}}