import React, { useRef } from "react";
import { View, Text } from "react-native";
import HMSMap, { MapTypes } from "@hmscore/react-native-hms-map";

const MapsHMS = () => {
  const mapRef = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HMSMap
        ref={mapRef}
        style={{ flex: 1, width: "100%" }}
        mapType={MapTypes.NORMAL}
        camera={{ target: { latitude: 0, longitude: 0 }, zoom: 20 }}
      />
    </View>
  );
};

export default MapsHMS;
