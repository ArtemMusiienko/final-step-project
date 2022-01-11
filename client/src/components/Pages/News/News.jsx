import React, { useState } from 'react'
import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { Box } from '@mui/system'
import { newsInfo } from './newsInfo'

const NewsCard = ({ date, image, title, shortDescription, description }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card sx={{ display: { xs: 'block', md: 'flex' }, borderRadius: 0, boxShadow: 0 }}>
        <CardMedia component="img" sx={{ width: 320, height: 300 }} image={image} alt="plant" />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Box sx={{ display: 'flex', marginBottom: '15px' }}>
              <CalendarTodayIcon sx={{ marginRight: '5px' }} />
              <Typography>{date}</Typography>
            </Box>
            <Typography component="div" variant="h4">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {shortDescription}
            </Typography>
            {isOpen && (
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {description}
              </Typography>
            )}
            <Button
              onClick={() => setOpen(!isOpen)}
              variant="contained"
              size="small"
              sx={{ marginTop: '30px' }}
            >
              {isOpen ? 'Close news' : 'Read more'}
            </Button>
          </CardContent>
        </Box>
      </Card>
      <Divider sx={{ marginTop: '20px' }} />
    </Grid>
  )
}

const News = () => (
  <Grid container gap="20px" sx={{ padding: '20px 30px' }}>
    {newsInfo.map((props, key) => (
      <NewsCard key={props.title} {...props} />
    ))}
  </Grid>
)

export default News
