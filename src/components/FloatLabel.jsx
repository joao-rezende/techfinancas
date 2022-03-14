import { useState } from "react";
import styles from "../styles/FloatLabel.module.css"

export default function FloatLabel(props) {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState('')

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className={styles.inputArea}>
      <input type={props.type}
        name={props.name}
        id={props.id}
        className={styles.inputFloatLabel}
        onChange={(e) => handleTextChange(e.target.value)} />

      <label className={!isActive ? styles.floatLabel : styles.floatLabelActive} htmlFor={props.id}>
        {props.text}
      </label>
    </div>
  )
}