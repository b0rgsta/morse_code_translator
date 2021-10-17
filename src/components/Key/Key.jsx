import styles from './Key.module.scss';
import PropTypes from 'prop-types';
import clickSound from '../../assets/audio/keyboard_click.wav';
import squeakySqueak from '../../assets/audio/squeakySqueak.wav';

/**
 * This component creates keyboard keys each with characters and morse code.
 * @param {(char: string, morse: string) => void} onType - a function that runs when a key is pressed.
 * @param char - keyboard character
 * @param morse - corresponding morse code
 * @param width - specifies key width
 */
const Key = ({onType, char, morse, width}) => {

  return (
    <button className={styles.Key} onClick={() => {
      //if 'return' is clicked, play sound (no onType func required)
      if (char === 'return') {
        let sound = new Audio(squeakySqueak);
        sound.play();
        return;
      }

      let sound = new Audio(clickSound);
      sound.play();

      //
      onType(char, morse);
    }} style={{width: `${width}%`}}>
      <span>{char}</span>
      <span>{morse}</span>
    </button>
  );
};

Key.defaultProps = {
  width: 6
};

Key.propTypes = {
  onType: PropTypes.func.isRequired,
  char: PropTypes.string.isRequired,
  morse: PropTypes.string.isRequired,
  width: PropTypes.number
};

export default Key;