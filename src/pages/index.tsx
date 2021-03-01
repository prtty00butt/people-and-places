// If you don't want to use TypeScript you can delete this file!
import React, { useEffect, useState } from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Transition } from "react-transition-group"
import styled from "@emotion/styled"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import Menu from "../components/menu"
import Player from "../components/player"

const duration = 4000

const defaultStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transition: `opacity ${duration}ms ease-in-out`,
  backgroundColor: "#000000",
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, zIndex: 1 },
}

const Intro = styled.div<{ image: string }>`
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: ${props => props.theme.zIndex.intro};
`

const Fade = ({ image, in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <Intro
        image={image}
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      ></Intro>
    )}
  </Transition>
)

type DataProps = {
  site: {
    buildTime: string
  }
}

const Self = styled.section`
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: ${props => props.theme.colors.menuBackground};
`

const Index: React.FC<PageProps<DataProps>> = ({ data, path, location }) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [])

  return (
    <Self>
      <Fade in={!loaded} image="assets/dense_square.jpg" />
      <Menu />
      <Player id="lsKtQu5TszU"></Player>
    </Self>
  )
}

export default Index

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
