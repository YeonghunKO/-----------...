// import { Navigate } from "react-router-dom"
import { TOKEN_STORAGE_KEY } from "../constants/storage"
import { getItem } from "../utils/storage"
import React from "react"

function redirectRouteTo({ children, url }) {
  if (getItem(TOKEN_STORAGE_KEY)) {
    return React.cloneElement(children)
  }

  if (!getItem(TOKEN_STORAGE_KEY)) {
    return React.cloneElement(children)
  }
}

export default redirectRouteTo
