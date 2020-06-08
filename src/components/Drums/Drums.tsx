import React, {
    Fragment,
    useEffect,
    useState,
    FunctionComponent,
    MouseEvent,
    KeyboardEvent,
} from 'react'

import { drumPads } from './data/drums.data'

let { log } = console

interface Props {}

const Drums: FunctionComponent<Props> = (props) => {
    const [currentBeat, setCurrentBeat] = useState('Keep the beats going!')

    const handleDrumPadClick = (event: MouseEvent<HTMLButtonElement>): void => {
        const target: HTMLButtonElement = event.target as HTMLButtonElement
        const { value }: HTMLButtonElement = target
        const audio: HTMLElement | null = document.getElementById(value)

        setCurrentBeat(value)

        // @ts-ignore
        audio.currentTime = 0

        // @ts-ignore
        audio.play()
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
                            id={pad.keyTrigger}
                            value={pad.name}
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
