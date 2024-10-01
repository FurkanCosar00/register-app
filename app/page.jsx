"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <>
      <form action={async (formData) => {
        // console.log(formData);
        // const formObj = Object.fromEntries(formData);
        // console.log(formObj);

        // const response = await BasvuruYapAksiyonu(formObj);
        // console.log(response);

        // if (response?.errors) {
        //   setErrorsState({
        //     errors: response?.errors
        //   })
        //   return;
        // }

        setStep(prev => prev + 1)


      }} className="form-group">

        <input type="hidden" name="step" value={step} />
        {step === 1 && (
          <>
            <label htmlFor="name">Ad:</label>
            <input type="text" name="name" id="name" />
            <br />

            <label htmlFor="surName">Soyad:</label>
            <input type="text" name="surName" id="surName" />
            <br />

            <label htmlFor="tc">Tc No:</label>
            <input type="number" name="tc" id="tc" />
            <br />

            <label htmlFor="birthday">Doğum Tarihi:</label>
            <input type="date" name="birthday" id="birthday" />
            <br />

            <label htmlFor="gender">
              <select name="gender" id="gender">
                <option value="">Cinsiyetinizi Seçiniz</option>
                <option value="men">Erkek</option>
                <option value="women">Kadın</option>
                <option value="other">Diğer</option>
              </select>
            </label>
          </>
        )}

        {step === 2 && (
          <>
          <p>2. sayfa</p>
          </>
        )}

        {step === 3 && (
          <>
          <p>3. sayfa</p>
          </>
        )}

        {step === 4 && (
          <>
          <p>4. sayfa</p>
          </>
        )}

        <button>{step === 4 ? "Kaydet" : "İlerle"}</button>
      </form>
    </>
  );
}
