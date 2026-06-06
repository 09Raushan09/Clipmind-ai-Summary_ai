import { useState } from 'react';
import { fetchVideoTranscript } from '../utils/api';

export const useFetchSummary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTranscript = async (videoId) => {
    setLoading(true);
    setError(null);
    try {
      const transcript = await fetchVideoTranscript(videoId);
      setLoading(false);
      return transcript;
    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading(false);
      return null;
    }
  };

  return { getTranscript, loading, error };
};



// import { useState, useCallback } from 'react';
// import { getYouTubeId } from '../utils/youtubeParser';
// import { fetchVideoTranscript } from '../utils/api';

// export const useFetchSummary = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [transcript, setTranscript] = useState("");

//   const processVideo = useCallback(async (url) => {
//     setIsLoading(true);
//     setError(null);
//     setTranscript("");

//     try {
//       const videoId = getYouTubeId(url);
      
//       if (!videoId) {
//         throw new Error("Invalid YouTube Link! Kripya sahi URL enter karein.");
//       }

//       console.log(`✅ Video ID extracted: ${videoId}`); // Debugging ke liye
      
//       // Step 2: Transcript extract karna
//       const textData = await fetchVideoTranscript(videoId);
      
//       if (!textData) {
//         throw new Error("Is video me koi text ya subtitle nahi mila.");
//       }

//       setTranscript(textData);
//       return { success: true, data: textData };

//     } catch (err) {
//       setError(err.message);
//       return { success: false, error: err.message };
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   return { processVideo, isLoading, error, transcript };
// };