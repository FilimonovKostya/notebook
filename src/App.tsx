import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {
    const [leftText, setLeftText] = useState<string>('')
    const [rightText, setRightText] = useState<string>('')

    const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        if (event.target.getAttribute('left') === 'left'){
            console.log('left')
            setLeftText(event.target.value)
        }
        if(event.target.getAttribute('right') === 'right'){
            console.log('right')
            setRightText(event.target.value)
        }
    }

    const onSave = () => {
        localStorage.setItem('left', leftText)
        localStorage.setItem('right', rightText)
    }

    useEffect(() => {

        const getLeftText = localStorage.getItem('left')
        const getRightText = localStorage.getItem('right')
        if( getRightText && getLeftText){
            setLeftText(getLeftText)
            setRightText(getRightText)
        }

    }, [])

    return <div>
        <div className="notebook">
            <div className="left">
                <textarea className={'page-inner'} datatype={'left'} onChange={onChangeText}>{leftText}</textarea>
            </div>
            <div className="right">
                <textarea className={'page-inner'} datatype={'right'} onChange={onChangeText}>{rightText}</textarea>
            </div>
        </div>
        <button onClick={onSave}>Save</button>
    </div>
}

export default App;
