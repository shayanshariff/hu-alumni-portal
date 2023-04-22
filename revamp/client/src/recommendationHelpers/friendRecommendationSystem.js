
import { fetchAllPosts } from "../api";

const cosineSimilarity = (vectorA, vectorB) => {

  if (!Array.isArray(vectorA) || !Array.isArray(vectorB)) {
    console.error('Invalid input vectors:', vectorA, vectorB);
    return 0;
  }
    const dotProduct = vectorA.reduce((sum, a, index) => sum + a * vectorB[index], 0);
    const magnitudeA = Math.sqrt(vectorA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vectorB.reduce((sum, b) => sum + b * b, 0));
  
  
    const similarity = (magnitudeA === 0 || magnitudeB === 0) ? 0 : dotProduct / (magnitudeA * magnitudeB);
    
  
    return similarity;
  };


  
  
  export const createInteractionMatrix = async (users, userLikesData) => {
    const interactionMatrix = [];
  
    try {
      const { data: allPosts } = await fetchAllPosts(); // Fetch all posts directly
      console.log("All Posts:", allPosts);
  
      for (const user of users) {
        const interactionVector = new Array(allPosts.length).fill(0.001);
  
        const matrixEntry = {
          userId: user._id,
          vector: interactionVector,
        };
  
        const userLikes = userLikesData[user._id];
        if (userLikes) {
          for (const postId of userLikes) {
            const postIndex = allPosts.findIndex((post) => post._id === postId);
            console.log(`Liked Post Index for ${postId}:`, postIndex);
            console.log("user: ", user._id);
            console.log("vector: ", interactionVector);
            if (postIndex !== -1) {
              interactionVector[postIndex] = 1;
            }
          }
        }
  
        interactionMatrix.push(matrixEntry);
      }
    } catch (error) {
      console.error("Error creating interaction matrix:", error);
    }
    console.log("Interaction Matrix:", interactionMatrix);
  
    return interactionMatrix;
  };
  
  
  
  
  // 2. Calculate similarity scores
  export const calculateSimilarityScores = async (interactionMatrix) => {
   
    const numUsers = interactionMatrix.length;
    const similarityScores = [];
  
    for (let i = 0; i < numUsers; i++) {
      const userSimilarities = [];
      for (let j = 0; j < numUsers; j++) {
        const similarity = cosineSimilarity(interactionMatrix[i].vector, interactionMatrix[j].vector);
        userSimilarities.push({ userId: interactionMatrix[j].userId, similarity });
      }
      similarityScores.push({ userId: interactionMatrix[i].userId, scores: userSimilarities }); // Add the userId property here
    }
 
    return similarityScores;
  };

  export const generateFriendRecommendations = (targetUserId, allUsersData, similarityScores) => {
    const finalSimilarityScores = [];
    const currentUserScores = similarityScores.find(row => row.userId === targetUserId).scores;
  
    for (let otherUser of allUsersData) {
      if (targetUserId !== otherUser._id) {
        const otherUserScore = currentUserScores.find(row => row.userId === otherUser._id);
  
        if (otherUserScore) {
          finalSimilarityScores.push({
            userId: otherUser._id,
            similarity: otherUserScore.similarity,
          });
        } else {
          console.warn(`Score not found for user: ${otherUser._id}`);
        }
      }
    }
    console.log("Final Similarity Scores:", finalSimilarityScores);
    return finalSimilarityScores;
  };
