import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = () => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Replace with your video URL
        style={styles.video}
        controls={true} // Show play/pause controls
        resizeMode="cover"
        onEnd={() => console.log('Video Ended')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  video: { width: '100%', height: '100%' },
});

export default VideoScreen;
