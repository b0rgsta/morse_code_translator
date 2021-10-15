import TypeField from '../../components/TypeField';
import styles from './TypeScreens.module.scss';

/**
 * This component holds 2 text fields. 1 for each variant(eng/morse).
 * @param englishValue - english text
 * @param morseValue - morse code.
 */
const TypeScreens = ({englishValue, morseValue}) => {
  return (
    <div className={styles.typeScreens}>
      <TypeField value={englishValue}/>
      <TypeField value={morseValue}/>
    </div>
  );
};

export default TypeScreens;