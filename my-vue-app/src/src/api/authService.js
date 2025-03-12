import apiClient from "./apiClient";

export const loginOrSignUp = async (email, fcmToken, identity) => {
  try {
    const response = await apiClient.post("/client/user/loginOrSignUp", {
      loginType: 2, // Adjust based on your login method
      fcmToken,
      identity,
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Login API Error:", error.response?.data || error.message);
    throw error;
  }
};

//slice
//reducer
//thunk
