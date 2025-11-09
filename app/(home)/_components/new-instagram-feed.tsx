"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ExternalLink, Footprints, PartyPopper, Trophy, Award, Medal, BicepsFlexed } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const instagramPosts = [
    {
        id: 1,
        imageUrl: "/images/instagram/post1.jpeg",
        postUrl: "https://www.instagram.com/p/DHAjNyMPUDt/",
        caption: "Amazing start to the marathon! 🏃‍♂️",
        likes: "315",
        comments: "1",
    },
    {
        id: 2,
        imageUrl: "/images/instagram/post2.jpeg",
        postUrl: "https://www.instagram.com/p/DGnd98RtDJF/",
        caption: "छत्तीसगढ़िया सबले बढ़िया",
        likes: "189K",
        comments: "1663",
    },
    {
        id: 3,
        imageUrl: "/images/instagram/post3.jpeg",
        postUrl: "https://www.instagram.com/p/DG-2QX5zp7-/",
        caption: "Meet our Organizers! 🤝",
        likes: "262",
        comments: "",
    },
    {
        id: 4,
        imageUrl: "/images/instagram/post4.jpeg",
        postUrl: "https://www.instagram.com/p/DGsO5leyf7G/s",
        caption: "Runners crossing the finish line! 🎉",
        likes: "2.2K",
        comments: "8",
    },
    {
        id: 5,
        imageUrl: "/images/instagram/post5.jpeg",
        postUrl: "https://www.instagram.com/p/DGvVKqAvfya/",
        caption: "An event to cherish forever! ❤️",
        likes: "238",
        comments: "2",
    },
    {
        id: 6,
        imageUrl: "/images/instagram/post6.jpeg",
        postUrl: "https://www.instagram.com/reel/DG3EJwaTyZ-/",
        caption: "The energy was unmatched! ⚡",
        likes: "1.3K",
        comments: "11",
    },
];

