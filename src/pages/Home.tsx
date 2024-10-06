import bord_ferme from "../img/bord_ferme.jpg";

function Home() {
  return (
    <div className=" text-black h-full w-full flex flex-col">
      <section className="bg-[#E9EFEC] bg-opacity-70 mt-3 self-center w-4/5 max-w-5xl rounded-t-3xl mx-auto rounded-b-3xl py-5">
        <div className="w-full fixed left-0 top-0 -z-10">
          <img src={bord_ferme} alt="" />
        </div>
        <h1 className="">Camping Laliberté</h1>
        <p className="px-5 text-xl">
          Notre camping est un lieu où nature et convivialité se rencontrent. Passionnés
          par les animaux et les bonnes relations, nous vous offrons un environnement propre et accueillant.
        </p>


      </section>
      <section className="bg-[#C4DAD2] relative pt-4 top-11 w-full max-md:top-0 max-md:pt-5 grid grid-cols-12 px-7 mt-2 gap-8 max-sm:grid-cols-6">
        <div className="col-span-6 flex justify-center flex-col">
          <div>
          <h2 className="text-5xl">Nos services</h2>
          <p>
            Nous proposons des terrains locatifs et offrons la vente et la livraison de bois pour
            agrémenter votre séjour. Nous n'offrons aucun autre service.
          </p>
          </div>
         <div>
         <h3 className="pt-1 text-5xl">Notre Engagement</h3>
          <p>Depuis plus d'un an, nous avons la chance de gérer ces terres. Nous visons à les développer avec de nouveaux
            espaces et à maintenir des terrains bien entretenus pour vous offrir un camping de qualité.</p>
         </div>
         
        </div>
        <div className="col-span-6 pb-10">
          <h3 className="text-5xl mb-3">Notre emplacement</h3>
          <iframe className="w-full min-h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974.4138478283007!2d-71.85685220556859!3d46.308674520559265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb87532ff65e82b%3A0x8675a5d65f53eac8!2s617%20Rang%20Saint-Louis%20O%2C%20Lourdes%2C%20QC%20G0S%201T0!5e0!3m2!1sfr!2sca!4v1723419998462!5m2!1sfr!2sca"
            loading="lazy"></iframe>
        </div>
      </section>


    </div>
  )
}



export default Home;