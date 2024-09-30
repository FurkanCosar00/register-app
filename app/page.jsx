import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
