import Key from './Key'

const KeySection = ({ handleOnClick,calculate,clear,backspace }) => {
  return (
    <div className="keys grid grid-rows-5 grid-cols-4 h-2/5 gap-1 gap-x-4 mb-2">
        
        <Key key={ 1 } target='AC' value='AC' handleOnClick={ clear } />
        <Key key={ 2 } target='+/-' value='+/-' handleOnClick={ handleOnClick } />
        <Key key={ 3 } target='%' value='%' handleOnClick={ handleOnClick } />
        <Key key={ 4 } target='/' value='/' handleOnClick={ handleOnClick } />
        <Key key={ 5 } target={7} value={7} handleOnClick={ handleOnClick } />
        <Key key={ 6 } target={8} value={8} handleOnClick={ handleOnClick } />
        <Key key={ 7 } target={9} value={9} handleOnClick={ handleOnClick } />
        <Key key={ 8 } target='*' value='x' handleOnClick={ handleOnClick } />
        <Key key={ 9 } target={4} value={4} handleOnClick={ handleOnClick } />
        <Key key={ 10 } target={5} value={5} handleOnClick={ handleOnClick } />
        <Key key={ 11 } target={6} value={6} handleOnClick={ handleOnClick } />
        <Key key={ 12 } target='-' value='-' handleOnClick={ handleOnClick } />
        <Key key={ 13 } target={1} value={1} handleOnClick={ handleOnClick } />
        <Key key={ 14 } target={2} value={2} handleOnClick={ handleOnClick } />
        <Key key={ 15 } target={3} value={3} handleOnClick={ handleOnClick } />
        <Key key={ 16 } target='+' value='+' handleOnClick={ handleOnClick } />
        <Key key={ 17 } target='C' value='C' handleOnClick={ backspace } />
        <Key key={ 18 } target={0} value={0} handleOnClick={ handleOnClick } />
        <Key key={ 19 } target='.' value='.' handleOnClick={ handleOnClick } />
        <Key key={ 20 } target='=' value='=' handleOnClick={ calculate } />
    </div>
  )
}
export default KeySection