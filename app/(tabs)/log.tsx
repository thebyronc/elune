import {useState, useEffect, useRef} from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [time, setTime] = useState(0);
  let timeInterval = useRef<any>(null);

  const handleTimerButton = () => {
    if (!isTimerActive) {
      //start
      setIsTimerActive(true);
      timeInterval.current = setInterval(() => setTime(prevCount => prevCount + 1), 1000);
    } else {
      // stop
      setIsTimerActive(false);
      clearInterval(timeInterval.current);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="add-circle" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BC Log</ThemedText>
      </ThemedView>
      <ThemedText>
        isTimerActive: {isTimerActive ? 'true' : 'false'}
      </ThemedText>

      <ThemedText>
        time: {time}
      </ThemedText>
      <Pressable style={styles.button} onPress={handleTimerButton}>
        <ThemedText>
          {isTimerActive ? 'Stop' : 'Start'} Sleep Timer
        </ThemedText>
      </Pressable>
      <Pressable style={styles.button} onPress={handleTimerButton}>
        <ThemedText>
         Track Feed
        </ThemedText>
      </Pressable>
      <Pressable style={styles.button} onPress={handleTimerButton}>
        <ThemedText>
          Track Pee/Poo
        </ThemedText>
      </Pressable>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
});
