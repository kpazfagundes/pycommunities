// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: -19.9206292,
//       lng: -43.9223219
//     },
//     zoom: 20
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key:'AIzaSyBqk4jm64RI3vUxP8aHn5w-EhQpXs6c3b4'}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={-19.9206292}
//             lng={-43.9223219}
//             text={'CI&T'}
            
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;

import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '95%',
  height: '95%',  
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: -19.920293, lng: -43.9198396}}>
        <Marker
          onClick={this.onMarkerClick}
          name={'PyCommunities Experience: Sede da CI&T (Av. dos andradas, 3000 - 3° andar - Santa Efigênia/Belo Horizonte)'}
          
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqk4jm64RI3vUxP8aHn5w-EhQpXs6c3b4'
})(MapContainer);

// export default GoogleApiWrapper(
//   (props) => ({
//     apiKey: props.apiKey
//   }
// ))(MapContainer)