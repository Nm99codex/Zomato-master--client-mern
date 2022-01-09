import React from 'react'

function BrandSm({ image, title }) {
  return (
    <>
      <div className="lg:hidden bg-white rounded-md w-24 md:w-40">
        <div className="w-full shadow-lg h-24 rounded-full md:h-40">
          <img
            className="w-full h-full object-cover object-center rounded-full"
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

function BrandLg({image, title}) {
  return (
    <>
      <div className="hidden lg:block w-64 px-9">
        <div className="w-full h-52 rounded-3xl">
          <img
            className="w-full h-full rounded-3xl object-cover object-center"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="text-xl my-1 text-center font-semibold">{title}</h3>
        </div>
      </div>
    </>
  )
}

function BrandCategory(props) {
  return (
    <>
      <BrandSm {...props} />
      <BrandLg {...props} />
    </>
  )
}

export default BrandCategory
