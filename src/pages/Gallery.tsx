import { useMemo, useState } from "react";
import {
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";

const categories = ["All", "Forests", "Threats", "Communities", "Watersheds"] as const;
type Category = (typeof categories)[number];

type GalleryItem = {
  youtubeId: string;
  title: string;
  location: string;
  category: Category;
  description: string;
  channel: string;
};

const galleryItems: GalleryItem[] = [
  {
    youtubeId: "6giJejuNhNY",
    title: "Fighting to save the Sierra Madre rainforest",
    location: "Sierra Madre, Luzon",
    category: "Threats",
    description: "A report on forest loss, illegal logging, and the people working to restore and protect the Sierra Madre rainforest.",
    channel: "BBC News",
  },
  {
    youtubeId: "wFb2_0qr93g",
    title: "Tree nurturing in the Sierra Madre",
    location: "Siniloan, Laguna",
    category: "Forests",
    description: "Local communities and volunteers demonstrate how tree nurturing supports long-term forest recovery in the mountain range.",
    channel: "FEED Inc.",
  },
  {
    youtubeId: "0nsIp5jNomI",
    title: "Life with a Dumagat community",
    location: "Sierra Madre highlands",
    category: "Communities",
    description: "A visit with a Dumagat community sharing its traditions, everyday life, and relationship with the surrounding forest.",
    channel: "UNICO",
  },
  {
    youtubeId: "1v5A3yTteis",
    title: "Protect Sierra Madre",
    location: "Sierra Madre, Luzon",
    category: "Threats",
    description: "An advocacy video about the effects of illegal logging, mining, quarrying, and deforestation across the range.",
    channel: "Protect Sierra Madre",
  },
  {
    youtubeId: "a8u_U3NyOiA",
    title: "Deforestation and increased flood risk",
    location: "Sierra Madre, Luzon",
    category: "Threats",
    description: "A report connecting shrinking Sierra Madre forest cover with greater flooding risks for communities and watersheds across Luzon.",
    channel: "One News PH",
  },
  {
    youtubeId: "XUyXGqCZKWM",
    title: "Forest loss and downstream flooding",
    location: "Sierra Madre watersheds",
    category: "Watersheds",
    description: "An explainer showing how damaged mountain forests can worsen flooding and why restoring natural watersheds helps protect downstream communities.",
    channel: "GMA News",
  },
];

const videoIds = galleryItems.map((item) => item.youtubeId);
if (new Set(videoIds).size !== videoIds.length) {
  throw new Error("Gallery videos must use unique YouTube URLs.");
}

const getWatchUrl = (youtubeId: string) => `https://www.youtube.com/watch?v=${youtubeId}`;
const getEmbedUrl = (youtubeId: string) => `https://www.youtube-nocookie.com/embed/${youtubeId}`;

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const visibleItems = useMemo(
    () => galleryItems.filter((item) => selectedCategory === "All" || item.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <section className="w-full border-t border-gray-200 !pb-12 text-teal-8">
      <div className="flex w-full items-center gap-3 !px-3 !pt-7 !pb-2 sm:gap-4 sm:!px-6 sm:!pt-8">
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        <div className="text-center">
          <h1 className="flex items-center justify-center gap-2 !text-xl font-bold !text-teal-8">
            <FaYoutube aria-hidden="true" className="text-red-600" /> Sierra Madre Video Gallery
          </h1>
          <p className="!mt-1 text-xs text-gray-600">Watch stories about the forests, threats, communities, and watersheds of Luzon's eastern range</p>
        </div>
        <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 !px-3 !py-5 sm:!px-6 sm:!py-6" aria-label="Video categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`cursor-pointer rounded-md border !px-4 !py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${selectedCategory === category ? "border-teal-8 bg-teal-8 text-white" : "border-gray-200 bg-white text-teal-8 hover:border-teal-700 hover:bg-green-50"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 !px-3 sm:grid-cols-2 sm:!px-6 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.youtubeId} className="min-w-0 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="aspect-video w-full bg-gray-950">
              <iframe
                src={getEmbedUrl(item.youtubeId)}
                title={item.title}
                className="h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="!p-4">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-sm font-bold leading-snug text-teal-8">{item.title}</h2>
                <span className="shrink-0 rounded bg-teal-8 !px-2 !py-1 text-[11px] font-semibold text-white">{item.category}</span>
              </div>
              <p className="!mt-1 flex items-start gap-1.5 text-xs text-gray-500">
                <FaMapMarkerAlt aria-hidden="true" className="mt-0.5 shrink-0" /> {item.location}
              </p>
              <p className="!mt-3 text-xs leading-relaxed text-gray-700">{item.description}</p>
              <a
                href={getWatchUrl(item.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="!mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                Watch on YouTube: {item.channel} <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
