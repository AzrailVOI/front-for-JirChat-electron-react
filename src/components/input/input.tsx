import styles from "./input.module.css"
export function Input() {
    return(
        <input className={styles.e} id="login" type="text" name="login" required={true}/>
    )
}