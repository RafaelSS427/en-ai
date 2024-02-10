
export const generateAudio = async (text: string) => {

    const synth = window.speechSynthesis

    const getVoices = () => {
        const voices = synth.getVoices()
        let validVoices:{ index: number; value: SpeechSynthesisVoice }[] = []

        if(voices.length > 0){
            const isChrome = navigator.userAgent.includes('Chrome')

            voices.forEach((e, i) => {
                if(e.lang === 'en-US'){
                    validVoices.push({
                        index: i,
                        value: e
                    })
                }
            })

            const utterThis = new SpeechSynthesisUtterance(text)

            if(isChrome){
                const voiceSelected = validVoices.find(({ value }) => value.name  === 'Google US English')
                utterThis.voice = voices[voiceSelected?.index || validVoices[0].index]
            } else {
                utterThis.voice = voices[validVoices[0].index]
            }

            return synth.speak(utterThis)
        }
    }

    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = getVoices;
    }

    getVoices()
}