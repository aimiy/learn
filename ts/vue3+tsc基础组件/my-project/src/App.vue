<template>
  <div>
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <h1 v-if="!loaded">loading!...</h1>
    <img v-if="loaded" :src="result[0].url" alt="图片"><br>
    <button @click="increase">👍+1</button><br>
    <h1>{{greetings}}</h1>
    <button @click="addGreetings">addGreetings</button>
    <h1>x:{{x}}，y:{{y}}</h1>
    <Modal @close-modal="closeModal" :visible="visible"></Modal>
    <button @click="openModal">openModal</button>
  </div>
</template>

<script lang="ts">
import Modal from "./components/Modal.vue";
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
  greetings: string;
  visible: boolean;
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
    // 1增加
    // const count = ref(0);
    // const double = computed(() => count.value * 2);
    // const increase = () => {
    //   count.value++;
    // };

    // 2字符串拼接，watch
    // const greetings = ref("");
    // watch(greetings, (newValue, oldValue) => {
    //   console.log("old", oldValue);
    //   console.log("new", newValue);
    //   document.title = greetings.value;
    // });
    // const addGreetings = () => {
    //   greetings.value += "hello!";
    // };

    // 3鼠标位置，hook改造
    const { x, y } = useMousePosition();

    // hook，4接口
    // const { loaded, result } = useURLLoader<DogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    // 响应结果的泛型改造，为了在后续使用结果值时可以直接识别到返回值结构
    // 数组的部分
    const { loaded, result } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    // result.value[0].url

    // return {
    //   count,
    //   double,
    //   increase,
    //   greetings,
    //   addGreetings,
    //   x,
    //   y,
    //   loaded,
    //   result,
    //   closeModal,
    //   visible,
    // };

    const data: DataProps = reactive({
      // 1增加
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
      // 2字符串拼接，watch
      greetings: "",
      addGreetings: () => {
        greetings.value += "hello!"; // 这个是外部的greeting
        data.greetings += "hello"; // 这个才是data里面的
      },
      // 5关闭弹窗
        visible: false,
      openModal:() => {
        data.visible = true;
      },
      closeModal: () => {
        data.visible = false;
      },
    });
    const greetings = ref(""); // 外部的greeting
    watch([greetings, data], (newValue, oldValue) => {
      console.log("old", oldValue);
      console.log("new", newValue);
      document.title = greetings.value + data.count;
    });
    const refData = toRefs(data);
    return {
      ...refData,
      x,
      y,
      loaded,
      result,
    };
  },
  components: { Modal },
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
