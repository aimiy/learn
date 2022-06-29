import { onMounted, onUnmounted, ref, Ref } from "vue"

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(true)
    const mouseClick = (e: MouseEvent) => {
        if(elementRef.value){
            isClickOutside.value = !elementRef.value.contains(e.target as HTMLElement)
        }
    }
    onMounted(() => {
        document.addEventListener('click', mouseClick)
    })
    onUnmounted(() => {
        document.removeEventListener('click', mouseClick)
    })
    return isClickOutside
}
export default useClickOutside;