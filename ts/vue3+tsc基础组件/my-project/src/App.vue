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
    // 增加功能
    // const count = ref(0);
    // const double = computed(() => count.value * 2);
    // const increase = () => {
    //   count.value++;
    // };

    // 字符串拼接，watch
    // const greetings = ref("");
    // watch(greetings, (newValue, oldValue) => {
    //   console.log("old", oldValue);
    //   console.log("new", newValue);
    //   document.title = greetings.value;
    // });
    // const addGreetings = () => {
    //   greetings.value += "hello!";
    // };

    // hook改造，鼠标位置
    const { x, y } = useMousePosition();

    // hook，接口
    // const { loaded, result } = useURLLoader<DogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    // 响应结果的泛型改造，为了在后续使用结果值时可以直接识别到返回值结构
    // 数组的部分
    const { loaded, result } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    // result.value[0].url
    

    // 关闭弹窗
    const closeModal = () => {
      console.log("关闭弹窗");
    };
    const visible = ref(false);
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
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
      greetings: "",
      addGreetings: () => {
        greetings.value += "hello!";
      },
    });
    const greetings = ref("");
    const refData = toRefs(data);
    watch([greetings, data], (newValue, oldValue) => {
      console.log("old", oldValue);
      console.log("new", newValue);
      document.title = greetings.value + data.count;
    });
    return {
      ...refData,
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
