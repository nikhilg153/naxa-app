import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, LayersControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.vectorgrid";
import L from "leaflet";

const { BaseLayer, Overlay } = LayersControl;

const VectorTileLayer = ({ url }) => {
  const map = useMap();
  const layerRef = useRef(null);

  useEffect(() => {
    if (layerRef.current) {
      map.removeLayer(layerRef.current);
    }

    if (url) {
      layerRef.current = L.vectorGrid
        .protobuf(url, {
          vectorTileLayerStyles: {
            default: {
              fill: true,
              fillColor: "blue",
              fillOpacity: 0.5,
              weight: 2,
              color: "black",
              opacity: 1,
            },
          },
        })
        .addTo(map);
    }

    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
      }
    };
  }, [map, url]);

  return null;
};

const Map = () => {
  const layerUrls = {
    province:
      "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
    district:
      "https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}",
    municipality:
      "https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}",
  };

  const [activeLayer, setActiveLayer] = React.useState(layerUrls.province);

  const handleLayerChange = (e) => {
    const selectedLayer = layerUrls[e.target.value];
    setActiveLayer(selectedLayer);
  };

  return (
    <MapContainer
      center={[27.7, 85.3]}
      zoom={10}
      style={{
        height: "500px",
        width: "100%",
        marginTop: "100px",
      }}
    >
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </BaseLayer>
        <Overlay checked name="Provinces">
          <VectorTileLayer
            url={activeLayer === layerUrls.province ? layerUrls.province : null}
          />
        </Overlay>
        <Overlay name="Districts">
          <VectorTileLayer
            url={activeLayer === layerUrls.district ? layerUrls.district : null}
          />
        </Overlay>
        <Overlay name="Municipalities">
          <VectorTileLayer
            url={
              activeLayer === layerUrls.municipality
                ? layerUrls.municipality
                : null
            }
          />
        </Overlay>
      </LayersControl>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
        <select
          onChange={handleLayerChange}
          value={Object.keys(layerUrls).find(
            (key) => layerUrls[key] === activeLayer
          )}
        >
          <option value="province">Provinces</option>
          <option value="district">Districts</option>
          <option value="municipality">Municipalities</option>
        </select>
      </div>
    </MapContainer>
  );
};

export default Map;
