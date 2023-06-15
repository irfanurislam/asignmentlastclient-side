import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const ErrorPage = () => {
  const { error, status } = useRouteError();

  // Define animation properties using react-spring
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={animationProps}
    >
      <h1 className="text-3xl font-bold mb-4">Error {status || 404}</h1>
      <img
        src="https://i.ibb.co/4gGp4Rh/404-24.jpg" // Replace with the path to your error image
        alt="Error"
        className="w-72 h-64 mb-4"
      />
      <p className="text-xl text-gray-500">Page not found {error?.message}</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Go to Home
      </Link>
    </animated.div>
  );
};

export default ErrorPage;
