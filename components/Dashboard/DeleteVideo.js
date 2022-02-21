import React from 'react'
import * as styles from './styles'

const DeleteVideo = () => {
  return (
    <styles.Delete>
    <styles.TitleText h5>Are you sure you want to delete this video ?</styles.TitleText>
    <styles.Btnd>
    <styles.Nobtn>Cancel</styles.Nobtn>
    <styles.Delbtn>Yes, Delete it</styles.Delbtn>
    </styles.Btnd>
    </styles.Delete>
  )
}

export default DeleteVideo