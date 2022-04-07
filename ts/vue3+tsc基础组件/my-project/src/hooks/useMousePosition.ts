import { onBeforeUnmount, onMounted, reactive, toRefs } from "vue";

function useMousePosition() {
    const data = reactive({
        x: 0,
        y: 0,
        updateClick: (e: MouseEvent) => {
            data.x = e.pageX;
            data.y = e.pageY;
        }
    })
    onMounted(() => {
        document.addEventListener("click", data.updateClick);
    });

    onBeforeUnmount(() => {
        document.removeEventListener("click", data.updateClick)
    })

    const refsData = toRefs(data)

    return {
        ...refsData
    }
}

export default useMousePosition

