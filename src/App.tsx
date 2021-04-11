import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {
    const [leftText, setLeftText] = useState<string>('')
    const [rightText, setRightText] = useState<string>('')

    const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.dataset.left) {
            setLeftText(event.target.value)
        }
        if (event.target.dataset.right) {
            setRightText(event.target.value)
        }
    }

    const onSave = () => {
        localStorage.setItem('left', JSON.stringify(leftText))
        localStorage.setItem('right', JSON.stringify(rightText))
    }

    const removeText = () => {
        setRightText('')
        setLeftText('')
        localStorage.clear()
    }

    useEffect(() => {
        const getLeftText = localStorage.getItem('left')
        const getRightText = localStorage.getItem('right')
        if (getRightText) {
            setRightText(JSON.parse(getRightText))
        }
        if (getLeftText) {
            setLeftText(JSON.parse(getLeftText))
        }
        return () => {
            localStorage.setItem('left', JSON.stringify(leftText))
            localStorage.setItem('right', JSON.stringify(rightText))
        }
    }, [])

    return <div>
        <div className="notebook">
            <div className="left">
                <textarea className={'page-inner'} data-left={'left'} value={leftText} onChange={onChangeText}>{leftText}</textarea>
            </div>
            <div className="right">
                <textarea className={'page-inner'} data-right={'right'} value={rightText} onChange={onChangeText}>{rightText}</textarea>
            </div>
        </div>
        <div className="buttons">
            <button onClick={onSave}>Save</button>
            <button onClick={removeText}>Delete</button>
        </div>
    </div>

}
export default App;
