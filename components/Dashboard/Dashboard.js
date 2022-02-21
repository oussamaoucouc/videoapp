import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkButton from '../ui/LinkButton'
import Spacer from '../ui/Spacer'
import Input from '../ui/Input'
import Loader from '../ui/Loader'
import img from '../../public/hero.png'
import Image from 'next/image'

import * as styles from './styles'



const Dashboard = () => {
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
        <Image src={"/hero.png"} width={367} height={270} />
        <Spacer y={40} />
        <styles.Title h4>You have no video!</styles.Title>
        <Spacer y={24} />
        <styles.TitleText p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis scelerisque turpis a amet fermentum.</styles.TitleText>
        <Spacer y={24} />
        <styles.AddVideoButton  htmlType="submit">
            Add video
          </styles.AddVideoButton>
        </styles.RightContainer>
    </styles.Wrapper>
  )
}

export default Dashboard
