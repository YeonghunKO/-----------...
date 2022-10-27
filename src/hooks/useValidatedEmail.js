import { useState } from "react"

const useValidatedEmail = () => {
  const [emailIsAbled, setEmailIsAbled] = useState(false)
  const [emailWarnList, setEmailWarnList] = useState([])
  const oncheckEmail = (email) => {
    const warnList = []
    if (!email) {
      return setEmailIsAbled(false)
    }

    const regaxForValAuth = {
      moreThanEightLength: {
        warnText: "이메일에는 @가 포함되어야 합니다.",
        fn: new RegExp("@"),
      },
    }
    // eslint-disable-next-line no-unused-vars
    for (const [_key, value] of Object.entries(regaxForValAuth)) {
      if (!value.fn.test(email)) {
        warnList.push(value.warnText)
      }
    }
    setEmailWarnList(warnList)
    if (warnList.length > 0) {
      setEmailIsAbled(false)
    } else {
      setEmailIsAbled(true)
    }
  }

  return [emailIsAbled, emailWarnList, oncheckEmail]
}

export default useValidatedEmail
