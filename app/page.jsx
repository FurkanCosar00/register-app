import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <form action={async(formData) => {
                console.log(formData);
                const formObj = Object.fromEntries(formData);
                console.log(formObj);

                const response = await BasvuruYapAksiyonu(formObj);
                console.log(response);

                if(response?.errors){
                    setErrorsState({
                        errors: response?.errors
                    })
                    return;
                }

                setStep(prev => prev + 1)
                
                
            }} className="form-group">
        <label htmlFor="deneme">
          <p>deneme inputu</p>
          <input type="text" name="deneme" />
        </label>
      </form>
    </>
  );
}
