import styles from './Keyboard.module.scss';
import Key from '../Key';
import {morse} from '../../services/translator';
import PropTypes from 'prop-types';

/**
 * This component creates a keyboard
 * @param onType - defines the function which runs when a key is pressed.
 */
const Keyboard = ({onType}) => {

  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <Key onType={onType} char={'"'} morse={morse['"']}/>
        <Key onType={onType} char={'1'} morse={morse['1']}/>
        <Key onType={onType} char={'2'} morse={morse['2']}/>
        <Key onType={onType} char={'3'} morse={morse['3']}/>
        <Key onType={onType} char={'4'} morse={morse['4']}/>
        <Key onType={onType} char={'5'} morse={morse['5']}/>
        <Key onType={onType} char={'6'} morse={morse['6']}/>
        <Key onType={onType} char={'7'} morse={morse['7']}/>
        <Key onType={onType} char={'8'} morse={morse['8']}/>
        <Key onType={onType} char={'9'} morse={morse['9']}/>
        <Key onType={onType} char={'0'} morse={morse['0']}/>
        <Key onType={onType} char={'-'} morse={morse['-']}/>
        <Key onType={onType} char={'+'} morse={morse['+']}/>
        <Key onType={onType} char={'clear'} morse={''} width={9.5}/>
      </div>
      <div className={styles.row}>
        <Key onType={onType} char={'error'} width={9.5} morse={morse['error']}/>
        <Key onType={onType} char={'Q'} morse={morse['q']}/>
        <Key onType={onType} char={'W'} morse={morse['w']}/>
        <Key onType={onType} char={'E'} morse={morse['e']}/>
        <Key onType={onType} char={'R'} morse={morse['r']}/>
        <Key onType={onType} char={'T'} morse={morse['t']}/>
        <Key onType={onType} char={'Y'} morse={morse['y']}/>
        <Key onType={onType} char={'U'} morse={morse['u']}/>
        <Key onType={onType} char={'I'} morse={morse['i']}/>
        <Key onType={onType} char={'O'} morse={morse['o']}/>
        <Key onType={onType} char={'P'} morse={morse['p']}/>
        <Key onType={onType} char={'('} morse={morse['(']}/>
        <Key onType={onType} char={')'} morse={morse[')']}/>
        <Key onType={onType} char={';'} morse={morse[';']}/>
      </div>
      <div className={styles.row}>
        <Key onType={onType} width={11} char={'&'} morse={morse['&']}/>
        <Key onType={onType} char={'A'} morse={morse['a']}/>
        <Key onType={onType} char={'S'} morse={morse['s']}/>
        <Key onType={onType} char={'D'} morse={morse['d']}/>
        <Key onType={onType} char={'F'} morse={morse['f']}/>
        <Key onType={onType} char={'G'} morse={morse['g']}/>
        <Key onType={onType} char={'H'} morse={morse['h']}/>
        <Key onType={onType} char={'J'} morse={morse['j']}/>
        <Key onType={onType} char={'K'} morse={morse['k']}/>
        <Key onType={onType} char={'L'} morse={morse['l']}/>
        <Key onType={onType} char={':'} morse={morse[':']}/>
        <Key onType={onType} char={'\''} morse={morse['\'']}/>
        <Key onType={onType} width={11.5} char={'return'} morse={morse['']}/>
      </div>
      <div className={styles.row}>
        <Key onType={onType} width={15} char={'wait'} morse={morse['wait']}/>
        <Key onType={onType} char={'Z'} morse={morse['z']}/>
        <Key onType={onType} char={'X'} morse={morse['x']}/>
        <Key onType={onType} char={'C'} morse={morse['c']}/>
        <Key onType={onType} char={'V'} morse={morse['v']}/>
        <Key onType={onType} char={'B'} morse={morse['b']}/>
        <Key onType={onType} char={'N'} morse={morse['n']}/>
        <Key onType={onType} char={'M'} morse={morse['m']}/>
        <Key onType={onType} char={','} morse={morse[',']}/>
        <Key onType={onType} char={'.'} morse={morse['.']}/>
        <Key onType={onType} char={'/'} morse={morse['/']}/>
        <Key onType={onType} width={15} char={'understood'} morse={morse['understood']}/>

      </div>
      <div className={styles.row}>
        <Key onType={onType} char={'?'} morse={morse['?']}/>
        <Key onType={onType} char={'!'} morse={morse['!']}/>
        <Key onType={onType} char={'@'} morse={morse['@']}/>
        <Key onType={onType} char={'$'} morse={morse['$']}/>
        <Key onType={onType} width={50} char={' '} morse={morse[' ']}/>
        <Key onType={onType} char={'_'} morse={morse['_']}/>
        <Key onType={onType} char={'end'} morse={morse['end']}/>
        <Key onType={onType} char={'='} morse={morse['=']}/>

      </div>

    </div>
  );
};

Keyboard.propTypes = {
  onType: PropTypes.func.isRequired
};

export default Keyboard;

