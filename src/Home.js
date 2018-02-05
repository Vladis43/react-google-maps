import React from 'react'
import Map  from './Map'

export default (props) => {
  return (

    <div>
      <Map
        zoom={12}
        center={{ lat:47.8323527, lng:35.1252312 }}
        containerElement={ <div style={{ height: '100vh' }} /> }
        mapElement={ <div style={{ height: '100vh' }} /> }
      />
    </div>

  )
}
