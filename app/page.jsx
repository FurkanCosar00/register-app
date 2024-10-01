"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <>
      <form action={async (formData) => {
        console.log(formData);
        const formObj = Object.fromEntries(formData);
        console.log(formObj);

        const response = await BasvuruYapAksiyonu(formObj);
        console.log(response);

        if (response?.errors) {
          setErrorsState({
            errors: response?.errors
          })
          return;
        }

        setStep(prev => prev + 1)


      }} className="form-group">

        <input type="hidden" name="step" value={step} />
        {step === 1 && (
          <>
          <label htmlFor="name">
            <p>Ad: </p>
            <input type="text" name="name" />
          </label>

          <label htmlFor="surName">
            <p>Soyad: </p>
            <input type="text" name="surName" />
          </label>

          <label htmlFor="tc">
            <p>Tc No:</p>
            <input type="number" name="tc" />
          </label>

          <label htmlFor="birthday">
            <p>Doğum Tarihi: </p>
            <input type="date" name="birthday" />
          </label>

          <label htmlFor="gender">
            <select name="gender">
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
          </>
        )}

        {step === 3 && (
          <>
          </>
        )}

        {step === 4 && (
          <>
          </>
        )}
      </form>
    </>
  );
}
