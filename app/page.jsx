"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleSubmit = async (formData) => {
    const passed = formData.get("passed");

    if (step === 2 && passed === "no") {
      setStep(3);
    } 
    else if (step === 2 && passed === "yes") {
      setStep(4);
    } 
    else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <form action={(formData) => {handleSubmit(formData);}} className="form-group">
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

            <button type="submit">{step === 4 ? "Kaydet" : "İlerle"}</button>
          </>
        )}

        {step === 2 && (
          <>
            <label htmlFor="exam">Ön sınav puanı:</label>
            <input type="number" name="exam" id="exam" />
            <br />

            <label htmlFor="interview">Mülakat notları:</label>
            <textarea name="interview" id="interview" cols="20"></textarea>
            <br />

            <label htmlFor="interviewScore">Mülakat puanı:</label>
            <input type="number" name="interviewScore" id="interviewScore" />
            <br />

            <p>Mülakattan geçti mi:</p>
            <input type="radio" id="yes" name="passed" value="yes" />
            <label htmlFor="yes">Evet</label>
            <br />

            <input type="radio" id="no" name="passed" value="no" />
            <label htmlFor="no">Hayır</label>
            <br />

            <button type="submit">İlerle</button>
          </>
        )}

        {step === 3 && (
          <>
            <p>3. sayfa</p>
            <h3>Form kaydedildi</h3>
            <button onClick={() => setStep(1)}>Başlangıca Dön</button>
          </>
        )}

        {step === 4 && (
          <>
            <p>fatihg can </p>
            <button>{step === 4 ? "Kaydet" : "İlerle"}</button>
            <p> öğrenci ödevlerini tamamladı mı? <input  name="homework" type="radio" id="homeworkYes"  /><label htmlFor="homeworkYes"> evet </label>     <input  name="homework" type="radio" id="homeworkNo"  /><label htmlFor="homeworkNo"> hayır </label></p>
            <p>Öğrenci derslere katılım sağladı mı? <input name="lesson" type="radio" id="lessonYes" /> <label htmlFor="lessonYes">evet</label>    <input name="lesson" type="radio" id="lessonNo" /> <label htmlFor="lessonNo">Hayır</label></p>
            <p>Öğrenci eğitmenleri söylemediği halde proje geşiltirdi mi? <input name="project" type="radio" id="projectYes" /> <label htmlFor="projectYes">evet</label>   <input name="project" type="radio" id="projectNo" /><label htmlFor="projectNo">hayır</label></p>
            <p>Öğrenci derse herzaman tam saatinde geldi mi? <input name="lessonTime" type="radio" id="lessonTimeYes" /> <label htmlFor="lessonTimeYes">evet</label>    <input name="lessonTime" type="radio" id="lessonTimeNo"  /><label htmlFor="lessonTimeNo">hayır</label></p>
            <p>Öğrenci ders esnasında sadece derse odaklandı mı?  <input name="focusing" type="radio" id="focusingYes" /> <label htmlFor="focusingYes">evet</label>  <input name="focusing" type="radio" id="focusing"No /> <label htmlFor="focusingNo">hayır</label></p>
          </>
        )}
      </form>
    </>
  );
}
