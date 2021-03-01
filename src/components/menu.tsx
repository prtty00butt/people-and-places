import React, { HTMLAttributes, useCallback } from "react"
import noop from "lodash/noop"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  IconDefinition,
  faBackward,
  faForward,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"

const Self = styled.menu`
  position: fixed;
  top: 10px;
  right: 10px;
  bottom: 10px;
  width: 400px;
  padding: 25px;
  margin: 0;
  background-color: #1d1f22a6 !important;
  z-index: ${props => props.theme.zIndex.menu};
  overflow-y: auto;
  label: Menu;
`

const Introduction = styled.div`
  padding-top: 10px;
`

const People = styled.ul`
  color: #c8c8c8;
  margin: 10px 0 0 0;
  width: 100%;
  padding: 10px 0;
`

const SnsIcon = styled.div`
  width: 25px;
  height: 25px;
`

const InstagramIcon = styled(SnsIcon)`
  background-image: url("assets/instagram-light.svg");
`

const Playlist = styled.div`
  margin: 30px 0 0 0;
  color: white;
`

const StyledCard = styled.div`
  border: none;
  color: white;
  background-color: #618bb9;
  background: transparent;
`

const Card = ({ children }) => {
  return <StyledCard className="card">{children}</StyledCard>
}
const StyledCardHeader = styled.div`
  text-align: right;
  padding-left: 0 !important;
  padding-right: 0 !important;
`

const CardHeader = ({ children }) => {
  return <StyledCardHeader className="card-header">{children}</StyledCardHeader>
}

const StyledDivider = styled.div<{ color }>`
  &:after {
    background: ${props => props.color} !important;
  }
`

const Divider = ({ position, text }) => {
  return (
    <StyledDivider
      className={`divider text-${position || "left"}`}
      color="#303742"
      data-content={text}
    />
  )
}

const StyledBarSliderButton = styled.button``

const StyledBarItem = styled.div<{ color: string; width: string }>`
  width: ${props => props.width} !important;
  background: ${props => props.color} !important;

  > ${StyledBarSliderButton} {
    background: ${props => props.color} !important;
  }
`
const BarItem = ({ color, width, ...props }) => {
  return (
    <StyledBarItem className="bar-item" color={color} width={width} {...props}>
      <StyledBarSliderButton className="bar-slider-btn btn" role="slider" />
    </StyledBarItem>
  )
}

const StyledPlaylistControllerIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

const PlaylistControllerIcon: React.FC<
  HTMLAttributes<HTMLElement> & {
    icon: IconDefinition
  }
> = ({ icon, ...props }: { icon: IconDefinition }) => {
  return <StyledPlaylistControllerIcon icon={icon} size="lg" {...props} />
}

const PlayIcon = ({ onClick = noop }: { onClick?: Function }) => {
  const handleClick = useCallback(() => {
    onClick()
  }, [onClick])
  return <PlaylistControllerIcon icon={faPlay} onClick={handleClick} />
}

const StyledPlaylistController = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

const PlaylistController = () => {
  return (
    <StyledPlaylistController>
      <PlaylistControllerIcon icon={faBackward} />
      <PlayIcon />
      <PlaylistControllerIcon icon={faForward} />
    </StyledPlaylistController>
  )
}

export default () => {
  return (
    <Self>
      <Introduction>
        {/* <Divider position="right" text="About"></Divider> */}
        <Card>
          <div className="card-image">
            <img src="assets/dense_front.jpg" className="img-responsive" />
          </div>
          <CardHeader>
            <div className="card-title h5">Dense Cofee</div>
            <div className="card-subtitle text-gray">
              서울특별시 강동구 송파대로{" "}
            </div>
          </CardHeader>
          {/* <div className="card-body">
            Surface Studio. Turn your desk into a Studio. Surface Studio is
            designed for the creative process.
          </div> */}
        </Card>
      </Introduction>
      <Playlist>
        {/* <Divider position="right" text="Playlist"></Divider> */}
        <div className="bar bar-slider">
          <BarItem color="#618BB9" role="progressbar" width="25%" />
        </div>
        <PlaylistController />
        {/* 
        <ul className="menu bg-dark">
          <li className="menu-item ins">
            <a href="#">
              <i className="icon icon-link"></i> Something about us - Daft Punk
            </a>
          </li>
          <li className="menu-item">
            <a href="#">
              <i className="icon icon-link"></i> Settings
            </a>
          </li>

          <li className="menu-item">
            <a href="#">My profile</a>
          </li>
        </ul> */}
      </Playlist>
      <People>
        {/* <div className="columns">
          <div className="column col-3">
            <figure className="avatar avatar-xl">
              <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" />
            </figure>
          </div>
          <div className="column col-3">
            <figure className="avatar avatar-xl">
              <img src="https://picturepan2.github.io/spectre/img/avatar-2.png" />
            </figure>
          </div>
        </div> */}
        {/* <Person className="tile tile-centered">
          <div className="tile-icon">
            <div className="example-tile-icon">
              <i className="icon icon-file centered"></i>
            </div>
          </div>
          <div className="tile-content">
            <div className="tile-title">Irene</div>
            <small className="tile-subtitle text-gray"></small>
          </div>
          <div className="tile-action">
            <button className="btn btn-link">
              <InstagramIcon />
            </button>
            <button className="btn btn-link">
              <InstagramIcon />
            </button>
          </div>
        </Person>

        <Person className="tile tile-centered">
          <div className="tile-icon">
            <div className="example-tile-icon">
              <i className="icon icon-file centered"></i>
            </div>
          </div>
          <div className="tile-content">
            <div className="tile-title">Irene</div>
            <small className="tile-subtitle text-gray"></small>
          </div>
          <div className="tile-action">
            <button className="btn btn-link">
              <InstagramIcon />
            </button>
            <button className="btn btn-link">
              <InstagramIcon />
            </button>
          </div>
        </Person> */}
      </People>
    </Self>
  )
}
