import UserModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";
import { message } from "antd";

export const saveCurrentUserToMongoDB = async () => {
  try {
    const currentUserData = await currentUser();
    // Check if user already exists in the database
    const email = currentUserData?.emailAddresses[0]?.emailAddress;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return {
        success: true,
        message: message.success("User already exists"),
        data: JSON.parse(JSON.stringify(existingUser)),
      };
    }

    const userPayload = {
      name: currentUserData?.firstName + " " + currentUserData?.lastName,
      email: currentUserData?.emailAddresses[0]?.emailAddress,
      profilePic: currentUserData?.imageUrl,
      clerkUserId: currentUserData?.id,
      isAdmin: false,
      isActive: true,
    };
    const user = new UserModel(userPayload);
    const newUserData = await user.save();
    return {
      success: true,
      message: message.success("User saved successfully"),
      data: JSON.parse(JSON.stringify(newUserData)),
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
};
