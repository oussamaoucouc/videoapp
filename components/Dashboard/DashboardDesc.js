import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkButton from '../ui/LinkButton'
import Spacer from '../ui/Spacer'
import Input from '../ui/Input'
import Loader from '../ui/Loader'
import Image from 'next/image'

import * as styles from './styles'



const DashboardDesc = () => {
  const router = useRouter()

  return (
      <styles.WrapperDesc>
       <styles.WrapperDescChild>
           New video
       </styles.WrapperDescChild>
       <styles.WrapperDescChildren>
           <styles.RowFlex>
               <h5>Title (required)</h5>
               <styles.Contenu>Sophia's Exclusive Birthday</styles.Contenu>
               <h5>Description</h5>
               <styles.Contenu2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra egestas quam a lectus.</styles.Contenu2>
               <h5>Thumbnail</h5>
               <styles.ImageTitle>
               <Image src={"/image7.png"} width={346} height={81} />
               </styles.ImageTitle>
            

           </styles.RowFlex>
           <styles.RowFlex2>
           <Image src="/image8.png" style={{aspectRatio: '1/1'}} width={440} height={360} />
           <styles.RowFlex2Child>
           <h5>Sophia's Exclusive Birthday</h5>
           <Spacer y={15} />
           <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra egestas quam a lectus.</div>
           <Spacer y={15} />
           <h5>VIDEO LINK</h5>
           <Spacer y={15} />
           <div>https://video.com/ksnfekd</div>
           </styles.RowFlex2Child>
           </styles.RowFlex2>
       </styles.WrapperDescChildren>
       <styles.WrapperDescChild2>
           <styles.AddVideoButton>Save</styles.AddVideoButton>
       </styles.WrapperDescChild2>
      </styles.WrapperDesc>
  )
}

export default DashboardDesc
