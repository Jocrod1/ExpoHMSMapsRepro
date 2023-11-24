import HMSAvailability, {
  ErrorCode,
} from "@hmscore/react-native-hms-availability";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapsHMS from "./MapsHMS";

export default function App() {
  const [hmsAvailable, setHmsAvailable] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const hmsQuery =
          await HMSAvailability.isHuaweiMobileServicesAvailable();

        setHmsAvailable(hmsQuery == ErrorCode.HMS_CORE_APK_AVAILABLE);
      } catch (error) {
        return null;
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>HMS is {hmsAvailable ? "Available" : "Not Available"}</Text>
      <View style={{ backgroundColor: "red", height: 100 }}></View>
      <MapsHMS />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
