import React from 'react'
import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import image from '../../../assets/image/plant-care.png'

const useStyle = makeStyles(theme => {
  return {
    title: {
      marginTop: '24px',
      textAlign: 'center'
    },
    articleWrapper: {
      padding: '0 30%'
    },
    articleTitle: {
      textAlign: 'center',
      marginTop: '4rem',
      color: '#46A358'
    },
    articleText: {
      marginTop: '15px'
    }
  }
})

const PlantCare = () => {
  const classes = useStyle()

  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          style={{ marginTop: '2rem', marginBottom: '2rem', color: '#46A358' }}
          className={classes.title}
        >
          Our Top 7 Plant Care Tips
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: 'center', marginBottom: '3rem' }}
          className={classes.title}
        >
          There are plenty of ways to care for your plant. With the help of our plant experts, we’ve
          weeded out the top 7 tips for healthy, happy plants.
        </Typography>
        <img src={image} alt="" style={{ height: '100%', width: '100%' }} />
      </Box>
      <Box className={classes.articleWrapper}>
        <Typography variant="h5" className={classes.articleTitle}>
          1.Choose plants based on your light{' '}
        </Typography>
        <Typography className={classes.articleText}>
          Are the plants you love the ones you can have? Our #1 rule of (green) thumb is to
          determine the amount of natural light your space receives, and to choose your plant
          accordingly. If you’re not sure just by looking, start by figuring out which direction
          your windows face.
        </Typography>
        <Typography className={classes.articleText}>
          Generally speaking, south-facing windows give bright light, east & west-facing windows
          give moderate light, and north-facing windows give low light. If there’s something outside
          your window—for example, a large tree or building—that could obstruct sunlight, make sure
          to take that into consideration, too. Most houseplants prefer bright, indirect sunlight,
          but many can tolerate lower light levels (like low light tolerant snake plants and ZZ
          plants).
        </Typography>
        <Typography className={classes.articleText}>
          If the sun is intense through your windows, you may want to add a sheer curtain to diffuse
          the light. Cacti and some succulents like aloe can handle brighter, direct sunlight. You
          don’t want to overexpose or underexpose any plant so keep an eye on them if they&aposs;re
          very bright or very low light.
        </Typography>
        <Typography variant="h5" className={classes.articleTitle}>
          2. Pick plants that work with your schedule{' '}
        </Typography>
        <Typography className={classes.articleText}>
          New to plant parenthood? A busy work schedule, social life, and general forgetfulness can
          lead to unintentional plant neglect. It’s okay. Some plants can handle that kind of
          lifestyle. A jet-setter like yourself will enjoy the resilience of low-maintenance and
          drought-tolerant succulents, ZZ plants, or snake plants, all pretty low key, as long as
          they have enough light (bright and low light respectively). These should keep looking
          their best when you return from your next trip.
        </Typography>
        <Typography className={classes.articleText}>
          If you’ve got more time, you can try a few attention-loving air plants, orchids, or ferns.
          Like a mist for the face, an extra spritz of filtered water daily between waterings keeps
          humidity levels nice and balanced for these delicate plants.
        </Typography>
        <Typography variant="h5" className={classes.articleTitle}>
          3.Be mindful when watering
        </Typography>
        <Typography className={classes.articleText}>
          Its better to under water your plants than to overwater. Too much water can lead to root
          rot. Ditch your watering schedule and water your plant only when it needs it. Check the
          potting mix or soil first to make sure it’s dry at least 2 inches deep below the surface.
          If your soil looks dark in color, feels moist, and sticks to your finger, your plant has
          enough water to do its thing for now.
        </Typography>
        <Typography className={classes.articleText}>
          How often you water will also change throughout the year. Plants need less water in the
          winter months, when they’re growing slower, the days are shorter and sunlight is less
          intense. If the heat is on and their soil is drying out quicker, they may need a bit more
          water. Wilting leaves or soil that looks pulled away from the sides of the planter are
          signs of a thirsty plant.
        </Typography>
        <Typography className={classes.articleText}>
          Always use warm water because it absorbs best. Pour water directly on the soil around the
          base of the plant, because plants absorb water from their roots. The only exception here
          is Epiphytes, like air plants, who absorb water through their leaves.
        </Typography>
        <Typography variant="h5" className={classes.articleTitle}>
          4.Raise humidity levels when needed{' '}
        </Typography>
        <Typography className={classes.articleText}>
          Staying true to your plant&aposs; natural environment will help your plant thrive indoors.
          Most tropical plants prefer high humidity and bright to moderate, indirect light. During
          the dry months of winter, grouping similar plants together helps to create a more humid
        </Typography>
        <Typography className={classes.articleText}>
          Staying true to your plant’s natural environment will help your plant thrive indoors. Most
          tropical plants prefer high humidity and bright to moderate, indirect light. During the
          dry months of winter, grouping similar plants together helps to create a more humid
          microclimate. A humidifier can help too and it’s great for humans (find more ways to
          increase humidity levels here). On the other hand, most desert dwellers like cacti and
          succulents prefer dry air and bright, direct light with no shade at all. They don’t much
          care for humidity.
        </Typography>
        <Typography variant="h5" className={classes.articleTitle}>
          5.Always keep temperatures stable{' '}
        </Typography>
        <Typography className={classes.articleText}>
          Keep your plant’s home environment as stable as possible. Extreme changes can stress
          plants out. Keep the temperature between 65 and 85 degrees F, and avoid placing your
          plants near radiators, A/C units, and forced-air vents, which can create hot or cold
          drafts.
        </Typography>
        <Typography variant="h5" className={classes.articleTitle}>
          6.Know when to skip the fertilizer
        </Typography>
        <Typography className={classes.articleText}>
          Be mindful when using fertilizer on your houseplants. Too much fertilizer can do more harm
          than good. Houseplants tend to not need fertilizer as often as outdoor plants do. If you
          do choose to fertilize your plant, it’s best to do so during the growing season (early
          spring to early fall) and follow the general rule of thumb: ‘less is more’. Most
          store-bought fertilizers should be diluted with water before use.
        </Typography>
        <Typography variant="h5" className={classes.articleTitle}>
          7.Shop from a reliable source{' '}
        </Typography>
        <Typography className={classes.articleText}>
          Be mindful when using fertilizer on your houseplants. Too much fertilizer can do more harm
          than good. Houseplants tend to not need fertilizer as often as outdoor plants do. If you
          do choose to fertilize your plant, its best to do so during the growing season (early
          spring to early fall) and follow the general rule of thumb: ‘less is more’. Most
          store-bought fertilizers should be diluted with water before use.
        </Typography>
      </Box>
    </Container>
  )
}
export default PlantCare
