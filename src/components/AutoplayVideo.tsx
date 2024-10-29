import React, { useRef, useEffect } from 'react'

export const AutoplayVideo = ({ children }: { children: React.ReactNode }) => {
    const videoRefs = useRef<HTMLVideoElement[]>([]);
    const clickListenerAdded = useRef(false);  // Track if click listener is added

    const attemptToPlayAllVideos = () => {
        videoRefs.current.forEach((video) => {
            video.play().catch(() => {
            });
        });
    };

    const handleUserInteraction = () => {
        attemptToPlayAllVideos();
        window.removeEventListener('click', handleUserInteraction);
        clickListenerAdded.current = false; // Reset flag after click
    };

    useEffect(() => {
        // If autoplay blocked, wait for user interaction
        if (!clickListenerAdded.current) {
            window.addEventListener('click', handleUserInteraction);
            clickListenerAdded.current = true; // Set flag to true
        }
        return () => {
            window.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    return (
        <video
            muted
            loop
            playsInline
            ref={(el) => {
                if (el) {
                    el.play().catch(() => {
                        videoRefs.current.push(el);
                    }); // Attempt to play video

                }
            }}
        // preload="metadata"
        >
            {children}
        </video>
    );
};