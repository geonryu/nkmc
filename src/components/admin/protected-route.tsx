import { Navigate } from "../../../node_modules/react-router-dom/dist/index";
import { auth } from "../../firebase";

export default function ProtectedRoute({children} : {children:React.ReactNode}) {
    const user = auth.currentUser;
    if(!user) {
        return <Navigate to="/login" />
    }
    return children;
}