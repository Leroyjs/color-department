import { useState } from 'react'
import {
  Popovers,
  Preloader,
  Footer,
  Header,
  IntroAboutTextBlock,
  PhotoStartScreen,
  PreTitleSlider,
  RunningLineLink,
  DetailCardModal,
  Slider,
} from 'components'
import { colors } from 'styles'
import { getContent } from '../utils'

const ArrayImages = [
  'https://i.postimg.cc/XpHKgYBn/img-01.jpg',
  'https://i.postimg.cc/zVXSWgBd/img-02.jpg',
  'https://i.postimg.cc/fkvfJKwt/img-03.jpg',
  'https://i.postimg.cc/HjmtYKC1/img-04.jpg',
]

const DEMO_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
const slides = [
  {
    id: 29,
    title: 'Vel iste vel fuga.',
    description: 'Libero dignissimos porro sit et qui.',
    year: '2019',
    credentials: {
      client: 'Archangel Studios',
      colorist: 'Archangel Studio',
      director: 'OZZIE PULLIN',
      other: 'ANDRIC WATSON',
    },
    video: DEMO_VIDEO,
    preview:
      'https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d',
    photos: '',
  },
  {
    id: 29,
    title: 'El corte ingles',
    preview: '',
    client: 'Archangel Studios',
    colourist: 'Archangel Studios',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'Lil pump',
    preview:
      'https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d',
    client: 'JACK MCGINITY',
    colourist: 'JACK MCGINITY',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'Balkan line',
    preview:
      'https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d',
    client: 'ANDRIC WATSON',
    colourist: 'ANDRIC WATSON',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'Paranormal drive',
    preview:
      'https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d',
    client: 'Find out more',
    colourist: 'Find out more',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'Zolla',
    preview:
      'https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d',
    client: 'vimeocdn',
    colourist: 'vimeocdn',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'In the hood',
    preview:
      'https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d',
    client: 'El corte ingles',
    colourist: 'El corte ingles',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'projects',
    preview:
      'https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d',
    client: 'Studios',
    colourist: 'Studios',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'All categories',
    preview:
      'https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d',
    client: 'Archangel',
    colourist: 'Archangel',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'All genres',
    preview:
      'https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d',
    client: 'Balkan line',
    colourist: 'Balkan line',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    id: 29,
    title: 'Select corourist',
    preview:
      'https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d',
    client: 'JACK MCGINITY KEY ERR',
    colourist: 'JACK MCGINITY KEY ERR',
    video: {
      mp4: DEMO_VIDEO,
    },
  },
]

const Team = ({ employees }) => {
  const [isOpen, setOpen] = useState(false)
  const [currentModalId, setCurrentModalId] = useState(-1)
  return (
    <>
      <Preloader />
      <Header />
      <PhotoStartScreen
        arrayOfImages={ArrayImages}
        title={['We are', 'color department']}
      />
      <main style={{ backgroundColor: colors.black }}>
        <IntroAboutTextBlock pt="xlg" />

        {employees.map(([subtitle, options], index) => {
          if (index === 0)
            return (
              <Popovers
                key={subtitle}
                options={options}
                subtitle={subtitle}
                title="We are bold"
                mt="xlg"
                mb="lg"
                onClick={(modalId) => {
                  setCurrentModalId(modalId)
                  setOpen(true)
                }}
              />
            )

          return (
            <Popovers
              key={subtitle}
              options={options}
              subtitle={subtitle}
              mt="lg"
              onClick={(modalId) => {
                setCurrentModalId(modalId)
                setOpen(true)
              }}
            />
          )
        })}
        <PreTitleSlider mt="xlg" mb="md">
          Look at our selected works <br />
          to evaluate our capabilities and skills
        </PreTitleSlider>
        <Slider slides={slides} />
        <RunningLineLink
          mt="lg"
          outline={'true'}
          link={'/order'}
          titles={['LET’S TALK', 'LET’S TALK', 'LET’S TALK']}
        />
        <DetailCardModal
          isOpen={isOpen}
          setOpen={setOpen}
          modalId={currentModalId}
        />
      </main>
      <Footer pt="xlg" />
    </>
  )
}

export async function getServerSideProps(context) {
  const data = (await getContent('employees')) || {}

  return {
    props: { employees: Object.entries(data) },
  }
}

export default Team
