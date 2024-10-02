import {useState } from "react";
import "../css/contact.css";

import { email_info } from "../gitignored/email_info"
import emailjs from "@emailjs/browser";


function Contact() {
  const [button_text, set_button_text] = useState<string | JSX.Element>("Soumettre");
  const is_submited = localStorage.getItem("is_submited");

  console.log(is_submited)
  const [form_data, set_form_data] = useState({
    fn: "",
    ln: "",
    email: "",
    phone: "",
    comment: ""
  })
  const [form_errors, set_form_errors] = useState({
    fn: "",
    ln: "",
    email: "",
    phone: "",
    comment: ""
  });

  function handle_change(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    set_form_data({
      ...form_data,
      [event.target.id]: event.target.value,  // Dynamically update form data based on input id
    });
  }
  function render_error(error_message: string | undefined) {
    if (error_message) {
      return <div className="text-red-600 ">{error_message}<span className="text-red-400 animate-pulse whitespace-nowrap"> !</span></div>
    } else {
      return null;
    }
  }
  function validate_form() {
    let error_list: any = {};
    if (!form_data.fn.trim()) {
      error_list.fn = "Prénom requis"
    }
    if (!form_data.ln.trim()) {
      error_list.ln = "Nom requis"
    }
    if (!form_data.phone.trim()) {
      error_list.phone = "Le numéro de téléphone est requis"
    }
    if (!form_data.email.trim()) {
      error_list.email = "Le courriel est requis pour que nous puissions communiquer avec vous"
    } else if (!/\S+@\S+\.\S+/.test(form_data.email)) {
      error_list.email = "Le courriel n'a pas la bonne forme.";
    }
    if (!form_data.comment.trim()) {
      error_list.comment = "Laissez nous la raison de votre demande"
    }
    if (Object.keys(error_list).length > 0) {
      set_form_errors(error_list);
      set_button_text(
        <div>
          Réesseyer
        </div>
      )
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
  function handle_submit(event: React.FormEvent<HTMLFormElement>) {
    set_button_text(
      <div className="whitespace-nowrap">
        Soumission <i className='fa-solid fa-spinner animate-spin'></i>
      </div>
    )
    event.preventDefault();

    if (is_submited === "true") {
      alert("Nous sommes limité au niveau de l'envoi de courriel. S'il vous plait attendre une réponse par courriel")
      return
    }
    if (validate_form()) {
      emailjs.send(
        email_info.service_id,
        email_info.template_id,
        form_data,
        email_info.public_key
      )
        .then((response) => {
          console.log("Email sent successfully", response.status, response.text);
          localStorage.setItem("is_submited", "true")
          set_button_text(
            <div className="whitespace-nowrap">
              Envoyé
            </div>
          )
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  }

  return (
    <div className="text-black">
      <div className="w-[80%] mx-auto lg:w-[70%] xl:w-[60%] pb-3">
        <h1>Nous joindre</h1>
        <p>La meilleure facon de nous joindre est soit par courriel : info@campinglaliberte.ca ou sur facebook</p>
        <p>Pour toute demande de réservation ou de bois vous pouvez passer par ce formulaire et nous vous répondrons par courriel dans les plus brefs délais</p>
      </div>

      <section className="w-[90%] mx-auto bg-[#E9EFEC] bg-opacity-60 p-4 gap-3 rounded-xl  lg:w-[70%] xl:w-[60%]">
        <form action="" className=" grid grid-cols-12 row-span-3 gap-3 justify-start w-full relative" onSubmit={handle_submit}>
          <div className="input_container flex flex-col col-span-5 h-fit row-start-1 text-start max-sm:row-start-2 max-sm:col-span-12">
            <label htmlFor="fn" className="amatic text-2xl">Prénom<span className="text-red-600">*</span> : </label>
            <input type="text" className="fn" id="fn" value={form_data.fn} onChange={handle_change} />
            {render_error(form_errors.fn)}
          </div>

          <div className="input_container row-start-2 col-span-5 text-start max-sm:row-start-3 max-sm:col-span-12">
            <label htmlFor="ln" className="amatic text-2xl">Nom<span className="text-red-600">*</span> : </label>
            <input type="text" className="ln" id="ln" value={form_data.ln} onChange={handle_change} />
            {render_error(form_errors.ln)}
          </div>

          <div className="input_container row-start-3 col-span-5 text-start col-start-1 max-sm:col-span-12 max-sm:row-start-4 max-sm:col-start-1">
            <label htmlFor="phone" className="amatic text-2xl">Numéro de <span className="whitespace-nowrap amatic">téléphone<span className="text-red-600">*</span> : </span></label>
            <input type="text" className="phone" id="phone" value={form_data.phone} onChange={handle_change} />
            {render_error(form_errors.phone)}
          </div>

          <div className="input_container row-start-5 col-start-1 col-span-5 max-sm:col-start-1 max-sm:col-span-12 max-sm:row-start-7">
            <div className="text-start amatic text-2xl">Raison de la demande :</div>
            <div className="flex flex-row gap-2">
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


          <div className="input_container row-start-4 col-span-5 text-start max-sm:col-start-1 max-sm:col-span-12 max-sm:row-start-6">
            <label htmlFor="email" className="amatic text-2xl">Courriel<span className="text-red-600">*</span> : </label>
            <input type="text" className="email" id="email" value={form_data.email} onChange={handle_change} />
            {render_error(form_errors.email)}
          </div>

          <div className="input_container row-start-6 col-span-6 text-start max-md:col-span-7 col-start-1 max-sm:col-span-12 max-sm:col-start-1 max-sm:row-start-9">
            <label htmlFor="comment" className="amatic text-2xl">Commentaire<span className="text-red-600">*</span> : </label>
            <textarea name="comment" className="min-h-32" id="comment" value={form_data.comment} onChange={handle_change}></textarea>
            {render_error(form_errors.comment)}
          </div>

          <div className="col-span-6 col-start-7 row-start-1 row-span-4 justify-evenly flex flex-col max-md:col-start-7 max-md:col-span-6 bg-[#C4DAD2] p-4 rounded-xl max-sm:row-start-1 max-sm:col-span-12 max-sm:col-start-1 max-sm:row-span-1">
            <div className="">
              <a href="mailto:info@campinglaliberte.ca" className="flex flex-row gap-5 align-middle text-center text-xl">
                <i className="fa-solid fa-envelope my-auto"></i>
                <h2 className="text-2xl amatic">info@campinglaliberte.ca</h2>
              </a>
              <p className="lg:my-2">Pour toutes informations écrivez nous a ce courriel</p>
            </div>
            <div className="">
              <a href="https://www.facebook.com/CampingLaliberte?locale=fr_CA" className="flex flex-row gap-5 align-middle text-center text-xl">
                <i className="fa-brands fa-facebook my-auto"></i>
                <h2 className="lg:my-2 text-2xl amatic">Notre page Facebook</h2>
              </a>
              <p>Suivez notre actualité sur Facebook</p>
            </div>
            <div className="">
              <a href="https://maps.app.goo.gl/A7PNrHLB4qFP3sq38" className="flex flex-row gap-5 align-middle text-center text-xl">
                <i className="fa-solid fa-location-dot my-auto"></i>
                <h2 className="text-2xl amatic">Notre localisation</h2>
              </a>
              <p className="lg:my-2">617 rang saint-louis ouest, lourdes QC</p>
            </div>

          </div>
          <button className="col-start-7 self-end row-start-6 col-span-2 h-fit max-md:row-start-6 max-md:col-start-8 max-md:col-span-5  max-sm:col-span-12 max-sm:row-start-10" id="submit" disabled={JSON.parse(is_submited || "false") === true}>{JSON.parse(is_submited || "false") === true ? (<div className="whitespace-nowrap animate-pulse">Envoyé!</div>) : button_text}</button>
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