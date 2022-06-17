<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <h1 v-if="!loaded">loading!...</h1>
    <img v-if="loaded" :src="result[0].url" alt="图片">
    <button @click="increase">👍+1</button><br>
    <button @click="addGreetings">addGreetings</button>
    <h1>x:{{x}}，y:{{y}}</h1>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRef,
  toRefs,
  watch,
} from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
interface DogResult {
  status: "success" | "failed";
  message: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default defineComponent({
  name: "App",
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    const increase = () => {
      count.value++;
    };

    const greetings = ref("");
    watch(greetings, (newValue, oldValue) => {
      console.log("old", oldValue);
      console.log("new", newValue);
      document.title = greetings.value;
    });
    const addGreetings = () => {
      greetings.value += "hello!";
    };

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

    const { x, y } = useMousePosition();
    // const { loaded, result } = useURLLoader<DogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    // 响应结果的泛型改造，为了在后续使用结果值时可以直接识别到返回值结构

    // 数组的部分
    const { loaded, result } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    // result.value[0].url
    return {
      count,
      double,
      increase,
      addGreetings,
      x,
      y,
      loaded,
      result
    };
    // const data: DataProps = reactive({
    //   count: 0,
    //   greetings: "",
    //   increase: () => {
    //     data.count++;
    //   },
    //   addGreetings: () => {
    //     greetings.value += "hello!";
    //   },
    //   double: computed(() => data.count * 2),
    // });
    // const greetings = ref("");
    // const refData = toRefs(data);
    // watch([greetings, data], (newValue, oldValue) => {
    //   console.log("old", oldValue);
    //   console.log("new", newValue);
    //   document.title = greetings.value + data.count;
    // });
    // return {
    //   ...refData,
    // };
  },
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
