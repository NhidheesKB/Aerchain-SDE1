import { ref, watch } from "vue";
import { apiRequestHandler } from "./helper";
const micStatus = ref(false);
const result: any[] = [];
let recognition: any;
let fullSpeech: string = "";
export const toggleMic = () => {
  micStatus.value = !micStatus.value;
};
const generateTask = async (content: string) => {
  try {
    const body={content}
    const response=await apiRequestHandler("generate","POST",body)
    if(!response.ok) return console.log("Speech Send is Failed")
    const {field}=await response.json()
    const task=JSON.parse(field)
  } catch (error) {
    console.log("Send Speech Error", error);
  }
};
const recorder = async () => {
  const SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechAPI) {
    console.log("SpeechRecognition not supported in this browser");
    return;
  }
  recognition = new SpeechAPI();
  recognition.lang = "en-IN";
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.onerror = (e: any) => {
    console.log("Speech recognition error", e);
  };

  recognition.onresult = (event: any) => {
    result.push(event.results);
  };

  recognition.onend = async() => {
    fullSpeech = "";
    const finalResult: any[] = result.at(-1);
    for (const result of finalResult) {
      fullSpeech += result[0].transcript;
    }
    await generateTask(fullSpeech)
    console.log("fullspeech", fullSpeech);
    micStatus.value = false;
  };

  recognition.start();
};

watch(micStatus, async (isMicOn) => {
  if (isMicOn) {
    return (result.length = 0), await recorder();
  }
  recognition.stop();
});
