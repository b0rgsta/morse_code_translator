import styles from './Key.module.scss';
import PropTypes from 'prop-types';
import clickSound from '../../assets/audio/keyboard_click.wav';

/**
 * This component creates keyboard keys with a character and morse code.
 * @param {(char: string, morse: string) => void} onType - a function that runs when a key is pressed.
 * @param char - keyboard character
 * @param morse - coresponding morse code
 * @param width - specifies key width
 */
const Key = ({onType, char, morse, width}) => {

  return (
    <button className={styles.Key} onClick={() => {
      let sound = new Audio(clickSound);
      sound.play();
      onType(char, morse)
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
  width: PropTypes.number,
}

export default Key;