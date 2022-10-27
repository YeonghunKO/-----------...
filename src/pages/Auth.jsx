/** @jsxImportSource @emotion/react */
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useIsShown } from "../hooks/useIsShown"
import Login from "../components/auth/Login"
import SignUp from "../components/auth/SignUp"
import { mainContainer } from "../shared/globalStyle"
import { getItem } from "../utils/storage"
import { TOKEN_STORAGE_KEY } from "../constants/storage"

const Auth = () => {
  const [isShown, onOpen, onClose] = useIsShown()

  const navigate = useNavigate()

  useEffect(() => {
    if (getItem(TOKEN_STORAGE_KEY)) {
      navigate("/todo")
    }
  }, [])

  return (
    <div css={mainContainer}>
      <SignUp onOpen={onOpen} onClose={onClose} />
      <Login isShown={isShown} onOpen={onOpen} />
    </div>
  )
}

export default Auth
