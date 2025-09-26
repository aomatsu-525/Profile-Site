"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = string;

export default function Gallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // 静的生成された manifest.json を参照（相対パスで basePath/assetPrefix に追従）
                const res = await fetch("image/gallery/manifest.json", { cache: "no-store" });
                if (!res.ok) throw new Error("failed to load");
                const data = (await res.json()) as { images: string[] };
                setImages(data.images ?? []);
            } catch (e) {
                setError("画像の取得に失敗しました");
            } finally {
                setIsLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <section className="max-w-6xl mx-auto p-4" id="gallery">
            <p
                className="text-4xl sm:text-6xl md:text-8xl text-left ml-4 sm:ml-8 mt-8 sm:mt-16 mb-8 sm:mb-16 font-thin
        bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
            >
                Gallery
            </p>

            {isLoading && (
                <div className="text-center text-gray-600 text-xl mt-16">読み込み中...</div>
            )}

            {error && !isLoading && (
                <div className="text-center text-red-500 text-xl mt-16">{error}</div>
            )}

            {!isLoading && !error && images.length === 0 && (
                <div className="text-center text-gray-600 text-xl mt-16">
                    画像が見つかりません。`public/image/gallery` に画像を追加してください。
                </div>
            )}

            {!isLoading && !error && images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-32">
                    {images.map((src, idx) => (
                        <div
                            key={src + idx}
                            className="relative aspect-square overflow-hidden rounded-xl shadow-md bg-white"
                        >
                            <Image
                                src={src}
                                alt={`gallery-${idx}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                                priority={idx < 4}
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}


