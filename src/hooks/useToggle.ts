import { useState } from "react"

const useToggle = (initialState: boolean): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initialState);
    const toggleState = () => setState(curr => !curr);
    return [state, toggleState]
}

export default useToggle;