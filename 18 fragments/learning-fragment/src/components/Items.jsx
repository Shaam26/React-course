import styles from "./Items.module.css";

const Items = ({ foodItem }) => {
  return (
    <li className={`${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};
export default Items;
