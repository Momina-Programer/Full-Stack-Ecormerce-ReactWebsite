import { useState, useEffect } from "react";
import Glide from "@glidejs/glide";

export default function CarouselControlsOutside() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    });

    if (data.length > 0) {
      slider.mount();
    }

    return () => {
      slider.destroy();
    };
  }, [data]); // Mount Glide only when data is ready

  useEffect(() => {
    const Product = "http://127.0.0.1:8000/api/homeproducts";

    fetch(Product)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((productData) => {
        const productsArray = Array.isArray(productData)
          ? productData
          : productData.data || productData.products || [];
        setData(productsArray);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error.message}</h3>;

  return (
    <div className="glide-04 relative w-full">
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          {data.map((item) => (
            <li key={item.id} className="px-2">
              <img
                src={item.image}
                alt={item.name}
                className="m-auto max-h-full w-full max-w-full"
              />
              <div className="text-center mt-2">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="flex w-full items-center justify-center gap-2 p-4"
        data-glide-el="controls"
      >
        <button
           className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white text-black transition duration-300 hover:border-white hover:text-black focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          &larr;
        </button>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white text-black transition duration-300 hover:border-white hover:text-black focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
