import { Carousel } from "./Carousel"

export const MiddleEstamp = () => {
  return (
    <div className="p-2 bg-juicy-100 grow flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl lg:text-4xl font-bold tracking-wide">My E-Stamp</h1>
      <Carousel/>
    </div>
  )
}
