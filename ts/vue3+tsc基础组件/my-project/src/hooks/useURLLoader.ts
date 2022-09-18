import axios from 'axios'
import { ref } from 'vue';

function useURLLoader<T>(url: string) {
    const loaded = ref(false)
    const result = ref<T | null>(null)
    axios.get(url).then(raw => {
        loaded.value = true;
        result.value = raw.data
    })

    return { loaded, result }
}

export default useURLLoader;