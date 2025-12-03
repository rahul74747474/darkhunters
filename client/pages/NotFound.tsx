import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dh-black py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-8xl font-display font-bold text-dh-gold">404</div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-dh-white">Page Not Found</h1>
        <p className="text-lg text-dh-silver/80 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back to the action.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
