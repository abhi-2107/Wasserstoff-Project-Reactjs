import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// url for where world map is imported by react-simple-maps library
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function Worldmap() {
    return (
        <div className="worldmap">
            <ComposableMap projection="geoMercator" width={1200}>
                <Geographies geography={geoUrl}>
                    {
                        ({ geographies }) => geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} fill = "#fff" stroke='#8396EA' style={{hover: {
                                fill: "#8676FF"
                            }}}/>
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    )
}

export default Worldmap
