import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import corde_bois from "../img/corde_bois.jpg";
import parc from "../img/parc.jpg";
import bouleau from "../img/bouleau.jpg"
import ModalImage from "react-modal-image";
import "../css/tarifs.css";

function Tarifs() {

  return (
    <div className="grid grid-cols-12 max-lg:max-w-[100%]  text-black gap-5 pb-32 max-xl:grid-cols-6  slide-right overflow-hidden">
      <h1 className="col-span-12 self-center text-6xl max-xl:col-span-6">Nos tarifs</h1>
      <section className="col-span-8 flex h-fit justify-center align-middle flex-col gap-2 max-xl:col-span-5 max-md:min-h-0 bg-[#6A9C89] bg-opacity-50 px-12 py-6 rounded-r-[250px] slide-in-from-left ">
        <h2 className="text-5xl"><i className="fa-solid fa-tent my-auto mr-2"></i>Terrain</h2>
        <p className="px-8 max-lg:px-4">
          Présentement nous offrons des emplacements varié entre 20$ et 40$ par nuit.
          Prendre note qu'aucun service n'est fournis.
          Il y a un petit terrain de jeux, un foyer et une riviere a votre disposition.
        </p>
        <div className="grid grid-cols-12 gap-3">
        <div className="w-full rounded-2xl overflow-hidden col-span-6">
          <ModalImage
            small={parc}
            large={parc}
            alt="Notre parc !"
          />
        </div>
        <div className="rounded-2xl overflow-hidden col-span-6">
          <ModalImage
            small={bouleau}
            large={bouleau}
            alt="Terrain à coté du parc"
          />
        </div>
        <div className="rounded-2xl overflow-hidden col-span-6 col-start-4">
          <ModalImage
            small={bouleau}
            large={bouleau}
            alt="Terrain à coté du parc"
          />
        </div>
        </div>
        
      </section>
      <section className="col-span-4 justify-center align-middle flex flex-col max-xl:max-h-96 bg-[#6A9C89] bg-opacity-50 px-20 py-6 rounded-l-[250px] slide-in-from-right translate-x-[100%] opacity-0 max-xl:col-span-5 max-xl:col-start-2 max-sm:max-h-[30rem]">
        <h2 className="text-5xl pb-2">Bois <i className="fa-solid fa-fire my-auto mr-2"></i></h2>
        <div className="w-full relative grid rounded-[90px] overflow-hidden max-xl:rounded-[120px] max-md:rounded-[90px] max-h-96">
          <img src={corde_bois} alt="Corde de bois à livrer" className="w-full h-full relative max-xl:top-[-60px] max-sm:top-0" />
          <p className="absolute top-0 w-[100%] h-[100%] bg-[#C4DAD2] bg-opacity-60 py-10 px-1 font-bold text-xl max-xl:p-8 max-sm:pt-9 max-sm:px-2">
            Nous faisons souvent la livraison de bois dans les campings aux alentours.
            Pour un corde de bois texter nous sur facebook ou par courriel au : <br />
            <a href="mailto:info@campinglaliberte.ca">info@campinglaliberte.ca</a> <br />
            Notre prix de base est : 80$</p>
        </div>
      </section>
      
    </div>
  )
}



export default Tarifs;