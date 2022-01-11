import React from 'react'
import { Avatar, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import lightCare from '../../../assets/image/light_plant_care.jpeg'
import WaterCare from '../../../assets/image/water_plants.jpg'
import HumidityCare from '../../../assets/image/humudity_care.webp'
import FertilizeCare from '../../../assets/image/fertilizeCare.jpg'
import PestsCare from '../../../assets/image/pests_care.jpeg'
import MoreTipsCare from '../../../assets/image/more_tips_care.jpeg'

const PlantCare = () => {
  const navigate = useNavigate()
  const handleCheckoutClick = () => {
    window.scrollTo({ top: 0 })
    navigate('/shop')
  }

  return (
    <Box
      sx={{
        background: '#FBFBFB',
        paddingTop: 1,
        paddingBottom: 3
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: 20, sm: 30, md: 50, lg: 70 } }}>
          Welcome to <span style={{ color: '#46A358' }}>Houseplant Growing Guides!</span>
        </Typography>
      </Box>
      <Box
        sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: 1, justifyContent: 'space-around' }}
      >
        <Box sx={{ paddingTop: 1 }}>
          <Avatar
            variant="rounded"
            src={lightCare}
            alt="light_care"
            sx={{ width: 300, height: 300 }}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 300,
            paddingBottom: 2
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Light</Typography>
          <Typography>
            <span style={{ color: '#46A358' }}>Plants</span> that can tolerate full sun and bright
            light thrive in south-facing windows (examples are cacti, aloe vera, tropical hibiscus,
            Lantana, and ponytail palms). Plants that like partial shade or moderate light do best
            in east- and west-facing windows (examples are ficus, phildendrons, monstera, and
            bromeliads).
          </Typography>

          <Button variant="outlined" onClick={handleCheckoutClick}>
            Start Care
          </Button>
        </Box>

        <Box sx={{ paddingTop: 1 }}>
          <Avatar
            variant="rounded"
            src={WaterCare}
            alt="light_care"
            sx={{ width: 300, height: 300 }}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 300,
            paddingBottom: 2
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Water</Typography>
          <Typography>
            <span style={{ color: '#46A358' }}>Starting </span> in late fall, water houseplants
            sparingly until daylight hours begin to increase in the new year. The best time of day
            to water is in the morning, except when it is cloudy or rainy outside and there will no
            sunlight. Avoid watering on a fixed schedule; instead, check the soil and water when
            needed.
          </Typography>

          <Button variant="outlined" onClick={handleCheckoutClick}>
            Start Care
          </Button>
        </Box>

        <Box sx={{ paddingTop: 1 }}>
          <Avatar
            variant="rounded"
            src={HumidityCare}
            alt="light_care"
            sx={{ width: 300, height: 300 }}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 300,
            paddingBottom: 2
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Humidity</Typography>
          <Typography>
            <span style={{ color: '#46A358' }}>Humidity </span> is a tough factor to perfect, as
            most homes are fairly dry—especially in the winter. Here are some things to consider
            about humidity: Many of the most common houseplants come from tropical regions, where
            humidity is naturally high. They will berelative humidity is kept at 50 percent or
            higher.
          </Typography>

          <Button variant="outlined" onClick={handleCheckoutClick}>
            Start Care
          </Button>
        </Box>
        <Box sx={{ paddingTop: 1 }}>
          <Avatar
            variant="rounded"
            src={FertilizeCare}
            alt="light_care"
            sx={{ width: 300, height: 300 }}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 300,
            paddingBottom: 2
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Fertilizer</Typography>
          <Typography>
            <span style={{ color: '#46A358' }}>Most </span> houseplants respond well to feeding, but
            be sure to follow the instructions included with whichever fertilizer you buy. Too much
            fertilizer can be detrimental to a plant’s health, so don’t fertilize more than
            necessary.Houseplants will be especially sensitive to overfeeding at this time of year.
          </Typography>

          <Button variant="outlined" onClick={handleCheckoutClick}>
            Start Care
          </Button>
        </Box>
        <Box sx={{ paddingTop: 1 }}>
          <Avatar
            variant="rounded"
            src={PestsCare}
            alt="light_care"
            sx={{ width: 300, height: 300 }}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 300,
            paddingBottom: 2
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Pests</Typography>
          <Typography>
            <span style={{ color: '#46A358' }}>Pests</span> Pests can be a real problem. They
            usually appear after outdoor plants are brought inside for the winter, or when a new
            houseplant is brought home. To get rid of bugs in houseplants, push a clove of garlic
            into the plant’s soil. If the garlic sprouts and grows, just cut it back. Spider mites
            are apt to thrive in warm, dry houses.
          </Typography>

          <Button variant="outlined" onClick={handleCheckoutClick}>
            Start Care
          </Button>
        </Box>
        <Box sx={{ paddingTop: 1 }}>
          <Avatar
            variant="rounded"
            src={MoreTipsCare}
            alt="light_care"
            sx={{ width: 300, height: 300 }}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 300,
            paddingBottom: 2
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>More Houseplant Care Tips</Typography>
          <Typography>
            <span style={{ color: '#46A358' }}>Even</span> Even indoors, winter conditions can be
            tough on plants. Fewer hours of sunlight, drier air, and cooler indoor temperatures can
            take their toll, so be prepared. In colder regions, houseplants that have been outside
            for the summer should be brought in in August. A sudden cold spell will be too much of a
            shock for them to survive.
          </Typography>

          <Button variant="outlined" onClick={handleCheckoutClick}>
            Start Care
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default PlantCare
