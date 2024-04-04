import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

import WidgetDisplay  from '../WidgetDisplay'
import { fetchAllWidgets, deleteWidget } from '../../lib/apiConnect'
import { Outlet, Link as RouterLink} from 'react-router-dom'

const WidgetList = () => {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    fetchAllWidgets()
      .then(setWidgets)
      .catch((error) => console.error('Error fetching widgets', error))
  }, [])

  function deleteHandler(name) {
    console.log(`Deleting widget ${name}`)
    deleteWidget(name)
    .then(alert(`Widget ${name} deleted`))
    .catch((error) => console.error('Error deleting widget', error));

    fetchAllWidgets()
      .then(setWidgets)
      .catch((error) => console.error('Error fetching widgets', error))
  }

  return (
    <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>
      <Typography sx={{ textAlign: 'center' }} variant="h3">
        List of widgets:
      </Typography>
      <Grid container justifyContent="center" spacing={4} sx={{ paddingRight: 4, width: '100%' }}>
        {widgets.map((current, index) => <WidgetDisplay key={index} widget={current} onDeleteHandler={deleteHandler} />)}
      </Grid>
      <Grid container justifyContent="center">
        <Button component={RouterLink} to="/add-widget">Add Widget</Button>
      </Grid>
      <Outlet />
    </Stack>
  )
}

export default WidgetList
