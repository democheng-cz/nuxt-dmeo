import { ref } from "vue"
import { useAsyncData } from "#app"

export function usePoem() {
	const poem = ref<any>({})

	const { data, error } = useAsyncData<any>(
		"poem",
		() => $fetch("/local-api/poem"),
		{
			transform(value) {
				return value.data.poem
			},
		}
	)

	poem.value = data.value || {}

	return { poem, error }
}
