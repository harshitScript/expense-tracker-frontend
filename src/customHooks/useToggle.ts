import { useCallback, useState } from "react"

interface UseToggle {
    (initialState: boolean): [boolean, () => void]
}

const useToggle: UseToggle = (initialState) => {
    const [toggle, setToggle] = useState<boolean>(initialState);
    const toggleState = useCallback(() => setToggle(current => !current), [])
    return [toggle, toggleState]
}
export default useToggle