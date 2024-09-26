import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "../css/contact.css";
import { render } from "react-dom";


function Contact() {
  const [form_data, set_form_data] = useState({
    fn: "",
    ln: "",
    email: "",
    phone: "",
    comment:""
  })
  const [form_errors, set_form_errors] = useState({
    fn: "",
    ln: "",
    email: "",
    phone: "",
    comment: ""
  });

  function handle_change(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
    set_form_data({
      ...form_data,
      [event.target.id]: event.target.value,  // Dynamically update form data based on input id
    });
  }
  function render_error(error_message:string|undefined){
    if(error_message){
      return <div className="text-red-600 ">{error_message}<span className="text-red-400 animate-pulse whitespace-nowrap"> !</span></div>
    }else{
      return null;
    }
  }
  function validate_form(){
    let is_valid: boolean = true;
    let error_list:any = {};
    if(!form_data.fn.trim()){
      error_list.fn = "Prénom requis"
    }
    if(!form_data.ln.trim()){
      error_list.ln = "Nom requis"
    }
    if(!form_data.phone.trim()){
      error_list.phone = "Le numéro de téléphone est requis"
    }
    if(!form_data.email.trim()){
      error_list.email = "Le courriel est requis pour que nous puissions communiquer avec vous"
    }else if (!/\S+@\S+\.\S+/.test(form_data.email)) {
      error_list.email = "Le courriel n'a pas la bonne forme.";
    }
    if(!form_data.comment.trim()){
      error_list.comment = "Laissez nous la raison de votre demande"
    }
    if (Object.keys(error_list).length > 0) {
      set_form_errors(error_list);
      return false; 
    } else {
      set_form_errors({
        fn: "",
        ln: "",
        email: "",
        phone: "",
        comment: "",
      });
      return true;
    }
  }
  function handle_submit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(validate_form()){

    }
  }

  return (
    <div className="text-black">
      <div className="w-[80%] mx-auto xl:w-[70%] lg:w-[60%] pb-3">
        <h1>Nous joindre</h1>
        <p>La meilleure facon de nous joindre est soit par courriel : info@campinglaliberte.ca ou sur facebook</p>
        <p>Pour toutes demande de réservations ou de bois vous pouvez passer par se formulaire et nous vous répondrons par courriel sous les plus brefs délais</p>
      </div>

      <section className="w-[90%] mx-auto bg-[#E9EFEC] bg-opacity-60 p-4 gap-3 rounded-xl xl:w-[80%] lg:w-[70%] ">
        <form action="" className=" grid grid-cols-12 row-span-3 gap-3 justify-start w-full relative" onSubmit={handle_submit}>
          <div className="input_container flex flex-col col-span-5 h-fit row-start-1 text-start">
            <label htmlFor="fn">Prénom<span className="text-red-600">*</span> : </label>
            <input type="text" className="fn" id="fn" value={form_data.fn} onChange={handle_change}/>
            {render_error(form_errors.fn)}
          </div>

          <div className="input_container row-start-2 col-span-5 text-start">
            <label htmlFor="ln">Nom<span className="text-red-600">*</span> : </label>
            <input type="text" className="ln" id="ln" value={form_data.ln} onChange={handle_change}/>
            {render_error(form_errors.ln)}
          </div>

          <div className="input_container row-start-3 col-span-5 text-start col-start-1">
            <label htmlFor="phone">Numéro de <span className="whitespace-nowrap">téléphone<span className="text-red-600">*</span> : </span></label>
            <input type="text" className="phone" id="phone" value={form_data.phone} onChange={handle_change}/>
            {render_error(form_errors.phone)}
          </div>

          <div className="input_container row-start-2 col-start-6 col-span-2 row-span-2 max-md:row-start-4 max-md:col-start-8 max-md:col-span-4">
            <div>Raison de la demande</div>
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="wood" className="text-end">Bois <i className="fa-solid fa-fire my-auto mr-2"></i></label>
                <input type="checkbox" className="wood" id="wood" />
              </div>
              <div>
                <label htmlFor="rent" className="text-end">Location <i className="fa-solid fa-tents my-auto mr-2"></i></label>
                <input type="checkbox" className="rent" id="rent" />
              </div>
            </div>
          </div>


          <div className="input_container row-start-4 col-span-6 text-start">
            <label htmlFor="email">Courriel<span className="text-red-600">*</span> : </label>
            <input type="text" className="email" id="email" value={form_data.email} onChange={handle_change}/>
            {render_error(form_errors.email)}
          </div>

          <div className="input_container row-start-5 col-span-6 text-start max-md:col-span-7 col-start-1">
            <label htmlFor="comment">Commentaire<span className="text-red-600">*</span> : </label>
            <textarea name="comment" className="min-h-32" id="comment" value={form_data.comment} onChange={handle_change}></textarea>
            {render_error(form_errors.comment)}
          </div>

          <div className="col-span-5 col-start-8 row-start-1 row-span-3 max-md:col-start-7 max-md:col-span-6 bg-[#C4DAD2] p-4 rounded-xl">
            <div className="">
              <a href="mailto:info@campinglaliberte.ca" className="flex flex-row gap-5 align-middle text-center text-xl">
                <i className="fa-solid fa-envelope my-auto"></i>
                <h2>info@campinglaliberte.ca</h2>
              </a>
              <p className="lg:my-2">Pour toutes informations écrivez nous a ce courriel</p>
            </div>
            <div className="">
              <a href="https://www.facebook.com/CampingLaliberte?locale=fr_CA" className="flex flex-row gap-5 align-middle text-center text-xl">
                <i className="fa-brands fa-facebook my-auto"></i>
                <h2 className="lg:my-2">Notre page Facebook</h2>
              </a>
              <p>Suivez notre actualité sur Facebook</p>
            </div>
            <div className="">
              <a href="https://maps.app.goo.gl/A7PNrHLB4qFP3sq38" className="flex flex-row gap-5 align-middle text-center text-xl">
                <i className="fa-solid fa-location-dot my-auto"></i>
                <h2>Notre localisation</h2>
              </a>
              <p className="lg:my-2">617 rang saint-louis ouest, lourdes QC</p>
            </div>

          </div>
          <button className="col-start-11 row-start-4 col-span-2 h-fit max-md:row-start-6 max-md:col-start-5 max-md:col-span-4 md:absolute md:bottom-0 md:right-0">Soumettre</button>
        </form>


        <div className="w-full col-span-12">
          <h3 className="text-4xl py-4">Retrouvez nous sur google</h3>
          <iframe className="w-full min-h-[400px]  rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974.4138478283007!2d-71.85685220556859!3d46.308674520559265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb87532ff65e82b%3A0x8675a5d65f53eac8!2s617%20Rang%20Saint-Louis%20O%2C%20Lourdes%2C%20QC%20G0S%201T0!5e0!3m2!1sfr!2sca!4v1723419998462!5m2!1sfr!2sca"
            loading="lazy"></iframe>
        </div>

      </section>
    </div>
  )
}



export default Contact;