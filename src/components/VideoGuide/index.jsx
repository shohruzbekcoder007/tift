import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import YoutubeEmbed from '../YoutubeEmbed'
import { VideoResponsive, VideoResponsiveBox, VideoResponsiveFooter, VideoTitle } from './styles'

export default function VideoGuide() {
    return (
        <ContentWrapper>
            <VideoResponsiveBox>
                <VideoResponsive>
                    <YoutubeEmbed embedId="hNit29grY6Q" />
                </VideoResponsive>
                <VideoResponsiveFooter>
                    <VideoTitle>VideoTitle</VideoTitle>
                </VideoResponsiveFooter>
            </VideoResponsiveBox>
            <VideoResponsiveBox>
                <VideoResponsive>
                    <YoutubeEmbed embedId="hNit29grY6Q" />
                </VideoResponsive>
                <VideoResponsiveFooter>
                    <VideoTitle>Yakuniy savollarni kiritish</VideoTitle>
                </VideoResponsiveFooter>
            </VideoResponsiveBox>
            <VideoResponsiveBox>
                <VideoResponsive>
                    <YoutubeEmbed embedId="hNit29grY6Q" />
                </VideoResponsive>
                <VideoResponsiveFooter>
                    <VideoTitle>HEMIS tizimidan baholarni olib o'tish</VideoTitle>
                </VideoResponsiveFooter>
            </VideoResponsiveBox>
        </ContentWrapper>
    )
}
