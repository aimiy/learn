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

// const x = ref(0);
// const y = ref(0);
// const updateClick = (e: MouseEvent) => {
//   x.value = e.pageX;
//   y.value = e.pageY;
// };
// onMounted(() => {
//   document.addEventListener("click", updateClick);
// });
// onBeforeUnmount(() => {
//   document.removeEventListener("click",updateClick)
// })