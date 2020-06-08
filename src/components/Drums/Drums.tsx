import React, { Fragment, useState, useEffect, FunctionComponent, MouseEvent } from 'react'

import { drumPads } from './data/drums.data'

let { log } = console

interface Props {}

const Drums: FunctionComponent<Props> = (props) => {
    let [currentBeat, setCurrentBeat] = useState<string>('Keep the beats going!')

    useEffect(() => {
        document.addEventListener('keydown', handleKeypress)

        return () => {
            document.removeEventListener('keydown', handleKeypress)
        }
    }, [])

    const handleDrumPadClick = (event: MouseEvent<HTMLButtonElement>): void => {
        const target: HTMLButtonElement = event.target as HTMLButtonElement
        const { value }: HTMLButtonElement = target
        const audio: HTMLAudioElement | null = document.querySelector(`audio[id=${value}]`)

        setCurrentBeat(target.id)

        // @ts-ignore
        audio.currentTime = 0

        // @ts-ignore
        audio.play()
    }

    const handleKeypress = (event: any): void => {
        let btn: HTMLButtonElement | null = document.querySelector(
            `button[value=${String.fromCharCode(event.keyCode)}]`
        )

        if (btn) {
            btn.click()
        }
    }

    return (
        <Fragment>
            <div className="drum-machine" id="drum-machine">
                <h1 className="drum-machine-title">PureSound Drums</h1>
                <div id="display" className="drum-machine-display">
                    {currentBeat}
                </div>
                <div className="drum-machine-pads">
                    {drumPads.map((pad) => (
                        <button
                            id={pad.name}
                            value={pad.keyTrigger}
                            key={pad.keyTrigger}
                            onClick={handleDrumPadClick}
                            className="drum-pad"
                        >
                            {pad.keyTrigger}
                            <audio
                                className="clip"
                                preload="auto"
                                id={pad.keyTrigger}
                                src={pad.url}
                            ></audio>
                        </button>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Drums
