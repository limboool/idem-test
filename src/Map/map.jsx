import { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./Map.index.scss";

const mapState = { center: [54.3, 48.4], zoom: 12, controls: [] };

const addresses = [
  {
    id: 1,
    data: { content: "КРАСОТА И ЗДОРОВЬЕ 7" },
    options: { selectOnClick: false },
    iconImageHref: "/img/pharmacy.png",
    coords: [
      [54.3, 48.3],
      [54.28, 48.32],
      [54.35, 48.28],
    ],
  },
  {
    id: 2,
    data: { content: "МАГАЗИНЫ 7" },
    options: { selectOnClick: false },
    iconImageHref: "/img/shop.png",
    coords: [
      [54.3, 48.25],
      [54.29, 48.26],
      [54.27, 48.24],
    ],
  },
  {
    id: 3,
    data: { content: "ОБУЧЕНИЕ 7" },
    options: { selectOnClick: false },
    iconImageHref: "/img/school.png",
    coords: [
      [54.33, 48.48],
      [54.34, 48.45],
      [54.32, 48.5],
    ],
  },
  {
    id: 4,
    data: { content: "ДЕТСАД 7" },
    options: { selectOnClick: false },
    iconImageHref: "/img/kinder.png",
    coords: [
      [54.3, 48.53],
      [54.31, 48.55],
      [54.28, 48.51],
    ],
  },
  {
    id: 5,
    data: { content: "ОТДЫХ, РАЗВЛЕЧЕНИЯ 7" },
    options: { selectOnClick: false },
    iconImageHref: "/img/rest.png",
    coords: [
      [54.3, 48.33],
      [54.31, 48.32],
      [54.28, 48.35],
    ],
  },
];

const getPointData = (index) => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>",
  };
};

const getPointOptions = (imageSrc) => {
  return {
    iconLayout: "default#image",
    iconImageHref: imageSrc,
    iconImageSize: [75, 75],
    iconImageOffset: [-15, -15],
  };
};

const Maps = () => {
  const [state, setState] = useState();
  const [addressIndex, setAddressIndex] = useState(0);

  const onItemClick = (coords, index) => {
    setState({ center: coords });
    setAddressIndex(index);
  };
  return (
    <YMaps>
      <div className="card">
        <div className="onTheMap">
          <p>на карте</p>
          <div className="span_content">
            {addresses.map((address, index) => (
              <div className="button_content">
                <span key={address.id}>
                  <button onClick={() => onItemClick(address.coords[0], index)}>
                    {address.data.content}
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="map">
          <Map width="100%" height="100%" state={state} defaultState={mapState}>
            {addresses.map((address, index) =>
              Array.isArray(address.coords[0]) ? (
                address.coords.map((coord, innerIndex) => (
                  <Placemark
                    key={`${address.id}_${innerIndex}`}
                    geometry={coord}
                    properties={getPointData(innerIndex)}
                    options={getPointOptions(address.iconImageHref)}
                    visible={addressIndex === index}
                  />
                ))
              ) : (
                <Placemark
                  key={address.id}
                  geometry={address.coords}
                  properties={getPointData(index)}
                  options={getPointOptions(address.iconImageHref)}
                  visible={addressIndex === index}
                />
              )
            )}
          </Map>
        </div>
      </div>
    </YMaps>
  );
};

export default Maps;