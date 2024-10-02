export default function footer() {
  return (
    <div className="h-fit footer waveAnimation overflow-visible relative text-black mt-4 max-sm:mt-8">
      <div className="absolute w-full  bg-[#E9EFEC] h-fit bg-opacity-50 bottom-0 ">
        <div className="grid grid-cols-12 w-[90%] mx-auto">
          <div className=" flex flex-col text-start col-span-6">
            <div>Site fait par : Alexis Gauthier</div>
            <a href="https://github.com/DragoQC" target="_blank" className="text-black">
              <i className="fa-brands fa-github pr-2 my-auto"></i>
              Agauthier/<i className="fa-solid fa-dragon pr-2 my-auto"></i>DragoQC
            </a>

          </div>
          <div className="col-span-6 text-end flex flex-col justify-evenly">
            <a href="https://www.facebook.com/CampingLaliberte" target="_blank" className="text-black flex flex-row text-end self-end">
              <i className="fa-brands fa-facebook my-auto pr-2"></i>
              <p>Camping Laliberté</p>
            </a>
            <a href="mailto:info@campinglaliberte.ca" target="_blank" className="text-black flex flex-row text-end self-end">
              <i className="fa-solid fa-envelope my-auto pr-2"></i>
              <p>Camping Laliberté</p>
            </a>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 750 150" preserveAspectRatio="none">
        <path
          className="w1 waveTop"
          d="M-8.74,71.55 C289.78,255.11 349.60,4.47 505.36,34.05 L500.00,150.00 L0.00,150.00 Z"
        />
        <path
          className="w2 waveMiddle"
          d="M-23.42,125.83 C187.63,45.89 299.38,57.73 526.80,123.86 L500.00,150.00 L0.00,150.00 Z"
        />
        <path
          className="w3 waveBottom"
          d="M-23.42,125.83 C172.96,-102.44 217.55,183.06 504.22,55.77 L500.00,150.00 L0.00,150.00 Z"
        />
      </svg>
    </div>
  )
}