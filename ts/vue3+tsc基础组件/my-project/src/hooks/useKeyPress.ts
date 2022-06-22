import { onBeforeUnmount, onMounted, reactive, toRefs } from "vue"

function useKeyPress(key: string) {
    const data = reactive({
        isPress:false,
        updateClick: (e: KeyboardEvent) => {
            console.log(e)
            if(e.key == key){
               data.isPress = true
               console.log(data.isPress)
            }
        }
    })
    onMounted(() => {
        document.addEventListener("keydown", data.updateClick);
    })
    onBeforeUnmount(() => {
        document.removeEventListener("keydown", data.updateClick)
    })
    const refsData = toRefs(data)

    return refsData.isPress

}
export default useKeyPress