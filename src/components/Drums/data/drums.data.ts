import ChordOne from '../../../static/beats/Chord_1.mp3'
import ChordTwo from '../../../static/beats/Chord_2.mp3'
import ChordThree from '../../../static/beats/Chord_3.mp3'
import GiveUsALight from '../../../static/beats/Give_us_a_light.mp3'
import DryOhh from '../../../static/beats/Dry_Ohh.mp3'
import BldH1 from '../../../static/beats/Bld_H1.mp3'
import PunchyKick1 from '../../../static/beats/punchy_kick_1.mp3'
import SideStick1 from '../../../static/beats/side_stick_1.mp3'
import BrkSnr from '../../../static/beats/Brk_Snr.mp3'

interface DPads {
    keyTrigger: string
    keyCode: number
    url: string
    name: string
}

export const drumPads: DPads[] = [
    {
        keyTrigger: 'Q',
        keyCode: 81,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        url: ChordOne,
        name: 'Chord 1',
    },
    {
        keyTrigger: 'W',
        keyCode: 87,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        url: ChordTwo,
        name: 'Chord 2',
    },
    {
        keyTrigger: 'E',
        keyCode: 69,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        url: ChordThree,
        name: 'Chord 3',
    },
    {
        keyTrigger: 'A',
        keyCode: 65,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        url: GiveUsALight,
        name: 'Give us a light',
    },
    {
        keyTrigger: 'S',
        keyCode: 83,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        url: DryOhh,
        name: 'Dry Ohh',
    },
    {
        keyTrigger: 'D',
        keyCode: 68,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        url: BldH1,
        name: 'Bld H1',
    },
    {
        keyTrigger: 'Z',
        keyCode: 90,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        url: PunchyKick1,
        name: 'Punchy Kick 1',
    },
    {
        keyTrigger: 'X',
        keyCode: 88,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        url: SideStick1,
        name: 'Side Stick 1',
    },
    {
        keyTrigger: 'C',
        keyCode: 67,
        // url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        url: BrkSnr,
        name: 'Brk Snr',
    },
]
