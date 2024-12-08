import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap flex-col lg:flex-row">
        <div className="lg:w-2/3 w-full h-96 lg:h-auto bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.3323626377897!2d32.83191366963225!3d39.978742398219616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34c3ddd100001%3A0x16df0316a7200b69!2zRXRsaWssIEvEsXZyxLFtbMSxIENkLiBObzoyMy9BLCAwNjAxMCBLZcOnacO2cmVuL0Fua2FyYQ!5e0!3m2!1str!2str!4v1733662810689!5m2!1str!2str"
          ></iframe>
          <div className="bg-white lg:relative flex flex-wrap py-6 rounded shadow-lg">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Adres
              </h2>
              <p className="mt-1">
                Etlik, Kıvrımlı Cd. No:23/A, 06010 Keçiören/Ankara
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-3 w-full">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:example@email.com"
                className="text-indigo-500 leading-relaxed"
              >
                info@gohayat.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">0538 922 36 02</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3  bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            İletişim
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Bizimle iletişime geçmek için aşağıdaki formu doldurup gönder
            butonuna basmanız yeterli !
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Button variant={"wfullButton"}>Gönder</Button>
        </div>
      </div>
    </section>
  );
}

export default page;
