const ReviewList = ({ reviews }) => {
  return (
    <div className="mb-6">
           {" "}
      <h3 className="text-xl font-semibold mb-4 text-center">Testimoni Tamu</h3>
           {" "}
      {reviews.length === 0 ? (
        <p className="italic text-gray-500 text-center">Belum ada testimoni.</p>
      ) : (
        <div className="flex justify-center">
                   {" "}
          <div className="flex overflow-x-auto space-x-4 pb-2 px-4">
                       {" "}
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[350px] max-w-[350px] bg-white shadow rounded p-4 flex-shrink-0 break-words"
              >
                               {" "}
                <p className="font-semibold mb-2">{review.name}</p>             
                  <p className="italic break-words">"{review.text}"</p>         
                   {" "}
              </div>
            ))}
                     {" "}
          </div>
                 {" "}
        </div>
      )}
         {" "}
    </div>
  );
};
export default ReviewList;
