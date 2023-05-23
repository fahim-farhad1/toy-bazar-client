import React from "react";
import image1 from "../../../assets/Gallery-Image/300px-Bumblebee-Prime-stock-render.jpg";
import image2 from "../../../assets/Gallery-Image/FIGHOT908908_1.jpg";
import image3 from "../../../assets/Gallery-Image/542798-Product-0-I-637719222995644614.webp";
import image4 from "../../../assets/Gallery-Image/Beast-Wars-Transformers-Optimus-Primal-Statue.jpg";
import image5 from "../../../assets/Gallery-Image/49632852-20c0-4ab5-bb5c-8c15b0a80b3b.5a217d137c7efbdd9152b72f952ae57d.webp";
import image6 from "../../../assets/Gallery-Image/maxresdefault.jpg";

const Gallery = () => {
  return (
    <div className="mt-3">
      <p className="text-center font-bold text-3xl mt-5 -mb-5 text-orange-500">
        Toys Gallery
      </p>
      <div className="flex justify-center">
      <hr />
      <p className="text-center text-lg p-16 rounded-xl">
        Welcome to our wonderful world of toys! We're delighted to bring you a
        wide <br /> range of toys that will captivate the imaginations of children and
        adults alike. Whether you're searching <br /> for the perfect gift or simply
        looking to add to your collection, we have something for everyone.
      </p>
      <hr />
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image1}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image2}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image3}
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image4}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image5}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
