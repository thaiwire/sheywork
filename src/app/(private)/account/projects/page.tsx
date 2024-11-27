import React from "react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function UserAccountProjectPage() {
  const currentUserDate = await currentUser();
  const userName = currentUserDate?.firstName + " " + currentUserDate?.lastName;
  const clerkUserid = currentUserDate?.id;
  const userEmail = currentUserDate?.emailAddresses[0].emailAddress;
  const userProfilePic = currentUserDate?.imageUrl;

  console.log(currentUserDate);
  return (
    <div className="p-5">
      <h1>Project</h1>
      <UserButton />
      <h1>Clerk UserID : {clerkUserid}</h1>
      <h1>User Name : {userName}</h1>
      <h1>User Email : {userEmail}</h1>
      <h1>
        User Profile Pic :
        <img
          src={userProfilePic}
          alt="profile"
          className="w-20 h-20 rounded-full"
        />{" "}
      </h1>
      <h1>{}</h1>
    </div>
  );
}

export default UserAccountProjectPage;
