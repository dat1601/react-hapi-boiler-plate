export type StatesType = {
    currentState: string
    setCurrentState: (nextState: string) => void
}

export const states: StatesType = {
    currentState: "",
    setCurrentState: function (nextState: string) {
        this.currentState = nextState
    }
}
