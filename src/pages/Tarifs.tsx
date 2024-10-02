import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import parc from "../img/parc.jpg";
import bouleau from "../img/bouleau.jpg"
import ModalImage from "react-modal-image";
import "../css/tarifs.css";
import ciel_rose_small from "../img/ciel_rose_small.jpg";
import ciel_rose_small_small from "../img/ciel_rose_small_small.jpg"; // Added small version
import tentes from "../img/tentes.jpg";
import tentes_small from "../img/tentes_small.jpg"; // Added small version
import arbre_couche_soleil from "../img/arbre_couche_soleil.jpg";
import arbre_couche_soleil_small from "../img/arbre_couche_soleil_small.jpg";
import coffe from "../img/coffe.jpg";
import coffe_small from "../img/coffe_small.jpg"; // Added small version
import beau_coucher_soleil from "../img/beau_coucher_soleil.jpg";
import beau_coucher_soleil_small from "../img/beau_coucher_soleil_small.jpg"; // Added small version
import dark from "../img/dark.jpg";
import dark_small from "../img/dark_small.jpg"; // Added small version
import corde_bois from "../img/corde_bois.jpg";
import fish from "../img/fish.jpg";
import fish_small from "../img/fish_small.jpg"; // Added small version
import feu from "../img/feu.jpg";
import feu_small from "../img/feu_small.jpg"; // Added small version
import tentes2 from "../img/tentes2.jpg";
import tentes2_small from "../img/tentes2_small.jpg"; // Added small version
import descente from "../img/descente.jpg";
import descente_small from "../img/descente_small.jpg"; // Added small version
import benoit from "../img/benoit.jpg";
import benoit_small from "../img/benoit_small.jpg"; // Added small version
import coffe2 from "../img/coffe2.jpg";
import coffe2_small from "../img/coffe2_small.jpg"; // Added small version
import cuir from "../img/cuir.jpg";
import cuir_small from "../img/cuir_small.jpg"; // Added small version

function Tarifs() {

  return (
    <div className="text-black">
      <div className="fixed top-0 -z-10 xl:w-[70%] xl:ml-[15%] lg:-top-36 xl:hidden">
        <img src={ciel_rose_small} alt="" className="w-[100%] relative" />
      </div>
      <div className="fixed top-0 -z-10 w-full lg:-top-36 hidden xl:block">
        <img src={tentes} alt="" className="w-[100%] relative" />
      </div>
      <section className="bg-[#E9EFEC] bg-opacity-70 mt-3 self-center  max-w-5xl rounded-t-3xl mx-auto rounded-b-3xl py-5 w-fit">

        <h1 className="self-center text-5xl px-7 ">Nos tarifs</h1>
      </section>
      <section className="my-7 grid grid-cols-12 gap-8  md:w-[50%] md:mx-auto max-md:mx-5 max-md:gap-4">
        <div className="col-span-6 bg-[#6A9C89] bg-opacity-90 rounded-3xl p-5">
          <div className="w-full text-2xl py-4">
            <i className="fa-solid fa-tent"></i>
          </div>
          <div className="text-xl">
            30$/Nuit
          </div>
          <div className="">
            pour un bon temps en famille au bord de l'eau
          </div>
        </div>
        <div className="col-span-6 bg-[#6A9C89] bg-opacity-90 rounded-3xl p-5">
          <div className="w-full text-2xl py-4">
            <i className="fa-solid fa-fire"></i>
          </div>
          <div className="text-xl">
            20$/Livraison
          </div>
          <div>
            pour une modeste quantité de bois (Assez pour une soirée)
          </div>
        </div>
      </section>
      <section className="bg-[#C4DAD2]">
        <h2 className="text-5xl py-4">Petite galerie de photo pour vous donner le gout</h2>
        

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
    <div className="grid gap-4">
        <div>
            <ModalImage
            small={arbre_couche_soleil_small}
            large={arbre_couche_soleil}
            alt="Coucher de soleil"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={dark_small}
            large={dark}
            alt="Tard dans la nuit"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={descente_small}
            large={descente}
            alt="Notre descente a la rivière"
            className="rounded-3xl"
          />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <ModalImage
            small={coffe_small}
            large={coffe}
            alt="Café"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={beau_coucher_soleil_small}
            large={beau_coucher_soleil}
            alt="Coucher de solei"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={cuir_small}
            large={cuir}
            alt="Petit barbecue"
            className="rounded-3xl"
          />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <ModalImage
            small={corde_bois}
            large={corde_bois}
            alt="Du bois que nous livrons"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={tentes2_small}
            large={tentes2}
            alt="Tentes d'amis"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={benoit_small}
            large={benoit}
            alt="Benoit"
            className="rounded-3xl"
          />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <ModalImage
            small={feu_small}
            large={feu}
            alt="Feu"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={fish_small}
            large={fish}
            alt="La pèche est permise avec un permis"
            className="rounded-3xl"
          />
        </div>
        <div>
            <ModalImage
            small={coffe2_small}
            large={coffe2}
            alt="Café"
            className="rounded-3xl"
          />
        </div>
    </div>
</div>

      </section>
      <div className="bg-[#C4DAD2]">Photo prises par notre ami : Luc Paillé</div>
    </div>
  )
}

export default Tarifs;