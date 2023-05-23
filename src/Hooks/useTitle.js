import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} | YunKid`;
    },[title])
}

export default useTitle;