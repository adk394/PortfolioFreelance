import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// npm install react-zoom-pan-pinch

const CANVAS_SIZE = 1000;

// Fotos de prueba, pequeñas (un poco más grandes que los puntos del grid).
// "cursorText" es el mensaje gracioso que sale pegado al cursor al pasar por encima.
export const items = [
  {
    top: 40,
    left: 60,
    size: 150,
    src: "./dragAboutMePhotos/catR.png",
    cursorText: "Silly cat, hehe",

  },
  {
    top: 330,
    left: 600,
    size: 150,
    src: "./dragAboutMePhotos/domokunR.png",
    cursorText: "Nerd domo-kun in pixel art!",

  },
  {
    top: 60,
    left: 780,
    size: 150,
    src: "./dragAboutMePhotos/folderR.png",
    cursorText: "Yoshitomo nara fan (my folder)",

  },
  {
    top: 620,
    left: 420,
    size: 200,
    src: "./dragAboutMePhotos/foto2.jpeg",
    cursorText: "ddd",

  },
  {
    top: 300,
    left: 220,
    size: 200,
    src: "./dragAboutMePhotos/fotomuseo.jpeg",
    cursorText: "ddd",

  },
  {
    top: 660,
    left: 720,
    size: 220,
    src: "./dragAboutMePhotos/miffyR.png",
    cursorText: "Miffy, directly from the Netherlands",

  },
  {
    top: 40,
    left: 420,
    size: 80,
    src: "./dragAboutMePhotos/smileR.png",
    cursorText: "Project Zomboid (:",

  },
  {
    top: 750,
    left: 100,
    size: 220,
    src: "./dragAboutMePhotos/smiskiR.png",
    cursorText: "Smiski, the best",
  },
];

// Grid de puntos grises sutiles, generado con un radial-gradient repetido
const dotGridStyle = {
  backgroundImage:
    "radial-gradient(circle, rgba(0,0,0,0.10) 2px, transparent 0px)",
  backgroundSize: "24px 24px",
};

export default function DraggableGallerySimple() {
  return (
    <div className="w-full h-full overflow-hidden">
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={1}
        // límites: no dejar que el lienzo se salga del viewport
        panning={{ velocityDisabled: true }}
        wheel={{ disabled: true }}
        doubleClick={{ disabled: true }}
      >
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%" }}
          contentStyle={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
        >
          <div
            className="relative bg-white rounded-2xl"
            style={{ width: CANVAS_SIZE, height: CANVAS_SIZE, ...dotGridStyle }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                data-cursor-text={item.cursorText}
                className="absolute overflow-hidden  rounded-[25px] cursor-pointer"
                style={{
                  top: item.top,
                  left: item.left,
                  width: item.size,
                  height: item.size,
                }}
              >
                <img
                  src={item.src}
                  alt=""
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />
              </div>
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