// Floating Circles Component
const FloatingCircles = () => {
    const circles = [
        { size: 600, delay: 0, duration: 20, x: "5%", y: "15%" },
        { size: 550, delay: 2, duration: 25, x: "75%", y: "10%" },
        { size: 650, delay: 4, duration: 22, x: "10%", y: "60%" },
        { size: 500, delay: 1, duration: 28, x: "80%", y: "55%" },
        { size: 580, delay: 3, duration: 24, x: "45%", y: "5%" },
        { size: 520, delay: 5, duration: 26, x: "65%", y: "75%" },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {circles.map((circle, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full bg-purple-300/20 blur-3xl"
                    style={{
                        width: circle.size,
                        height: circle.size,
                        left: circle.x,
                        top: circle.y,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 1.15, 1],
                        opacity: [0, 0.3, 0.2, 0.3],
                        x: [0, 40, -20, 40],
                        y: [0, -20, 40, -20],
                    }}
                    transition={{
                        duration: circle.duration,
                        delay: circle.delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

const icons = [
    { component: Instagram, x: 150},
    { component: PartyPopper, x: -200},
    { component: Medal, x: 200},
    { component: Trophy, x: -250},
];

// Mobile Frame Component
const MobileFrame = ({ imageUrl, caption, likes, comments }: any) => {
    return (
        <div className="relative w-[340px] h-[680px] bg-black rounded-[50px] shadow-2xl p-3">

            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

            {/* Screen Content */}
            <div className="relative w-full h-full bg-white rounded-[40px] overflow-hidden">
                {/* Instagram Header */}
                <div className="absolute top-0 left-0 right-0 bg-white z-20 px-4 py-3 flex items-center justify-between border-b">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                            <div className="w-full h-full rounded-full bg-white"></div>
                        </div>
                        <span className="font-semibold text-sm">abujhmad_marathon</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-gray-800"></div>
                        <div className="w-1 h-1 rounded-full bg-gray-800"></div>
                        <div className="w-1 h-1 rounded-full bg-gray-800"></div>
                    </div>
                </div>

                {/* Image */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageUrl}
                        initial={{ scale: 0.95, opacity: 1 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 mt-14"
                    >
                        <Image
                            src={imageUrl}
                            alt={caption}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Instagram Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white z-20 px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-4">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </div>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                        </svg>
                    </div>
                    <div className="text-sm font-semibold">{likes} likes</div>
                    <div className="text-sm text-gray-600 truncate">{caption}</div>
                </div>
            </div>
        </div>
    );
};

// Floating Post Component
const FloatingPost = ({
    post,
    index,
    isActive,
    onClick,
    isLarge = false,
}: {
    post: any;
    index: number;
    isActive: boolean;
    onClick: () => void;
    isLarge?: boolean;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index < 3 ? -50 : 50, scale: 0 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            onClick={onClick}
            className={`relative ${isLarge ? 'w-full h-[400px]' : 'w-full h-[292px]'} rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${isActive
                ? "ring-4 ring-primary scale-105 opacity-100"
                : "hover:scale-105 opacity-70 hover:opacity-90"
                }`}
        >
            <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-2 left-2 right-2">
                <div className="text-white text-xs font-semibold flex items-center gap-1">
                    <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {post.likes}
                </div>
            </div>
        </motion.div>
    );
};
export const NewInstagramFeed = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    // Auto-play: change image every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % instagramPosts.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handlePostClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const currentPost = instagramPosts[currentIndex];

    // Split posts into left (0,1,2) and right (3,4,5)
    const leftPosts = instagramPosts.slice(0, 3);
    const rightPosts = instagramPosts.slice(3, 6);

    return (
        <section className="relative pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 pt-10 overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                    <Instagram className="w-5 h-5" />
                    <span className="font-semibold">FOLLOW OUR JOURNEY</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Relive the{" "}
                    <span className="text-primary font-bold">Previous Edition</span>
                </h2>

                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
                    Experience the energy, passion, and community spirit from our last
                    marathon. Join us in creating more unforgettable memories!
                </p>
            </motion.div>

            <div className="container mx-auto relative z-20  bg-purple-400 py-10 px-5 pb-20 rounded-3xl">

                <div className="relative">

                    

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center my-8 mt-5"
                    >
                        <a
                            href="https://www.instagram.com/abujhmad_marathon/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors shadow-lg hover:shadow-xl"
                        >
                            <Instagram className="w-5 h-5" />
                            View More on Instagram
                            <ExternalLink className="w-4 h-4" />
                        </a>

                        {icons.map((icon, index) => {
                        const IconComponent = icon.component;
                        return (
                            <motion.div
                                key={index}
                                className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                initial={{ x: 0, y: 0, opacity: 0 }}
                                whileInView={{
                                    x: icon.x,
                                    opacity: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <IconComponent size={40} />
                            </motion.div>
                        );
                    })}
                    </motion.div>
                </div>




                <div className="flex justify-center items-center gap-4 lg:gap-8 relative min-h-[700px]">




                    {/* Left Side - 3 Posts: 2 small on left, 1 large on right */}
                    <div className="hidden lg:grid grid-cols-2 gap-4 w-[400px] h-[600px]">
                        <div className="flex flex-col gap-4">
                            <FloatingPost
                                post={leftPosts[0]}
                                index={0}
                                isActive={currentIndex === 0}
                                onClick={() => handlePostClick(0)}
                            />
                            <FloatingPost
                                post={leftPosts[1]}
                                index={1}
                                isActive={currentIndex === 1}
                                onClick={() => handlePostClick(1)}
                            />
                        </div>
                        <div className="row-span-2 flex items-center">
                            <FloatingPost
                                post={leftPosts[2]}
                                index={2}
                                isActive={currentIndex === 2}
                                onClick={() => handlePostClick(2)}
                                isLarge
                            />
                        </div>
                    </div>

                    {/* Main Phone Frame */}
                    <div className="relative">
                        <MobileFrame
                            imageUrl={currentPost.imageUrl}
                            caption={currentPost.caption}
                            likes={currentPost.likes}
                            comments={currentPost.comments}
                        />

                        {/* Dots Indicator */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                            {instagramPosts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-purple-700 w-8" : "bg-white"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - 3 Posts: 1 large on left, 2 small on right */}
                    <div className="hidden lg:grid grid-cols-2 gap-4 w-[400px] h-[600px]">
                        <div className="row-span-2 flex items-center">
                            <FloatingPost
                                post={rightPosts[0]}
                                index={3}
                                isActive={currentIndex === 3}
                                onClick={() => handlePostClick(3)}
                                isLarge
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <FloatingPost
                                post={rightPosts[1]}
                                index={4}
                                isActive={currentIndex === 4}
                                onClick={() => handlePostClick(4)}
                            />
                            <FloatingPost
                                post={rightPosts[2]}
                                index={5}
                                isActive={currentIndex === 5}
                                onClick={() => handlePostClick(5)}
                            />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};