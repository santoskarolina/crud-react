interface StateActionCustom{
    type: string
    loading: boolean
}

export interface StateCustom{
    loading: boolean
}
type DispatchType = (args: StateActionCustom) => StateActionCustom