import styles from "./Key.module.scss"

const Key = ({char, morse, width}) => {

  return (
    <button style={{width: `${width}%`}}>
      <span className={styles.character}>{char}</span>
      <span className={styles.morse}>{morse}</span>
    </button>
  );
};

Key.defaultProps = {
  width: 6,
}

export default Key;