import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
