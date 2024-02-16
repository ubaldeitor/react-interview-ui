import React, { useEffect, useState } from 'react'

import WidgetDisplay  from '../WidgetDisplay'
import { fetchAllWidgets } from '../../lib/apiConnect'

const WidgetList = () => {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    fetchAllWidgets()
      .then(setWidgets)
      .catch((error) => console.error('Error fetching widgets', error))
  }, [])

  return (
    <div className={'widget-list'}>
      <div> List of widgets:</div>
      {widgets.map((current, index) => <WidgetDisplay key={index} widget={current} />)}
    </div>
  )
}

export default WidgetList
