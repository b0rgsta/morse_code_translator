import styles from './TypeField.module.scss';
import PropTypes from 'prop-types';

/**
 *This component creates a single text field which renders text to the screen.
 * @param value - the text that will render on screen.
 */
const TypeField = ({value}) => {
  return (
    <textarea value={value} className={styles.screen}>

    </textarea>
  );
};

TypeField.propTypes = {
  value: PropTypes.string.isRequired
};
export default TypeField;

