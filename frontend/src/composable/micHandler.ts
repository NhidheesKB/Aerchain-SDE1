import { reactive, ref, watch } from "vue";
import { apiRequestHandler } from "./helper";
export const micStatus = ref(false);
const result: SpeechRecognitionResultList[] = [];
let recognition: SpeechRecognition;
let fullSpeech: string = "";
export const toggleMic = () => {
  micStatus.value = !micStatus.value;
};
export const fields:Record<string,string|Date>=reactive({
  title:'',
  description:'',
  due_date:'',
  status:'To Do',
  priority:''

})
export const formFields = Object.keys(fields)

const generateTask = async (content: string) => {
  try {
    const body={content}
    const response=await apiRequestHandler("generate","POST",body)
    if(!response.ok) return console.log("Speech Send is Failed")
    const {field}=await response.json()
    const task=JSON.parse(field)
    formFields.forEach((field)=>{
      fields[field]=task[field]
    })
    console.log("tasks",task)
  } catch (error) {
    alert("Something Went Wrong Try Again")
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

  recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
    micStatus.value=false
    alert(`Microphone is ${e.error}`)
    console.log("Speech recognition error", e.error);
  };

  recognition.onresult = (event) => {
    result.push(event.results);
  };
  recognition.onend = async() => {
    fullSpeech = "";
    const finalResult = result.at(-1) as SpeechRecognitionResultList;
    if(!finalResult) return
    for (const result of finalResult) {
      fullSpeech += result.item(0).transcript
    }
    console.log("Before Send",fullSpeech)
    await generateTask(fullSpeech)
    micStatus.value = false;
  };

  recognition.start();
};

watch(micStatus, async (isMicOn) => {
  if (isMicOn) {
    console.log("Mic Status",isMicOn)
    return (result.length = 0), await recorder();
  }
  recognition.stop();
});
