'use client'
import { getUserByEmail } from "@/app/actions/users/getUserByEmail";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React from "react";

const ProfileComp: React.FC = () => {
  const { data: session, status } = useSession();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", session?.user?.email],
    queryFn: () =>
      getUserByEmail({
        email: session?.user?.email ?? "",
      }),
    enabled: !!session?.user?.email,
  });

  if (status === "loading")
    return <div>Loading session...</div>;
  if (status === "unauthenticated")
    return <div>Access denied</div>;

  if (isLoading)
    return <div>Loading user data...</div>;
  if (error)
    return (
      <div>Error: {(error as Error).message}</div>
    );
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      {/* Add more user data fields here */}
    </div>
  );
};

export default ProfileComp;
