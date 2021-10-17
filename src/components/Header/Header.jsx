import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>Morse Code Translator</h1>
    </div>
  );
};

export default Header;