import { PageIntro } from "../../components/PageIntro";
import styles from "./splash.module.css";

export default function Splash() {
  return (
    <>
      <PageIntro
        pageTitle='Welcome'
        subText={
          <>
            My name is <span>Joe Burton</span>, I'm a Web Developer.
          </>
        }
        detail='This is my portfolio and online playground.'
      />
      <div className={styles.splashPage}></div>
    </>
  );
}
