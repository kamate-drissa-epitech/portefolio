import {useState} from "react";

export function useShow(initialValue) {
    const [show, setShow] = useState(initialValue)

    return {
        show : show,
        setShow : setShow
    }
}