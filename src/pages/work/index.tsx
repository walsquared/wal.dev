import React from 'react'
import styled from 'styled-components'

import { Button } from 'components'

import Card from './card'

import cuHacking from './cuHacking-preview.svg'
import cuHacking2020 from './cuHacking-2020-preview.svg'
import Ribbon from './ribbon-preview.svg'
import SavingCindi from './saving-cindi-preview.svg'

const WorkPage = () => (
  <>
    <Card
      title='cuHacking'
      subtitle='Director of Development'
      description='Leading a team of developers in creating some cool software.'
      buttonProps={{ disabled: false, label: 'Read More' }}
      themeColors={['#7C39BF', '#00D0FE', '#280749']}
      preview={cuHacking}
    />
  </>
)

export default WorkPage
