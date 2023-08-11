import { useAuth } from "../hooks/useAuth";

export default function MyMatches() {
  const authContext = useAuth();

  const { currentUser } = authContext;

  return (
    <div>
      {currentUser ? (
        <h2>Welcome, {currentUser.displayName}</h2>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
}
