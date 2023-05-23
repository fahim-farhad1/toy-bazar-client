import React from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "I absolutely love the Marvel toys! The attention to detail is amazing, and the quality is top-notch. As a Marvel fan, these toys bring my favorite characters to life and provide endless hours of imaginative play.",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "The Marvel toys exceeded my expectations! The craftsmanship and design are exceptional. My kids enjoy reenacting epic battles between their favorite heroes and villains. These toys are a great addition to any Marvel collector or enthusiast.",
    rating: 5,
    image: "https://thumbs.dreamstime.com/b/portrait-boy-studio-years-old-emotion-doubt-portrait-boy-studio-years-old-139714090.jpg",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    comment:
      "I recently purchased the Marvel toys as a gift for my nephew, and he absolutely adores them! The level of detail on each character is impressive, and they are very durable. It's great to see him engaged in imaginative play with his favorite Marvel superheroes.",
    rating: 4,
    image: "https://www.wvi.org/sites/default/files/styles/large_780x520/public/2020-01/XG3A0788ee%20resized.jpg?itok=fNxviR22",
  },
  // Add more reviews here
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Customer Reviews
        </h2>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 mb-4"
          >
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                src={review.image}
                alt={review.name}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 mr-1">&#9733;</span>
                  <span className="text-gray-600">{review.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
