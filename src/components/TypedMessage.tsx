
import { useState, useEffect } from "react";

interface TypedMessageProps {
  messages: string[];
  speed?: number;
  delay?: number;
}

const TypedMessage = ({ messages, speed = 100, delay = 2000 }: TypedMessageProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) return;

    const currentMessage = messages[currentMessageIndex];
    
    if (isTyping) {
      if (currentText.length < currentMessage.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentMessage.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, delay);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timer);
      } else {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentMessageIndex, isTyping, messages, speed, delay]);

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-cosmic">
        {currentText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default TypedMessage;
