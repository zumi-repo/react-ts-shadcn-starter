import { useState } from "react";

import { Button } from "@/components/ui/button";

interface Props extends React.ComponentProps<"div"> {}

export const Home = ({ ...rest }: Props) => {
  // List of cool gradient combinations
  const gradients = [
    "from-indigo-900 to-purple-800",
    "from-blue-900 to-teal-800",
    "from-purple-900 to-pink-800",
    "from-rose-900 to-amber-800",
    "from-emerald-900 to-cyan-800",
    "from-violet-900 to-fuchsia-800",
  ];

  // List of button color combinations
  const buttonColors = [
    "text-purple-900 bg-cyan-400 hover:bg-cyan-300 hover:shadow-cyan-500/30",
    "text-blue-900 bg-emerald-400 hover:bg-emerald-300 hover:shadow-emerald-500/30",
    "text-gray-900 bg-amber-400 hover:bg-amber-300 hover:shadow-amber-500/30",
    "text-indigo-900 bg-rose-400 hover:bg-rose-300 hover:shadow-rose-500/30",
    "text-green-900 bg-violet-400 hover:bg-violet-300 hover:shadow-violet-500/30",
  ];

  // State for current gradient and button color
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);
  const [currentButtonColor, setCurrentButtonColor] = useState(buttonColors[0]);

  // Function to randomize the gradient and button color
  const randomizeStyles = () => {
    // Get random gradient (excluding current one)
    let newGradient;
    do {
      newGradient = gradients[Math.floor(Math.random() * gradients.length)];
    } while (newGradient === currentGradient && gradients.length > 1);

    // Get random button color (excluding current one)
    let newButtonColor;
    do {
      newButtonColor =
        buttonColors[Math.floor(Math.random() * buttonColors.length)];
    } while (newButtonColor === currentButtonColor && buttonColors.length > 1);

    setCurrentGradient(newGradient);
    setCurrentButtonColor(newButtonColor);
  };

  return (
    <div
      className={`relative bg-gradient-to-br ${currentGradient} h-screen w-full overflow-hidden transition-all duration-1000`}
    >
      {/* Glowing background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600 opacity-20 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-20 filter blur-3xl"></div>

      <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            <span className="block">Every Great Journey</span>
            <span className="block text-transparent bg-clip-text pb-2 bg-gradient-to-r from-cyan-400 to-purple-300">
              Begins With a Single Step
            </span>
          </h1>

          <p className="mt-6 max-w-lg mx-auto text-xl text-purple-100">
            Your adventure starts here. What seems small today grows into
            something extraordinary tomorrow. This is where your story begins.
          </p>

          <div className="mt-10">
            <Button
              onClick={randomizeStyles}
              className={` ${currentButtonColor} transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Animated sparkles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
