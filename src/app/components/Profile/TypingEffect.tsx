'use client'
import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import { words } from "@/util/Portfolio";


const TypingEffect = () => {


  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true); 

  const typingSpeed = 100;
  const deletingSpeed = 100; 
  const pauseTime = 2000; 

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentWord.substring(0, prev.length - 1));
      }, deletingSpeed);
    }

    if (displayedText === currentWord && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    }

    if (displayedText === "" && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <h1 className={styles.typingEffectTxt}>
      {displayedText}
      {cursorVisible && <span className="cursor">|</span>} {/* Blinking cursor */}
    </h1>
  );
};

export default TypingEffect;
