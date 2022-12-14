import React, { useState } from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/Menu/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    const [valueFilter, setValueFilter] = useState("")

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valueFilter={valueFilter} setValueFilter={setValueFilter} />
                <Header />
                <Timeline searchValue={valueFilter} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    )
}

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgoundLevel1};
    
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display:flex;
        align-items:center;
        width:100%;
        padding:16px 32px;
        gap: 16px;
    }
`

const StyledBanner = styled.div`
    background-image: url(${config.bg});
    height: 300px;
`

function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />

                <div>
                    <h2> {config.name} </h2>
                    <p> {config.job} </p>
                </div>
            </section>

        </StyledHeader>
    )
}

function Timeline({ searchValue, ...props }) {
    const playlistsNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsName) => {
                const videos = props.playlists[playlistsName]
                return (
                    <section key={playlistsName}>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumn} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

export default HomePage