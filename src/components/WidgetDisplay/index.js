import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Link as RouterLink} from 'react-router-dom'

const DisplayWidget = ({ widget, onDeleteHandler }) => {
  const { description, name, price } = widget

  return (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography component="div" gutterBottom variant="h4">
              {name}
            </Typography>
            <Typography component="div" gutterBottom variant="h5">
              ${price}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {description}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete" color="primary" onClick={()=>onDeleteHandler(name)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="edit" color="secondary" component={RouterLink} to={`/add-widget/${name}`} >
                <EditIcon />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>)
}

export default DisplayWidget
