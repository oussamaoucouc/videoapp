import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkButton from '../ui/LinkButton'
import Spacer from '../ui/Spacer'
import Input from '../ui/Input'
import Loader from '../ui/Loader'
import Image from 'next/image'

import * as styles from './styles'



const DashboardVideos = () => {
  const router = useRouter()

  return (
      <styles.Wrapper>
        <styles.LeftContainer>
        <styles.Title h5>FASTCAST</styles.Title>
        <Spacer y={50} />
        <styles.Icons>
        <Image src={"/videos.jpeg"} width={30} height={12.5} /><styles.TitleText href='#' h7>Videos</styles.TitleText>
        </styles.Icons>
        
        <Spacer y={50} />

        <styles.Icons>
        <Image src={"/audio.jpeg"} width={30} height={16.67} /><styles.TitleText href='#' h7>Audio</styles.TitleText>
        </styles.Icons>

        <Spacer y={50} />

        <styles.Icons>
        <Image src={"/statics.jpeg"} width={30} height={16.67} /><styles.TitleText href='#' h7>Statistics</styles.TitleText>
        </styles.Icons>

        <Spacer y={50} />

        <styles.Icons>
        <Image src={"/settings.jpeg"} width={30} height={16.67} /><styles.TitleText href='#' h7>Settings</styles.TitleText>
        </styles.Icons>

        <Spacer y={230} />

        <styles.Icons>
        <Image src={"/logout.jpeg"} width={30} height={16.67} /><styles.TitleText href='#' h7>Log out</styles.TitleText>
        </styles.Icons>

        </styles.LeftContainer>
        <styles.RightContainer>
       
        
        
        <styles.Videobar>
            
            <styles.BarTitle h4>Videos</styles.BarTitle>
            
            <styles.AddVideoButton>Add video</styles.AddVideoButton>
        </styles.Videobar>
        <Spacer y={20} />
        <styles.VideosContainer>
            <styles.Videodiv>
            <Image src={"/image1.png"} width={360} height={180} border-radius={40} />
            <Spacer y={20} />
            <styles.TitleText h5> Sophia's exclusive birthday Photoshoot</styles.TitleText>
            <styles.ButtonVideodiv>
                <styles.Crudbutton>Edit</styles.Crudbutton>
                <styles.Crudbutton>Delete</styles.Crudbutton>
            </styles.ButtonVideodiv>
            </styles.Videodiv>
            <styles.Videodiv>
            <Image src={"/image2.png"} width={360} height={180} />
            <Spacer y={20} />
            <styles.TitleText h5> Sophia's exclusive birthday Photoshoot</styles.TitleText>
            <styles.ButtonVideodiv>
                <styles.Crudbutton>Edit</styles.Crudbutton>
                <styles.Crudbutton>Delete</styles.Crudbutton>
            </styles.ButtonVideodiv>
            </styles.Videodiv>
            <styles.Videodiv>
            <Image src={"/image3.png"} width={360} height={180} />
            <Spacer y={20} />
            <styles.TitleText h5> Sophia's exclusive birthday Photoshoot</styles.TitleText>
            <styles.ButtonVideodiv>
                <styles.Crudbutton>Edit</styles.Crudbutton>
                <styles.Crudbutton>Delete</styles.Crudbutton>
            </styles.ButtonVideodiv>
            </styles.Videodiv>

            
        </styles.VideosContainer>
       
        </styles.RightContainer>
    </styles.Wrapper>
  )
}

export default DashboardVideos
