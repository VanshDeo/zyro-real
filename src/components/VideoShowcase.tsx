'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface VideoShowcaseProps {
    videos?: {
        src: string;
        thumbnail?: string;
        title: string;
        description?: string;
    }[];
}

export default function VideoShowcase({ videos }: VideoShowcaseProps) {
    const [activeVideo, setActiveVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Sample video data if none provided
    const showcaseVideos = videos || [
        {
            src: '',
            thumbnail: '/images/terrarium.jpg',
            title: 'Green Innovation',
            description: 'Pioneering sustainable technology'
        },
        {
            src: '',
            thumbnail: '/images/forest-canopy.jpg',
            title: 'Nature Tech',
            description: 'Harmony between nature and technology'
        },
        {
            src: '',
            thumbnail: '/images/earth-glow.jpg',
            title: 'Eco Future',
            description: 'Building a cleaner tomorrow'
        }
    ];

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="section relative overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Experience Our{' '}
                        <motion.span
                            className="text-[#00E08F]"
                            animate={{
                                textShadow: [
                                    '0 0 10px rgba(0, 224, 143, 0.3)',
                                    '0 0 30px rgba(0, 224, 143, 0.6)',
                                    '0 0 10px rgba(0, 224, 143, 0.3)'
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Vision
                        </motion.span>
                    </h2>
                    <p className="text-[#A1A1A1] max-w-2xl mx-auto">
                        Watch how we&apos;re transforming the future with sustainable technology
                    </p>
                </motion.div>

                {/* Main Video Display */}
                <motion.div
                    className="relative max-w-4xl mx-auto mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="relative aspect-video rounded-3xl overflow-hidden glass">
                        {/* Video or Thumbnail */}
                        {showcaseVideos[activeVideo].src ? (
                            <video
                                ref={videoRef}
                                src={showcaseVideos[activeVideo].src}
                                poster={showcaseVideos[activeVideo].thumbnail}
                                className="w-full h-full object-cover"
                                onEnded={() => setIsPlaying(false)}
                            />
                        ) : (
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${showcaseVideos[activeVideo].thumbnail})` }}
                            >
                                {/* Animated overlay effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-[#070B0B] via-transparent to-transparent"
                                    animate={{
                                        opacity: [0.6, 0.8, 0.6]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />

                                {/* Scan line effect */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none overflow-hidden"
                                >
                                    <motion.div
                                        className="w-full h-1 bg-gradient-to-r from-transparent via-[#00E08F]/50 to-transparent"
                                        animate={{ y: ['-100%', '1000%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                    />
                                </motion.div>
                            </div>
                        )}

                        {/* Play Button */}
                        <motion.button
                            className="absolute inset-0 flex items-center justify-center group"
                            onClick={handlePlay}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="w-20 h-20 rounded-full bg-[#00E08F]/90 flex items-center justify-center backdrop-blur-sm"
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: '0 0 40px rgba(0, 224, 143, 0.5)'
                                }}
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(0, 224, 143, 0.3)',
                                        '0 0 40px rgba(0, 224, 143, 0.5)',
                                        '0 0 20px rgba(0, 224, 143, 0.3)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {isPlaying ? (
                                    <svg className="w-8 h-8 text-[#070B0B]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                ) : (
                                    <svg className="w-8 h-8 text-[#070B0B] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </motion.div>
                        </motion.button>

                        {/* Video Info Overlay */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#070B0B] to-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={activeVideo}
                        >
                            <h3 className="text-white text-2xl font-bold mb-2">
                                {showcaseVideos[activeVideo].title}
                            </h3>
                            <p className="text-[#A1A1A1]">
                                {showcaseVideos[activeVideo].description}
                            </p>
                        </motion.div>

                        {/* Decorative corners */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00E08F] rounded-tl-lg" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#00E08F] rounded-tr-lg" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#00E08F] rounded-bl-lg" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00E08F] rounded-br-lg" />
                    </div>
                </motion.div>

                {/* Video Thumbnails */}
                <div className="flex justify-center gap-4">
                    {showcaseVideos.map((video, index) => (
                        <motion.button
                            key={index}
                            className={`relative w-32 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeVideo === index
                                    ? 'border-[#00E08F] shadow-[0_0_20px_rgba(0,224,143,0.3)]'
                                    : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                            onClick={() => {
                                setActiveVideo(index);
                                setIsPlaying(false);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${video.thumbnail})` }}
                            />
                            {activeVideo === index && (
                                <motion.div
                                    className="absolute inset-0 border-2 border-[#00E08F] rounded-xl"
                                    layoutId="activeVideo"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
