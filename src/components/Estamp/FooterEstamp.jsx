export const FooterEstamp = () => {
  return (
    <div>
      <img src="/image/triangle.svg" alt="triangle" className="object-fill w-screen h-8"/>
      <div className="bg-black text-white text-left flex justify-center">
        <div className="px-6 flex flex-col gap-2">
          <div>
            <h1 className="text-2xl">กฎการรับ E-Stamp</h1>
            <ul className="text-xl">
              <li>
                แต่ละกิจกรรมสามารถรับ E-Stamp 
                ได้เพียง 1 ครั้งเท่านั้น
              </li>
              <li>
                ต้องทำแบบสอบถาม จากการแสกน qr-code บริเวณสถานที่ที่จัดกิจกรรมให้สำเร็จก่อน
                จึงจะได้รับ E-Stamp เท่านั้น
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">เงื่อนไขการรับของที่ระลึก</h1>
            <ul className="text-xl">
              <li>
                ต้องได้รับ E-Stamp จากกิจกรรมของภาค และส่วนกลางอย่างน้อย 6 ดวง และต้องได้รับ 
                E-Stamp จากกิจกรรม Workshop 
                อย่างน้อย 4 ดวง
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
