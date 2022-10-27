import { useState } from "react"

const useValidate = (type) => {
  const [validity, setValidity] = useState(false)
  const [warnList, setWarnList] = useState([])

  const onCheckValidity = (text) => {
    const warnList = []
    if (!text) {
      return setValidity(false)
    }

    const regexForValAuth = {
      password: {
        warnText: "비밀번호는 8글자 이상!",
        fn: new RegExp("(?=.{8,})"),
      },
      email: {
        warnText: "이메일에는 @ 가 포함되어야!!",
        fn: new RegExp(".+@.+"),
      },
    }

    const { warnText, fn } = regexForValAuth[type]
    if (!fn.test(text)) {
      warnList.push(warnText)
    }

    setWarnList(warnList)
    if (warnList.length > 0) {
      setValidity(false)
    } else {
      setValidity(true)
    }
  }

  return [validity, warnList, onCheckValidity]
}

export { useValidate }
