const Part = ({ title, stamps, type }) => {
  return (
    <>
      <div className="h-fit">
        <h1 className="text-center text-3xl text-bloodred-300 font-bold py-2">
          {title}
        </h1>
        <div className="grid grid-cols-4 gap-4 h-full">
          {stamps.map((e) => {
            return (
              <>
                <div>
                  <div className="relative flex justify-center items-center h-20">
                    {
                      (type === "exhibition" &&
                        <>
                          <img src="/image/stampframe.svg" alt="" className="absolute h-16" />
                          <h2 className="absolute text-bloodred-300 font-bold ">{e}</h2>
                        </>
                      )
                      ||
                      (
                        type === "workshop" &&
                        <>
                          <img src="/image/stampframews.svg" alt="" className="absolute h-16" />
                          <h2 className="absolute text-[0.75rem] sm:text-[1rem] text-white bottom-[57%] sm:bottom-[56%] ">{e}</h2>
                        </>
                      )
                    }
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

const stamps1 = [
  "RC",
  "CPE",
  "CE",
  "ME",
  "PE",
  "EE",
]

export const Carousel = ({ items }) => {

  return (
    <div className="container mx-auto bg-white h-256 w-full mb-6 rounded-2xl p-6 md:p-10 flex flex-col shadow-lg shadow-black/50 text-gray-500">
      <div className="carousel w-full h-fit">
        <div id="item1" className="carousel-item w-full h-fit flex flex-col">
          <Part title="ซุ้มกิจกรรม" stamps={stamps1} type="exhibition" />
          <Part title="ซุ้มกิจกรรม" stamps={stamps1} type="workshop" />
          {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
        </div>
        <div id="item2" className="carousel-item w-full">
          {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
        </div>
        <div id="item3" className="carousel-item w-full">
          {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
        </div>
        <div id="item4" className="carousel-item w-full">
          {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs"></a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>

  )
}
