import React from "react"

const Layout = ({ children }) => {
  return (
    <section
      style={{
        display: "block",
        backgroundColor: 'pink',
        maxWidth: "650px",
        margin: "2rem auto"
      }}
    >
      {children}
    </section>
  )
}

export default Layout
