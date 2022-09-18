import { onBeforeUnmount, onMounted, reactive, toRefs } from "vue"

function useKeyPress(key: string) {
    const data = reactive({
        isPress:false,
        keydown: (e: KeyboardEvent) => {
            console.log(e)
            if(e.key == key){
               data.isPress = true
               console.log(data.isPress)
            }
        },
        keyup: (e: KeyboardEvent) => {
            console.log(e)
            if(e.key == key){
               data.isPress = false
               console.log(data.isPress)
            }
        }
    })
    onMounted(() => {
        document.addEventListener("keydown", data.keydown);
        document.addEventListener("keyup", data.keyup);
    })
    onBeforeUnmount(() => {
        document.removeEventListener("keydown", data.keydown)
        document.removeEventListener("keyup", data.keyup)
    })
    const refsData = toRefs(data)

    return refsData.isPress

}
export default useKeyPress