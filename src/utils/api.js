export const fetchVideoTranscript = async (videoId) => {
  try {
    const apiUrl = `${import.meta.env.VITE_RAPIDAPI_URL}?video_id=${videoId}&platform=youtube`;

    const response = await fetch(apiUrl, {
      method: "GET", 
      headers: {
        "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`Server ka message: ${errorText} (Shayad video par subtitles na hon)`);
    }

    const data = await response.json();
    console.log("RapidAPI Success Response:", data);

    // Dynamic Data extraction logic
    if (data.message === 'success' && data.data && data.data.transcripts) {
      const transcriptsObj = data.data.transcripts;
      const availableLangs = Object.keys(transcriptsObj);
      const selectedLang = availableLangs[0]; 
      const transcriptContent = transcriptsObj[selectedLang];

      if (Array.isArray(transcriptContent)) {
         return transcriptContent.map(line => line.text || "").join(" ");
      }
      
      return typeof transcriptContent === 'string' 
             ? transcriptContent 
             : JSON.stringify(transcriptContent, null, 2);
    }

    throw new Error("Video ka transcript data API me nahi mila.");
    
  } catch (error) {
    console.error("API Setup Error: ", error.message);
    throw error;
  }
};






// export const fetchVideoTranscript = async (videoId) => {
//   try {
//     const apiUrl = `${import.meta.env.VITE_RAPIDAPI_URL}?video_id=${videoId}&platform=youtube`;

//     const response = await fetch(apiUrl, {
//       method: "GET", 
//       headers: {
//         "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
//         "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
//       },
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("API Error Response:", errorText);
//       throw new Error(`Server ka message: ${errorText} (Shayad video par subtitles na hon)`);
//     }

//     const data = await response.json();
//     console.log("RapidAPI Success Response:", data);

//     // Data format ke hisaab se transcript nikalne ka logic
//     if (data.message === 'success' && data.data && data.data.transcripts) {
//       const transcriptsObj = data.data.transcripts;
      
//       const availableLangs = Object.keys(transcriptsObj);
//       const selectedLang = availableLangs[0]; 
      
//       const transcriptContent = transcriptsObj[selectedLang];

//       if (Array.isArray(transcriptContent)) {
//          return transcriptContent.map(line => line.text || "").join(" ");
//       }
      
//       return typeof transcriptContent === 'string' 
//              ? transcriptContent 
//              : JSON.stringify(transcriptContent, null, 2);
//     }

//     throw new Error("Video ka transcript data API me nahi mila.");
    
//   } catch (error) {
//     console.error("API Setup Error: ", error.message);
//     throw error;
//   }
// };







// export const fetchVideoTranscript = async (videoId) => {
//   try {
//     const apiUrl = `${import.meta.env.VITE_RAPIDAPI_URL}?video_id=${videoId}&platform=youtube`;

//     const response = await fetch(apiUrl, {
//       method: "GET", 
//       headers: {
//         // "Content-Type": "application/json",
//         "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
//         "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("API Ka Asli Error:", errorData);
//       throw new Error(errorData.message || "Bad Request Aayi Hai");
//     }

//     const data = await response.json();
    
//     // Console me API ka actual data structure check karne ke liye
//     console.log("RapidAPI Response:", data);

//     // API jo data bhejegi, usme se transcript nikalna
//     return data.transcript || data.text || JSON.stringify(data);
    
//   } catch (error) {
//     console.error("API Error: ", error.message);
//     throw error;
//   }
// };



// export const fetchVideoTranscript = async (videoId) => {
//   try {
//     const fullVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;

//     const response = await fetch(import.meta.env.VITE_RAPIDAPI_URL, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
//         'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY
//       },
//       body: JSON.stringify({ url: fullVideoUrl }),
//     });

//     if (!response.ok) {
//       throw new Error(
//         "Transcript fetch karne me problem aayi. Shayad limit khatam ho gayi hai ya video par subtitles nahi hain.",
//       );
//     }

//     const data = await response.json();

//     console.log("RapidAPI Response:", data);

//     return data.text || data.transcript || JSON.stringify(data);
//   } catch (error) {
//     console.error("API Error: ", error.message);
//     throw error;
//   }
// };
