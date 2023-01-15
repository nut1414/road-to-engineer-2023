import { TopEstamp } from "../components/Estamp/TopEstamp"
import { MiddleEstamp } from "../components/Estamp/MiddleEstamp"
import { FooterEstamp } from "../components/Estamp/FooterEstamp"

export const EstampPage = () => {
  return (
    <div className="bg-juicy-100 min-h-screen flex flex-col justify-between scrollbar-thin ">
      <TopEstamp />
      <MiddleEstamp />
      <FooterEstamp />
    </div>
  )
}
