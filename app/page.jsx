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

            <button>{step === 4 ? "Kaydet" : "İlerle"}</button>
          </>
        )}

        {step === 2 && (
          <>
            <label htmlFor="exam">ön sınav puanı:</label>
            <input type="number" name="exam" id="exam" />
            <br />

            <label htmlFor="interview">mülakat notları:</label>
            <textarea name="interview" id="interview" cols="20"></textarea>
            <br />

            <label htmlFor="interviewScore">mülakat puanı:</label>
            <input type="number" name="interviewScore" id="interviewScore" />
            <br />

            <p>mülakattan geçti mi:</p>
            <input type="radio" id="yes" name="passed" value="yes" />
            <label htmlFor="yes">yes</label><br />

            <input type="radio" id="no" name="passed" value="no" />
            <label htmlFor="no">no</label><br />

            <button onClick={{}}>{step === 4 ? "Kaydet" : "İlerle"}</button>
          </>
        )}

        {step === 3 && (
          <>
          </>
        )}

        {step === 4 && (
          <>
            <p>4. sayfa</p>

            <button>{step === 4 ? "Kaydet" : "İlerle"}</button>
          </>
        )}
      </form>
    </>
  );
}
