import styles from "./work.module.css";

import { Card } from "../../components/Card";

export default function Work() {
  return (
    <div className={styles.work}>
      <h2>Work and Projects</h2>
      <Card />
    </div>
  );
}
