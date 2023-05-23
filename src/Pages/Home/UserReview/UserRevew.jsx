import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && rating && comment) {
      const newReview = {
        id: new Date().getTime(),
        name,
        rating,
        comment,
      };

      setReviews([...reviews, newReview]);
      setName('');
      setRating(0);
      setComment('');
    }
  };

  return (
    <div className='py-10 my-10 text-center bg-gray-100'>
      <h2 className="text-3xl font-bold mb-4">Write Your Reviews</h2>
      <div className="mb-4">
        {reviews.length === 0 ? (
          <p></p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((review) => (
              <li key={review.id}>
                <div className="bg-gray-100 p-4">
                  <h3 className="font-bold">{review.name}</h3>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="input input-bordered px-2 py-1"
            type="text"
            id="name"
            value={name}
            placeholder='name'
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="rating">
            Rating:
          </label>
          <select
            className="input input-bordered px-2 py-1"
            id="rating"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="0">Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="comment">
            Comment:
          </label>
          <textarea
            className="input input-bordered px-2 py-1"
            id="comment"
            rows="4"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewSection;
