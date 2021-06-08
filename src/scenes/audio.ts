import axios from 'axios';
import { Howl } from 'howler';

let audio: Howl | null = null;


export default function getAudioPlayer() {
    if (audio) {
        return Promise.resolve(audio);
    }

    return axios.get('./assets/generated/audio.json').then(
        response => {
            audio = new Howl(response.data);
            return audio;
        }
    )
}
