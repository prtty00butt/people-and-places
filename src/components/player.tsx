import React from "react"
import styled from "@emotion/styled"

// export interface PlayerOptions {
//   height?: string
//   playerVars?: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay?: 0 | 1
//     cc_lang_pref?: string
//     color?: "red" | "white"
//     controls?: 0 | 1
//     disablekb?: 0 | 1
//     enablejsapi?: 0 | 1
//     list?: string
//     listType?: "playlist" | "search" | "user_uploads"
//     modestbranding?: 0 | 1
//     playlist?: string
//     playsinline?: 0 | 1
//     rel?: 0 | 1
//     start?: number
//     widget_referrer?: string
//   }
//   width?: string
// }

const Self = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => props.theme.zIndex.player};
  label: Player;
`

const BlackCutton = styled.div``

const IframeWrapper = styled.div`
  pointer-events: none;

  > iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }
`

export default ({ id }: { id: string }) => {
  return (
    <Self>
      <IframeWrapper>
        <iframe
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&amp;mute=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1`}
          id="widget2"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </IframeWrapper>
    </Self>
  )
}
