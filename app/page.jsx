import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <form action="" className="form-group">
        <label htmlFor="deneme">
          <p>deneme inputu</p>
          <input type="text" name="deneme" />
        </label>
      </form>
    </>
  );
}
