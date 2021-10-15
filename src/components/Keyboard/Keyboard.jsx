import styles from './Keyboard.module.scss';
import Key from '../Key';
import {morse} from '../../services/translator';

const Keyboard = () => {


  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <Key char={'"'} morse={morse['"']}/>
        <Key char={'1'} morse={morse['1']}/>
        <Key char={'2'} morse={morse['2']}/>
        <Key char={'3'} morse={morse['3']}/>
        <Key char={'4'} morse={morse['4']}/>
        <Key char={'5'} morse={morse['5']}/>
        <Key char={'6'} morse={morse['6']}/>
        <Key char={'7'} morse={morse['7']}/>
        <Key char={'8'} morse={morse['8']}/>
        <Key char={'9'} morse={morse['9']}/>
        <Key char={'0'} morse={morse['0']}/>
        <Key char={'-'} morse={morse['-']}/>
        <Key char={'+'} morse={morse['+']}/>
        <Key char={''} morse={'delete'} width={9.5}/>
      </div>
      <div className={styles.row}>
        <Key char={'error'} width={9.5} morse={morse['error']}/>
        <Key char={'Q'} morse={morse['q']}/>
        <Key char={'W'} morse={morse['w']}/>
        <Key char={'E'} morse={morse['e']}/>
        <Key char={'R'} morse={morse['r']}/>
        <Key char={'T'} morse={morse['t']}/>
        <Key char={'Y'} morse={morse['y']}/>
        <Key char={'U'} morse={morse['u']}/>
        <Key char={'I'} morse={morse['i']}/>
        <Key char={'O'} morse={morse['o']}/>
        <Key char={'P'} morse={morse['p']}/>
        <Key char={'('} morse={morse['(']}/>
        <Key char={')'} morse={morse[')']}/>
        <Key char={';'} morse={morse[';']}/>
      </div>
      <div className={styles.row}>
        <Key width={11} char={'&'} morse={morse['&']}/>
        <Key char={'A'} morse={morse['a']}/>
        <Key char={'S'} morse={morse['s']}/>
        <Key char={'D'} morse={morse['d']}/>
        <Key char={'F'} morse={morse['f']}/>
        <Key char={'G'} morse={morse['g']}/>
        <Key char={'H'} morse={morse['h']}/>
        <Key char={'J'} morse={morse['j']}/>
        <Key char={'K'} morse={morse['k']}/>
        <Key char={'L'} morse={morse['l']}/>
        <Key char={':'} morse={morse[':']}/>
        <Key char={'\''} morse={morse['\'']}/>
        <Key width={11.5} char={'return'} morse={morse['']}/>
      </div>
      <div className={styles.row}>
        <Key width={15} char={'wait'} morse={morse['wait']}/>
        <Key char={'Z'} morse={morse['z']}/>
        <Key char={'X'} morse={morse['x']}/>
        <Key char={'C'} morse={morse['c']}/>
        <Key char={'V'} morse={morse['v']}/>
        <Key char={'B'} morse={morse['b']}/>
        <Key char={'N'} morse={morse['n']}/>
        <Key char={'M'} morse={morse['m']}/>
        <Key char={','} morse={morse[',']}/>
        <Key char={'.'} morse={morse['.']}/>
        <Key char={'/'} morse={morse['/']}/>
        <Key width={15} char={'understood'} morse={morse['understood']}/>

      </div>
      <div className={styles.row}>
        <Key char={'?'} morse={morse['?']}/>
        <Key char={'!'} morse={morse['!']}/>
        <Key char={'@'} morse={morse['@']}/>
        <Key char={'$'} morse={morse['$']}/>
        <Key width={50} char={' '} morse={morse[' ']}/>
        <Key char={'_'} morse={morse['_']}/>
        <Key char={'end'} morse={morse['end']}/>
        <Key char={'='} morse={morse['=']}/>

      </div>

    </div>
  );
};
export default Keyboard;